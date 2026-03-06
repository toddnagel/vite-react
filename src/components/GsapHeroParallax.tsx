import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface GsapHeroParallaxProps {
    imageSrc: string;
    title?: string;
    alt?: string;
    className?: string;
    imageDepth?: number;
    titleDepth?: number;
}

function GsapHeroParallax({
    imageSrc,
    title,
    alt = "Hero image",
    className = "",
    imageDepth = 20,
    titleDepth = 28,
}: GsapHeroParallaxProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    useGSAP(
        () => {
            const container = containerRef.current;
            const image = imageRef.current;
            const heading = titleRef.current;

            if (!container || !image) {
                return;
            }

            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reducedMotion) {
                return;
            }

            gsap.set(image, { scale: 1.06, transformOrigin: "center center" });
            gsap.set(image, { willChange: "transform" });
            if (heading) {
                gsap.set(heading, { willChange: "transform" });
            }

            const imageX = gsap.quickTo(image, "x", { duration: 0.8, ease: "power3.out" });
            const imageY = gsap.quickTo(image, "y", { duration: 0.8, ease: "power3.out" });
            const imageRotateX = gsap.quickTo(image, "rotationX", { duration: 0.8, ease: "power3.out" });
            const imageRotateY = gsap.quickTo(image, "rotationY", { duration: 0.8, ease: "power3.out" });

            const titleX = heading ? gsap.quickTo(heading, "x", { duration: 0.65, ease: "power3.out" }) : null;
            const titleY = heading ? gsap.quickTo(heading, "y", { duration: 0.65, ease: "power3.out" }) : null;
            const titleRotateX = heading ? gsap.quickTo(heading, "rotationX", { duration: 0.65, ease: "power3.out" }) : null;
            const titleRotateY = heading ? gsap.quickTo(heading, "rotationY", { duration: 0.65, ease: "power3.out" }) : null;

            const onMove = (event: MouseEvent) => {
                const rect = container.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width;
                const py = (event.clientY - rect.top) / rect.height;

                const nx = (px - 0.5) * 2;
                const ny = (py - 0.5) * 2;

                imageX(nx * imageDepth);
                imageY(ny * imageDepth);
                imageRotateY(nx * 4.6);
                imageRotateX(-ny * 4.6);

                titleX?.(nx * titleDepth);
                titleY?.(ny * (titleDepth * 0.6));
                titleRotateY?.(nx * 6);
                titleRotateX?.(-ny * 4);
            };

            const reset = () => {
                imageX(0);
                imageY(0);
                imageRotateX(0);
                imageRotateY(0);

                titleX?.(0);
                titleY?.(0);
                titleRotateX?.(0);
                titleRotateY?.(0);
            };

            container.addEventListener("mousemove", onMove);
            container.addEventListener("mouseleave", reset);

            return () => {
                container.removeEventListener("mousemove", onMove);
                container.removeEventListener("mouseleave", reset);
                gsap.set(image, { clearProps: "transform,willChange" });
                if (heading) {
                    gsap.set(heading, { clearProps: "transform,willChange" });
                }
            };
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className={`relative mx-auto w-full max-w-5xl [perspective:1000px] ${className}`}>
            <div className="relative overflow-hidden rounded-2xl border border-[#d534d9]/10 bg-black/20">
                <img
                    ref={imageRef}
                    src={imageSrc}
                    alt={alt}
                    className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px] [transform-style:preserve-3d]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                {title ? (
                    <div className="pointer-events-none absolute inset-0 flex items-end p-6 sm:p-8 md:p-10">
                        <h2
                            ref={titleRef}
                            className="max-w-3xl text-3xl font-bold text-white sm:text-5xl md:text-6xl [transform-style:preserve-3d]"
                        >
                            {title}
                        </h2>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default GsapHeroParallax;