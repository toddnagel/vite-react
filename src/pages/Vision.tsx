import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

function Vision() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgShapeRef = useRef<HTMLDivElement>(null);
    const colorBgRef = useRef<HTMLDivElement>(null);
    const colorBg2Ref = useRef<HTMLDivElement>(null);
    const [bgShapeOffset, setBgShapeOffset] = useState(0);
    const [colorBgOffset, setColorBgOffset] = useState(0);
    const [colorBg2Offset, setColorBg2Offset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const sectionTop = rect.top;
                const sectionHeight = rect.height;

                const scrollProgress = Math.max(0, (windowHeight - sectionTop) / (windowHeight + sectionHeight));

                const bgShape = scrollProgress * sectionHeight * 0.2;
                const colorBg = scrollProgress * sectionHeight * 0.3;
                const colorBg2 = scrollProgress * sectionHeight * 0.4;

                setBgShapeOffset(bgShape);
                setColorBgOffset(colorBg);
                setColorBg2Offset(colorBg2);
            } else {
                setBgShapeOffset(0);
                setColorBgOffset(0);
                setColorBg2Offset(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
                style={{ backgroundImage: "url('/Pattern.png')" }}
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-8">
                            <PageTitle title="The Vision" />
                        </div>
                        <div className="mb-10">
                            <img src="/04a.png" alt="" className="max-h-56 w-auto object-contain md:max-h-80" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={sectionRef} className="about-section py-8 lg:py-12 section-bg fix relative overflow-hidden">
                <div
                    ref={bgShapeRef}
                    className="bg-shape absolute pointer-events-none"
                    style={{
                        top: 0,
                        bottom: 0,
                        left: '50%',
                        transform: `translateX(-50%) translateY(${bgShapeOffset}px)`,
                        willChange: 'transform',
                        transition: 'transform 0.1s ease-out',
                        zIndex: -1,
                        filter: 'brightness(1.2)',
                    }}
                >
                    <img src="/bg-shape.png" alt="shape-img" />
                </div>
                <div
                    ref={colorBgRef}
                    className="color-bg absolute pointer-events-none"
                    style={{
                        left: 0,
                        bottom: '25%',
                        transform: `translateY(${colorBgOffset}px)`,
                        willChange: 'transform',
                        transition: 'transform 0.1s ease-out',
                        zIndex: -1,
                        filter: 'brightness(1.2)',
                    }}
                >
                    <img src="/color-bg-shape.png" alt="img" />
                </div>
                <div
                    ref={colorBg2Ref}
                    className="color-bg-2 absolute pointer-events-none"
                    style={{
                        top: '-12%',
                        right: '-100px',
                        transform: `translateY(${colorBg2Offset}px)`,
                        willChange: 'transform',
                        transition: 'transform 0.1s ease-out',
                        zIndex: -1,
                        filter: 'brightness(1.2)',
                    }}
                >
                    <img src="/color-bg-shape-2.png" alt="img" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] mb-6 text-white/90">
                            Our vision is to build a vibrant, global network of Xolo NFT holders united through digital
                            innovation and real-world networking. Central to this is XoloGlobe, our token-gated interactive
                            world map that lets collectors pin their locations, showcase their NFTs, and build lasting
                            relationships—unlocking peer-to-peer travel, home swaps, cultural exchanges, and lifelong
                            connections. We strive to create a thriving decentralized community where art, adventure, and
                            meaningful networking converge, all while honoring the Mesoamerican traditions of revering the
                            Xoloitzquintle as a sacred protector, healer, and guide of souls, thereby enriching the XRPL
                            ecosystem for future generations.
                        </p>

                        <div className="about-items">
                            <div className="about-content">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#28aae4]">Global Connection Opportunities</h3>
                                <ul className="list-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
                                    <li>
                                        Staying in a Xolo Host's Dwelling — Immerse yourself in local life with overnight stays in the homes of Xolo hosts around the XoloGlobe, building deep cultural connections.
                                    </li>
                                    <li>
                                        <span>House and Dwelling Swaps — Swap homes directly with members across the XoloGlobe for cost-free, trust-based travel and reciprocal hospitality.</span>
                                    </li>
                                    <li>
                                        <span>Peer-to-Peer Bed-and-Breakfast — Enjoy personalized stays with insider tips from Xolo hosts on the XoloGlobe.</span>
                                    </li>
                                    <li>
                                        <span>Local Meetups and Day Activities — Connect with Xolo hosts for a guided day out, shared lunch, coffee, or activity—perfect for experiencing the XoloGlobe through authentic, no-commitment local encounters.</span>
                                    </li>
                                    <li>
                                        <span>Community Exchange Network — Tap into the XoloGlobe's global network to offer or access member services, handmade goods, professional skills, or even work trades—fostering collaboration, learning, and mutual support beyond travel</span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="about-image opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]"
                            >
                                <img src="/01a.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Vision;
