import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map, LngLatLike } from 'mapbox-gl';
import { useAuth0 } from '@auth0/auth0-react';
import MapControls from './MapControls';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

interface DraggablePinProps {
    initialCenter?: [number, number];
    initialZoom?: number;
    style?: string;
    showCoordinates?: boolean;
    pinName?: string;
    profileImageUrl?: string;
    className?: string;
    onDragEnd?: (coords: { lng: number; lat: number }) => void;
}

export default function DraggablePin({
    initialCenter,
    initialZoom = 2,
    style = 'mapbox://styles/mapbox/standard',
    showCoordinates = true,
    pinName = 'My Pin',
    profileImageUrl,
    className = 'relative w-full h-160 my-5 mx-auto rounded-lg overflow-hidden',
    onDragEnd,
}: DraggablePinProps) {
    const { user } = useAuth0();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);
    const initialCenterRef = useRef<[number, number]>(initialCenter ?? [0, 0]);
    const [coordsText, setCoordsText] = useState<string>('');
    const [isDragging, setIsDragging] = useState(false);
    const [spinEnabled, setSpinEnabled] = useState(false);
    const spinningRef = useRef(false);
    const userInteracting = useRef(false);
    const markerRef = useRef<mapboxgl.Marker | null>(null);
    const labelRef = useRef<HTMLDivElement | null>(null);

    // Configuration
    const secondsPerRevolution = 120;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    const imageUrl = profileImageUrl || user?.picture;

    useEffect(() => {
        if (!containerRef.current) return;
        // Prevent double initialization (React StrictMode mounts effects twice in dev)
        if (mapRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: containerRef.current,
            style,
            center: initialCenterRef.current as LngLatLike,
            zoom: initialZoom,
        });

        const map = mapRef.current;


        // Add bounce animation keyframes to document head if not already present
        if (!document.getElementById('bounce-animation')) {
            const style = document.createElement('style');
            style.id = 'bounce-animation';
            style.textContent = `
                @keyframes pinBounceDown {
                    0% { transform: scale(1) translateY(0); }
                    50% { transform: scale(1.02) translateY(2px); }
                    100% { transform: scale(1) translateY(0); }
                }
                .pin-bounce {
                    animation: pinBounceDown 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
            `;
            document.head.appendChild(style);
        }

        map.on('load', () => {
            // ensure layout/resizing is settled before adding marker
            setTimeout(() => {
                try {
                    map.resize();
                } catch (e) {
                    // ignore
                }

                // create a cleaner SVG-based marker for crisp rendering
                const markerEl = document.createElement('div');
                markerEl.style.width = '68px';
                markerEl.style.height = '76px';
                markerEl.style.display = 'block';
                markerEl.style.pointerEvents = 'auto';
                markerEl.style.position = 'relative';
                markerEl.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))';
                markerEl.style.zIndex = '1000';

                // Inner wrapper for animation (so Mapbox positioning doesn't conflict with animation)
                const contentEl = document.createElement('div');
                contentEl.style.width = '68px';
                contentEl.style.height = '76px';
                contentEl.style.position = 'relative';
                contentEl.style.transformOrigin = 'center center';

                // Use SVG for crisp pin shape
                const svgns = 'http://www.w3.org/2000/svg';
                const svg = document.createElementNS(svgns, 'svg');
                svg.setAttribute('width', '68');
                svg.setAttribute('height', '76');
                svg.setAttribute('viewBox', '0 0 24 27');

                // Define clip path for circular image
                const defs = document.createElementNS(svgns, 'defs');
                const clipPath = document.createElementNS(svgns, 'clipPath');
                clipPath.setAttribute('id', 'circleClip');
                const clipCircle = document.createElementNS(svgns, 'circle');
                clipCircle.setAttribute('cx', '12');
                clipCircle.setAttribute('cy', '12');
                clipCircle.setAttribute('r', '8');
                clipPath.appendChild(clipCircle);
                defs.appendChild(clipPath);

                // tail path (small red triangle at bottom)
                const path = document.createElementNS(svgns, 'path');
                path.setAttribute('d', 'M12 20 C12 20 18 16 12 27 C6 16 12 20 12 20 Z');
                path.setAttribute('fill', '#ff4d4f');
                path.setAttribute('stroke', 'none');

                if (imageUrl) {
                    // Use profile image
                    const image = document.createElementNS(svgns, 'image');
                    image.setAttribute('x', '4');
                    image.setAttribute('y', '4');
                    image.setAttribute('width', '16');
                    image.setAttribute('height', '16');
                    image.setAttribute('href', imageUrl);
                    image.setAttribute('clip-path', 'url(#circleClip)');
                    image.setAttribute('preserveAspectRatio', 'xMidYMid slice');

                    // white circle border
                    const border = document.createElementNS(svgns, 'circle');
                    border.setAttribute('cx', '12');
                    border.setAttribute('cy', '12');
                    border.setAttribute('r', '8');
                    border.setAttribute('fill', 'none');
                    border.setAttribute('stroke', '#fff');
                    border.setAttribute('stroke-width', '1.5');

                    svg.appendChild(defs);
                    svg.appendChild(path);
                    svg.appendChild(image);
                    svg.appendChild(border);
                } else {
                    // Fallback to red circle if no image
                    const circle = document.createElementNS(svgns, 'circle');
                    circle.setAttribute('cx', '12');
                    circle.setAttribute('cy', '12');
                    circle.setAttribute('r', '8');
                    circle.setAttribute('fill', '#ff4d4f');
                    circle.setAttribute('stroke', '#fff');
                    circle.setAttribute('stroke-width', '2');

                    svg.appendChild(path);
                    svg.appendChild(circle);
                }

                contentEl.appendChild(svg);
                markerEl.appendChild(contentEl);

                // create a draggable Marker using the custom element
                // anchor: 'bottom' makes the tail the drop point
                markerRef.current = new mapboxgl.Marker({ element: markerEl, draggable: true, anchor: 'bottom' })
                    .setLngLat(initialCenterRef.current)
                    .addTo(map);

                console.log('DraggablePin: marker created', markerRef.current);

                const toFourDecimalPlaces = (num: number) => parseFloat(num.toFixed(4));

                const onMarkerDragStart = () => {
                    setIsDragging(true);
                    // No animation on drag start, just track that we're dragging
                    contentEl.classList.remove('pin-bounce');
                };

                const onMarkerDragEnd = () => {
                    const lngLat = markerRef.current!.getLngLat();
                    setCoordsText(`${pinName}\n${toFourDecimalPlaces(lngLat.lng)}, ${toFourDecimalPlaces(lngLat.lat)}`);
                    setIsDragging(false);
                    // Apply bounce after drag ends
                    contentEl.classList.add('pin-bounce');
                    // Remove animation class after it completes to allow it to replay
                    setTimeout(() => {
                        contentEl.classList.remove('pin-bounce');
                    }, 200);
                    if (onDragEnd) onDragEnd({ lng: lngLat.lng, lat: lngLat.lat });
                };

                markerRef.current.on('dragstart', onMarkerDragStart);
                markerRef.current.on('dragend', onMarkerDragEnd);

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
            }, 0);
        });

        return () => {
            markerRef.current?.remove();
            try {
                map.remove();
            } catch (e) {
                // ignore
            }
            markerRef.current = null;
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
            <div ref={containerRef} className="w-full h-full relative b-10">
                <MapControls mapRef={mapRef} isSpinning={spinEnabled} onToggleSpin={handleToggleSpin} />
            </div>
            {showCoordinates && coordsText && (
                <div
                    ref={labelRef}
                    className="pin-label absolute bottom-10 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 text-xs rounded-md border border-white/10 shadow-lg font-mono whitespace-pre-line transition-all duration-200"
                    style={{
                        opacity: isDragging ? 0.95 : 0.85,
                        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                    }}
                >
                    {coordsText}
                </div>
            )}
        </div>
    );
}
