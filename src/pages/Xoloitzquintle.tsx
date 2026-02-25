import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

function Xoloitzquintle() {
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
                            <PageTitle title="The Xoloitzquintle" />
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                            Mythic Journey of the Xolo: Gods, Guardians, and Eternal Bonds
                        </h2>

                        <div className="space-y-6 text-white/90">
                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                                Picture this: the Aztec cosmos is basically a chaotic family reunion that never ends. At the center? The ultimate twin duo—Quetzalcoatl, the chill, feathered-serpent genius of wind, wisdom, creation, and "let's make everything better," and his rowdy, dog-headed brother Xolotl, the lightning-fast trickster god of fire, transformation, deformities, and "hold my conch shell while I pull off the impossible."
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                                These two aren't just siblings; they're the original dynamic duo who literally rebuilt humanity after the world got wrecked four times (because ancient gods apparently loved a good reset button). Quetzalcoatl, ever the visionary, decides it's time for round five: populate the earth with actual people. But plot twist—he needs the sacred bones from the previous eras, stashed deep in Mictlan, the shadowy, nine-level underworld ruled by the skeletal party-pooper Mictlantecuhtli (the Lord of the Dead) and his queen Mictecacihuatl.
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
                                Quetzalcoatl can't solo this dungeon crawl. Enter Xolotl: dog-faced, shape-shifting, lightning-charged, and 100% ride-or-die. His name literally echoes in the word xoloitzcuintle—the sacred hairless dog bred in his image. Xolotl's like, "Bro, I've been guiding the sun through the underworld every night. I know the shortcuts. Let's go steal some bones."
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                                They descend into Mictlan's nightmare levels: rivers of blood, screaming winds, mountains of obsidian knives, jaguars that don't play fetch. Mictlantecuhtli isn't handing over the goods without a fight. He sets impossible trials—like blowing a conch shell with no holes. Xolotl, being the ultimate degen trickster, summons worms to drill openings. Boom—impossible becomes "done." They grab the bones and bolt, with the skeletal hordes chasing them like bad exes.
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
                                In the getaway chaos, Quetzalcoatl trips (because even gods have off days), and some bones shatter. That's why humans come in every shape, size, and weird quirk—thanks, cosmic clumsiness!
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]">
                                Back topside, Quetzalcoatl mixes the bones with his own divine blood, breathing life into the current era. But Xolotl's gig doesn't stop there. He becomes the eternal soul-guide: escorting the dead through Mictlan's perils, warding off evil spirits, and making sure no one gets lost in the afterlife. That's why the Aztecs buried real xoloitzcuintles with their loved ones—loyal companions in life, healers (their body heat was legendary), and furry psychopomps in death. One Xolo to rule the journey, one soul to guide.
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards]">
                                Fast-forward to today: in the Xolo Dojo, we're resurrecting this epic saga on the XRPL. Your XoloNFT isn't just a pretty (or gloriously wrinkly) piece of digital art—it's a sacred guardian reborn, channeling Xolotl's fierce loyalty, trickster smarts, and unbreakable bonds. Mint one, pin it, and unlock XoloGlobe—where holders reach out P2P, turn strangers into allies, share skills, trade services, or plan real-world adventures. Just like the gods' twin pact: no middleman, no limits, eternal vibes.
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.0s_forwards]">
                                One Xolo, one journey, one legendary pack.
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards]">
                                Why the quirky spelling "Xoloitzquintle" (with that "qu" instead of "cu")? It's a loving nod to old-school Nahuatl orthography and how Spanish chroniclers/translators rendered the original xōlōitzcuintli (pronounced roughly "show-low-eats-QUEENT-lee"). The "qu" captures the guttural, ancient Aztec sound more faithfully in some traditional texts and codex styles—think of it as the mythic equivalent of using "ye olde" English for flair. We chose it to honor the deep cultural roots, keep the lore authentic, and give our guardians that extra layer of timeless mystery. (Plus, it looks cooler than plain "cu"—admit it.)
                            </p>

                            <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
                                Own your Xolo. Own your journey. Own your destination.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Xoloitzquintle;
