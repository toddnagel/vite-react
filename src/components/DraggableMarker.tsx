import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map, LngLatLike, MapMouseEvent, MapTouchEvent } from 'mapbox-gl';
import MapControls from './MapControls';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

interface DraggableMarkerProps {
    initialCenter?: [number, number];
    initialZoom?: number;
    style?: string;
    showCoordinates?: boolean;
    className?: string;
    onDragEnd?: (coords: { lng: number; lat: number }) => void;
}

export default function DraggableMarker({
    initialCenter,
    initialZoom = 2,
    style = 'mapbox://styles/mapbox/standard',
    showCoordinates = true,
    className = 'relative w-full h-160 my-5 mx-auto rounded-lg overflow-hidden',
    onDragEnd,
}: DraggableMarkerProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);
    // capture initial center once to avoid re-creating the map when parent re-renders
    const initialCenterRef = useRef<[number, number]>(initialCenter ?? [0, 0]);
    const geojsonRef = useRef<any>({
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [...initialCenterRef.current],
                },
            },
        ],
    });

    const [coordsText, setCoordsText] = useState<string>('');
    const [spinEnabled, setSpinEnabled] = useState(false);
    const spinningRef = useRef(false);
    const userInteracting = useRef(false);

    // Configuration
    const secondsPerRevolution = 120;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    useEffect(() => {
        if (!containerRef.current) return;
        if (mapRef.current) return; // guard against double init in StrictMode

        mapRef.current = new mapboxgl.Map({
            container: containerRef.current,
            style,
            center: initialCenterRef.current as LngLatLike,
            zoom: initialZoom,
        });

        const map = mapRef.current;
        const canvas = map.getCanvasContainer();

        function toFourDecimalPlaces(num: number) {
            return parseFloat(num.toFixed(4));
        }

        function onMove(e: MapMouseEvent | MapTouchEvent) {
            const lngLat = e.lngLat;
            canvas.style.cursor = 'grabbing';
            geojsonRef.current.features[0].geometry.coordinates = [lngLat.lng, lngLat.lat];
            const src = map.getSource('point') as mapboxgl.GeoJSONSource | undefined;
            src?.setData(geojsonRef.current);
        }

        function onUp(e: MapMouseEvent | MapTouchEvent) {
            const lngLat = e.lngLat;
            canvas.style.cursor = '';
            setCoordsText(`Longitude: ${toFourDecimalPlaces(lngLat.lng)}\nLatitude: ${toFourDecimalPlaces(lngLat.lat)}`);
            const src = map.getSource('point') as mapboxgl.GeoJSONSource | undefined;
            src?.setData(geojsonRef.current);
            map.off('mousemove', onMove);
            map.off('touchmove', onMove);
            if (onDragEnd) onDragEnd({ lng: lngLat.lng, lat: lngLat.lat });
        }

        map.on('load', () => {
            map.addSource('point', {
                type: 'geojson',
                data: geojsonRef.current,
            });

            map.addLayer({
                id: 'point',
                type: 'circle',
                source: 'point',
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#F84C4C',
                },
            });

            map.on('mouseenter', 'point', () => {
                map.setPaintProperty('point', 'circle-color', '#3bb2d0');
                canvas.style.cursor = 'move';
            });

            map.on('mouseleave', 'point', () => {
                map.setPaintProperty('point', 'circle-color', '#F84C4C');
                canvas.style.cursor = '';
            });

            map.on('mousedown', 'point', (e: MapMouseEvent) => {
                e.preventDefault();
                canvas.style.cursor = 'grab';
                userInteracting.current = true;
                map.on('mousemove', onMove);
                map.once('mouseup', onUp);
            });

            map.on('touchstart', 'point', (e: MapTouchEvent) => {
                if ((e as any).points && (e as any).points.length !== 1) return;
                e.preventDefault();
                userInteracting.current = true;
                map.on('touchmove', onMove);
                map.once('touchend', onUp);
            });

            // Spin globe function
            const spinGlobe = () => {
                if (!map) return;

                const zoom = map.getZoom();
                if (spinningRef.current && !userInteracting.current && zoom < maxSpinZoom) {
                    let distancePerSecond = 360 / secondsPerRevolution;
                    if (zoom > slowSpinZoom) {
                        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                        distancePerSecond *= zoomDif;
                    }
                    const center = map.getCenter();
                    center.lng -= distancePerSecond;
                    map.easeTo({ center, duration: 1000, easing: (n) => n });
                }
            };

            // Pause spinning on interaction
            map.on('mousedown', () => {
                userInteracting.current = true;
            });

            map.on('mouseup', () => {
                userInteracting.current = false;
                spinGlobe();
            });

            map.on('dragend', () => {
                userInteracting.current = false;
                spinGlobe();
            });

            map.on('touchend', () => {
                userInteracting.current = false;
                spinGlobe();
            });

            // Continue spinning after animation completes
            map.on('moveend', () => {
                spinGlobe();
            });
        });

        return () => {
            try {
                map.remove();
            } catch (e) {
                // ignore
            }
            mapRef.current = null;
        };
    }, []);

    const handleToggleSpin = () => {
        const newSpinState = !spinningRef.current;
        spinningRef.current = newSpinState;
        setSpinEnabled(newSpinState);

        if (newSpinState && mapRef.current) {
            // Start spinning immediately
            const zoom = mapRef.current.getZoom();
            if (zoom < maxSpinZoom) {
                const spinGlobe = () => {
                    if (!mapRef.current) return;
                    const zoom = mapRef.current.getZoom();
                    if (spinningRef.current && !userInteracting.current && zoom < maxSpinZoom) {
                        let distancePerSecond = 360 / secondsPerRevolution;
                        if (zoom > slowSpinZoom) {
                            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                            distancePerSecond *= zoomDif;
                        }
                        const center = mapRef.current.getCenter();
                        center.lng -= distancePerSecond;
                        mapRef.current.easeTo({ center, duration: 1000, easing: (n) => n });
                    }
                };
                spinGlobe();
            }
        } else if (mapRef.current) {
            // Stop spinning
            mapRef.current.stop();
        }
    };

    return (
        <div className={className}>
            <div ref={containerRef} className="w-full h-full relative">
                <MapControls mapRef={mapRef} isSpinning={spinEnabled} onToggleSpin={handleToggleSpin} />
            </div>
            {showCoordinates && coordsText && (
                <div
                    className="marker-label absolute bottom-10 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 text-xs rounded-md border border-white/10 shadow-lg font-mono whitespace-pre-line"
                >
                    {coordsText}
                </div>
            )}
        </div>
    );
}
