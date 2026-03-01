interface SectionParallaxBlobsProps {
    bgShapeOffset: number;
    colorBgOffset: number;
    colorBg2Offset: number;
}

function SectionParallaxBlobs({
    bgShapeOffset,
    colorBgOffset,
    colorBg2Offset,
}: SectionParallaxBlobsProps) {
    return (
        <>
            <div
                className="absolute inset-y-0 left-1/2 -z-10 pointer-events-none brightness-[1.2] will-change-transform transition-transform duration-100 ease-out"
                style={{ transform: `translateX(-50%) translateY(${bgShapeOffset}px)` }}
            >
                <img src="/bg-shape.png" alt="shape-img" />
            </div>

            <div
                className="absolute bottom-1/4 left-0 -z-10 pointer-events-none brightness-[1.2] will-change-transform transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${colorBgOffset}px)` }}
            >
                <img src="/color-bg-shape.png" alt="img" />
            </div>

            <div
                className="absolute right-[-100px] top-[-12%] -z-10 pointer-events-none brightness-[1.2] will-change-transform transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${colorBg2Offset}px)` }}
            >
                <img src="/color-bg-shape-2.png" alt="img" />
            </div>
        </>
    );
}

export default SectionParallaxBlobs;
