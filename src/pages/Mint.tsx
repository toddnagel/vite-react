import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

function Mint() {
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
                            <PageTitle title="The Mint" />
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
                            The Xoloitzquintle Mint
                        </h2>
                        <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mb-4 text-white/90">
                            Claim Your Sacred Guide from the collection of 10,001 Unique XRPL NFTs hand-drawn with deep Mesoamerican roots, featuring 7 distinct traits + 217 sub-traits by RedShadow.
                            Built on the eco-friendly XRP Ledger: fast transactions, low fees, no gas wars.
                        </p>
                        <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4 text-white/90">
                            Mint Status: Coming Soon
                            Launching on the premier XRPL marketplace: xrp.cafe
                            Exact date, price, and any allowlist details TBA — stay tuned via @XoloDojo and xolodojo.io.
                            Prepare now to own your loyal Xolo guardian and unlock the XoloGlobe: a token-gated world map for holders to connect, share locations, plan travel swaps, and build community IRL.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-[#28aae4]">
                            Prepare to Mint – 4 Simple Steps
                        </h3>
                        <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                            <ul className="list-items">
                                <li>
                                    <span>
                                        <strong className="text-[#f7eab7]">Set Up Your XRPL Wallet</strong>
                                        Download a trusted, XRPL-compatible wallet:
                                    </span>
                                    <ul className="list-items mt-2 ml-4">
                                        <li>
                                            Joey Wallet (recommended for ease)
                                        </li>
                                        <li>
                                            Xaman (formerly Xumm – strong security focus)
                                        </li>
                                        <li>
                                            MadLabs / Xoge (advanced features)
                                            Create or use an existing wallet. Back up your seed phrase securely — never share it.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>
                                        <strong className="text-[#f7eab7]">Fund with XRP (Minimum 20+ Recommended)</strong>
                                    </span>
                                    <p className="mt-2 text-white/80">
                                        The XRP Ledger requires a base reserve (around 10–20 XRP depending on features) plus extra for fees and trust lines.
                                        Send at least 20 XRP to your wallet to cover:
                                    </p>
                                    <ul className="list-items mt-2 ml-4">
                                        <li>
                                            Wallet activation/reserve
                                        </li>
                                        <li>
                                            Transaction costs
                                        </li>
                                        <li>
                                            Mint fees (typically very low on XRPL)
                                            Buy XRP on exchanges like Uphold, Bitrue, or via the XRPL DEX.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>
                                        <strong className="text-[#f7eab7]">Connect to xrp.cafe</strong>
                                    </span>
                                    <ul className="list-items mt-2 ml-4">
                                        <li>
                                            Go to https://xrp.cafe
                                        </li>
                                        <li>
                                            Click "Connect Wallet" → Choose your XRPL wallet → Sign the secure request.
                                        </li>
                                        <li>
                                            Once connected, you'll see the official Xoloitzquintle collection when it drops.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>
                                        <strong className="text-[#f7eab7]">Mint Your Xolo When Live</strong>
                                    </span>
                                    <ul className="list-items mt-2 ml-4">
                                        <li>
                                            On launch: Navigate to the Xoloitzquintle collection page.
                                        </li>
                                        <li>
                                            Select your mint quantity (if allowed), confirm the transaction.
                                        </li>
                                        <li>
                                            Your unique NFT arrives in seconds on the ledger.
                                        </li>
                                        <li>
                                            Then verify ownership on xolodojo.io to access XoloGlobe perks!
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mint;
