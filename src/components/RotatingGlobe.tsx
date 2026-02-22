import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import MapControls from './MapControls';

// Set your Mapbox token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

export default function RotatingGlobe() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<Map | null>(null);
    const [spinEnabled, setSpinEnabled] = useState(false);
    const spinningRef = useRef(false); // Track spinning without affecting dependencies
    const userInteracting = useRef(false);

    // Configuration
    const secondsPerRevolution = 120; // Complete revolution every 2 minutes
    const maxSpinZoom = 5; // Stop rotation above zoom level 5
    const slowSpinZoom = 3; // Slow rotation between zoom 3-5

    useEffect(() => {
        if (!mapContainer.current) return;
        if (map.current) return; // guard against double init in StrictMode

        // Initialize map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/standard-satellite',
            zoom: 1.5,
            center: [-90, 40],
            pitch: 0,
        });

        map.current.on('style.load', () => {
            if (map.current) {
                map.current.setFog({}); // Set the default atmosphere style
            }
        });

        const currentMap = map.current;

        // Spin globe function
        const spinGlobe = () => {
            if (!currentMap) return;

            const zoom = currentMap.getZoom();
            if (spinningRef.current && !userInteracting.current && zoom < maxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
                    // Slow spinning at higher zooms
                    const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = currentMap.getCenter();
                center.lng -= distancePerSecond;
                // Smoothly animate the map over one second
                currentMap.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        };

        // Pause spinning on interaction
        currentMap.on('mousedown', () => {
            userInteracting.current = true;
        });

        // Restart spinning after interaction
        currentMap.on('mouseup', () => {
            userInteracting.current = false;
            spinGlobe();
        });

        currentMap.on('dragend', () => {
            userInteracting.current = false;
            spinGlobe();
        });

        currentMap.on('pitchend', () => {
            userInteracting.current = false;
            spinGlobe();
        });

        currentMap.on('rotateend', () => {
            userInteracting.current = false;
            spinGlobe();
        });

        // Continue spinning after animation completes
        currentMap.on('moveend', () => {
            spinGlobe();
        });

        // Start initial spin if enabled
        if (spinningRef.current) {
            spinGlobe();
        }

        return () => {
            try {
                currentMap.remove();
            } catch (e) {
                // ignore
            }
            map.current = null;
        };
    }, []); // Empty dependency array - only run on mount

    const handleToggleSpin = () => {
        const newSpinState = !spinningRef.current;
        spinningRef.current = newSpinState;
        setSpinEnabled(newSpinState);

        if (newSpinState && map.current) {
            // Start spinning immediately
            const zoom = map.current.getZoom();
            if (zoom < maxSpinZoom) {
                const spinGlobe = () => {
                    if (!map.current) return;
                    const zoom = map.current.getZoom();
                    if (spinningRef.current && zoom < maxSpinZoom) {
                        let distancePerSecond = 360 / secondsPerRevolution;
                        if (zoom > slowSpinZoom) {
                            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                            distancePerSecond *= zoomDif;
                        }
                        const center = map.current.getCenter();
                        center.lng -= distancePerSecond;
                        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
                    }
                };
                spinGlobe();
            }
        } else if (map.current) {
            // Stop spinning
            map.current.stop();
        }
    };

    return (
        <div className="relative w-full h-160 my-5 mx-auto rounded-lg overflow-hidden">
            <div ref={mapContainer} className="w-full h-full relative">
                <MapControls mapRef={map} isSpinning={spinEnabled} onToggleSpin={handleToggleSpin} />
            </div>
        </div>
    );
}
