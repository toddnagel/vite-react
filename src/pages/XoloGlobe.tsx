import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

function XoloGlobe() {
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
                            <PageTitle title="The XoloGlobe" />
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
                        <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#28aae4]">
                                The living map of our global community
                            </h2>
                            <p className="mb-7 text-justify text-white/90">
                                Inside the Xolo Dojo, the XoloGlobe comes alive on
                                an interactive, Mapbox-powered world map. Verified
                                Xolo NFT holders pin their locations, showcase their
                                unique Xolo, and discover fellow members across the
                                planet.
                            </p>
                            <p className="mb-7 text-white/90">
                                This isn't just a map — it's where digital ownership
                                turns into real human connection. Find a host for an
                                authentic stay, arrange a home swap, share a meal,
                                join a day adventure, or exchange skills with someone
                                whose pin catches your eye. Exclusive, token-gated, and built on trust, only holders of a Xolo NFT can pin and fully
                                interact. Access is simple and secure — just connect
                                your wallet. No personal data required, just proof
                                of community membership.
                            </p>
                        </div>

                        <div className="about-items">
                            <div className="about-content">
                                <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] mt-4">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#891387] mb-3">
                                        How It Works
                                    </h3>

                                    <ul className="list-items">
                                        <li>
                                            <span><strong className="text-[#f7eab7]">Connect Your Wallet</strong> — Click "Connect Wallet," select your XRPL wallet (Xaman Wallet, Joey Wallet, Xoge's MadLabs, etc.), and sign. We verify your Xolo NFT ownership instantly on the XRP Ledger.</span>
                                        </li>
                                        <li>
                                            <span><strong className="text-[#f7eab7]">Pin Your Location</strong> — Drop your pin anywhere meaningful — your home base, current travels, or a dream destination you're open to sharing.</span>
                                        </li>
                                        <li>
                                            <span><strong className="text-[#f7eab7]">Showcase Your Xolo</strong> — Choose which Xolo NFT to feature. Your pin displays its artwork, letting your personality shine through to the community.</span>
                                        </li>
                                        <li>
                                            <span><strong className="text-[#f7eab7]">Discover & Connect</strong> — Explore pins worldwide. Click any to view their Xolo, profile, and current offerings. Reach out directly to:</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] mt-4">
                                    <h4 className="text-lg md:text-xl font-semibold text-[#891387] mb-3">
                                        Why the Xolo Globe Matters
                                    </h4>
                                    <ul className="list-items">
                                        <li>
                                            <span>Keeps our community genuine and safe through token-gating</span>
                                        </li>
                                        <li>
                                            <span>Lets your Xolo NFT become a beacon for real-world connection</span>
                                        </li>
                                        <li>
                                            <span>Turns strangers into allies, travelers into locals, and shared pins into shared experiences</span>
                                        </li>
                                        <li>
                                            <span>Grows the living XoloGlobe — one pin, one message, one new friendship at a time</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.0s_forwards] mt-4">
                                    <h4 className="text-lg md:text-xl font-semibold text-[#891387] mb-3">A platform for more than one tribe</h4>
                                    <p className="text-white/90">
                                        Over time, the XoloGlobe will open its doors to
                                        other verified, values-aligned NFT communities who
                                        share our vision of trust-based human connection.
                                    </p>
                                    <p className="text-white/90 mt-4">
                                        Just as our Mission states: we're cultivating a
                                        global dojo where shared experiences weave a
                                        stronger, more connected world. Connect your wallet and join the XoloGlobe today!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-image opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
                            >
                                <img
                                    src="/01a.png"
                                    alt="Xolo Globe Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default XoloGlobe;
