import { useEffect, useState } from 'react';
import type { Map } from 'mapbox-gl';

interface MapControlsProps {
    mapRef: React.RefObject<Map | null>;
    isSpinning?: boolean;
    onToggleSpin?: () => void;
}

type LightPreset = 'dawn' | 'day' | 'dusk' | 'night';

export default function MapControls({ mapRef, isSpinning = false, onToggleSpin }: MapControlsProps) {
    const [currentPreset, setCurrentPreset] = useState<LightPreset>('day');
    const [zoom, setZoom] = useState(2);

    const lightPresets: { label: string; value: LightPreset }[] = [
        { label: '🌅 Dawn', value: 'dawn' },
        { label: '☀️ Day', value: 'day' },
        { label: '🌆 Dusk', value: 'dusk' },
        { label: '🌙 Night', value: 'night' },
    ];

    const handleLightPreset = (preset: LightPreset) => {
        if (mapRef.current) {
            try {
                mapRef.current.setConfigProperty('basemap', 'lightPreset', preset);
                setCurrentPreset(preset);
            } catch (e) {
                console.warn('Light preset not supported on this style:', e);
            }
        }
    };

    const handleZoom = (direction: 'in' | 'out') => {
        if (mapRef.current) {
            const currentZoom = mapRef.current.getZoom();
            const newZoom = direction === 'in' ? currentZoom + 1 : currentZoom - 1;
            mapRef.current.zoomTo(newZoom, { duration: 300 });
            setZoom(newZoom);
        }
    };

    useEffect(() => {
        if (!mapRef.current) return;

        const handleZoomChange = () => {
            setZoom(mapRef.current?.getZoom() || 2);
        };

        mapRef.current.on('zoom', handleZoomChange);
        return () => {
            mapRef.current?.off('zoom', handleZoomChange);
        };
    }, [mapRef]);

    return (
        <div className="absolute top-4 left-4 z-20 flex gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
            {/* Light Preset Buttons */}
            <div className="flex gap-1 border-r border-gray-300 pr-3">
                {lightPresets.map((preset) => (
                    <button
                        key={preset.value}
                        onClick={() => handleLightPreset(preset.value)}
                        className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                            currentPreset === preset.value
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        title={preset.label}
                    >
                        {preset.label}
                    </button>
                ))}
            </div>

            {/* Rotation Control */}
            {onToggleSpin && (
                <button
                    onClick={onToggleSpin}
                    className={`px-2 py-1 text-xs font-medium rounded transition-all border-r border-gray-300 pr-3 ${
                        isSpinning
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    title={isSpinning ? 'Pause rotation' : 'Start rotation'}
                >
                    {isSpinning ? '⏸ Pause' : '▶ Spin'}
                </button>
            )}

            {/* Zoom Controls */}
            <div className="flex gap-1">
                <button
                    onClick={() => handleZoom('in')}
                    className="px-2 py-1 text-xs font-bold rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Zoom in"
                >
                    +
                </button>
                <span className="px-2 py-1 text-xs font-bold text-gray-700 min-w-8 text-center">
                    {zoom.toFixed(1)}
                </span>
                <button
                    onClick={() => handleZoom('out')}
                    className="px-2 py-1 text-xs font-bold rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Zoom out"
                >
                    −
                </button>
            </div>
        </div>
    );
}
