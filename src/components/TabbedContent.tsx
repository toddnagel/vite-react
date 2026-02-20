import { useState, useEffect, useRef } from "react";
import PageTitle from "./PageTitle";
import Counter from "./Counter";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("TheXoloitzquintle");
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

      // Apply parallax when section is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate scroll progress based on section's position
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Calculate parallax offset - different speeds for each blob
        const scrollProgress = Math.max(0, (windowHeight - sectionTop) / (windowHeight + sectionHeight));

        // bg-shape moves slower (0.2x speed)
        const bgShape = scrollProgress * sectionHeight * 0.2;
        // color-bg (green) moves at medium speed (0.3x speed)
        const colorBg = scrollProgress * sectionHeight * 0.3;
        // color-bg-2 (orange) moves faster (0.4x speed)
        const colorBg2 = scrollProgress * sectionHeight * 0.4;

        setBgShapeOffset(bgShape);
        setColorBgOffset(colorBg);
        setColorBg2Offset(colorBg2);
      } else {
        // Reset when section is out of viewport
        setBgShapeOffset(0);
        setColorBgOffset(0);
        setColorBg2Offset(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        <div className="section-title ml-200">
          <PageTitle title="The Sacred Legacy" animate delay={0} iconType="star" iconCount={1} />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]"
          >
            The XRPL Xoloitzquintle NFT Collection <br />
            <span>
              Presented by <b>Cryptonite</b> &amp; <b>RedShadow</b>
            </span>
          </h2>
        </div>

        <div className="mt-10 mb-10">
          <ul className="flex flex-wrap justify-center gap-5 list-none p-0 m-0" role="tablist">
            <li role="presentation">
              <button
                onClick={() => setActiveTab("TheXoloitzquintle")}
                className={`px-6 py-3 rounded-full border border-white/20 cursor-pointer transition-all text-lg font-medium ${activeTab === "TheXoloitzquintle"
                  ? "bg-[#28aae4] text-[#1a1a1a] border-[#28aae4]"
                  : "bg-[#1D1D21] text-white/70 hover:text-white hover:border-white/40"
                  }`}
                aria-selected={activeTab === "TheXoloitzquintle"}
                role="tab"
              >
                The Xoloitzquintle
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => setActiveTab("TheTeam")}
                className={`px-6 py-3 rounded-full border border-white/20 cursor-pointer transition-all text-lg font-medium ${activeTab === "TheTeam"
                  ? "bg-[#28aae4] text-[#1a1a1a] border-[#28aae4]"
                  : "bg-[#1D1D21] text-white/70 hover:text-white hover:border-white/40"
                  }`}
                aria-selected={activeTab === "TheTeam"}
                role="tab"
              >
                The Team
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => setActiveTab("TheVision")}
                className={`px-6 py-3 rounded-full border border-white/20 cursor-pointer transition-all text-lg font-medium ${activeTab === "TheVision"
                  ? "bg-[#28aae4] text-[#1a1a1a] border-[#28aae4]"
                  : "bg-[#1D1D21] text-white/70 hover:text-white hover:border-white/40"
                  }`}
                aria-selected={activeTab === "TheVision"}
                role="tab"
              >
                The Vision
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => setActiveTab("TheXoloGlobe")}
                className={`px-6 py-3 rounded-full border border-white/20 cursor-pointer transition-all text-lg font-medium ${activeTab === "TheXoloGlobe"
                  ? "bg-[#28aae4] text-[#1a1a1a] border-[#28aae4]"
                  : "bg-[#1D1D21] text-white/70 hover:text-white hover:border-white/40"
                  }`}
                aria-selected={activeTab === "TheXoloGlobe"}
                role="tab"
              >
                The XoloGlobe
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => setActiveTab("TheMint")}
                className={`px-6 py-3 rounded-full border border-white/20 cursor-pointer transition-all text-lg font-medium ${activeTab === "TheMint"
                  ? "bg-[#28aae4] text-[#1a1a1a] border-[#28aae4]"
                  : "bg-[#1D1D21] text-white/70 hover:text-white hover:border-white/40"
                  }`}
                aria-selected={activeTab === "TheMint"}
                role="tab"
              >
                The Mint
              </button>
            </li>
          </ul>
        </div>
        <div className="about-wrapper mt-4 mt-md-0">
          <div className="tab-content bg-black/40 p-4 rounded-lg">
            <div
              id="TheXoloitzquintle"
              className={`tab-pane ${activeTab === "TheXoloitzquintle" ? "block" : "hidden"}`}
              role="tabpanel"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
                Mythic Journey of the Xolo: Gods, Guardians, and Eternal Bonds
              </h3>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] mb-4">
                Picture this: the Aztec cosmos is basically a chaotic family reunion that never ends. At the center? The ultimate twin duo—Quetzalcoatl, the chill, feathered-serpent genius of wind, wisdom, creation, and "let's make everything better," and his rowdy, dog-headed brother Xolotl, the lightning-fast trickster god of fire, transformation, deformities, and "hold my conch shell while I pull off the impossible."
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4">
                These two aren't just siblings; they're the original dynamic duo who literally rebuilt humanity after the world got wrecked four times (because ancient gods apparently loved a good reset button). Quetzalcoatl, ever the visionary, decides it's time for round five: populate the earth with actual people. But plot twist—he needs the sacred bones from the previous eras, stashed deep in Mictlan, the shadowy, nine-level underworld ruled by the skeletal party-pooper Mictlantecuhtli (the Lord of the Dead) and his queen Mictecacihuatl.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mb-4">
                Quetzalcoatl can't solo this dungeon crawl. Enter Xolotl: dog-faced, shape-shifting, lightning-charged, and 100% ride-or-die. His name literally echoes in the word xoloitzcuintle—the sacred hairless dog bred in his image. Xolotl's like, "Bro, I've been guiding the sun through the underworld every night. I know the shortcuts. Let's go steal some bones."
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] mb-4">
                They descend into Mictlan's nightmare levels: rivers of blood, screaming winds, mountains of obsidian knives, jaguars that don't play fetch. Mictlantecuhtli isn't handing over the goods without a fight. He sets impossible trials—like blowing a conch shell with no holes. Xolotl, being the ultimate degen trickster, summons worms to drill openings. Boom—impossible becomes "done." They grab the bones and bolt, with the skeletal hordes chasing them like bad exes.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] mb-4">
                In the getaway chaos, Quetzalcoatl trips (because even gods have off days), and some bones shatter. That's why humans come in every shape, size, and weird quirk—thanks, cosmic clumsiness!
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] mb-4">
                Back topside, Quetzalcoatl mixes the bones with his own divine blood, breathing life into the current era. But Xolotl's gig doesn't stop there. He becomes the eternal soul-guide: escorting the dead through Mictlan's perils, warding off evil spirits, and making sure no one gets lost in the afterlife. That's why the Aztecs buried real xoloitzcuintles with their loved ones—loyal companions in life, healers (their body heat was legendary), and furry psychopomps in death. One Xolo to rule the journey, one soul to guide.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards] mb-4">
                Fast-forward to today: in the Xolo Dojo, we're resurrecting this epic saga on the XRPL. Your XoloNFT isn't just a pretty (or gloriously wrinkly) piece of digital art—it's a sacred guardian reborn, channeling Xolotl's fierce loyalty, trickster smarts, and unbreakable bonds. Mint one, pin it, and unlock XoloGlobe—where holders reach out P2P, turn strangers into allies, share skills, trade services, or plan real-world adventures. Just like the gods' twin pact: no middleman, no limits, eternal vibes.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.0s_forwards] mb-4">
                One Xolo, one journey, one legendary pack.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards] mb-4">
                Why the quirky spelling "Xoloitzquintle" (with that "qu" instead of "cu")? It's a loving nod to old-school Nahuatl orthography and how Spanish chroniclers/translators rendered the original xōlōitzcuintli (pronounced roughly "show-low-eats-QUEENT-lee"). The "qu" captures the guttural, ancient Aztec sound more faithfully in some traditional texts and codex styles—think of it as the mythic equivalent of using "ye olde" English for flair. We chose it to honor the deep cultural roots, keep the lore authentic, and give our guardians that extra layer of timeless mystery. (Plus, it looks cooler than plain "cu"—admit it.)
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards] mb-4">
                Own your Xolo. Guide the journey. Join the pack.
              </p>
            </div>
            <div
              id="TheVision"
              className={`tab-pane ${activeTab === "TheVision" ? "block" : "hidden"}`}
              role="tabpanel"
            >
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                Our vision is to build a vibrant, global network
                of Xolo NFT holders united through digital
                innovation and real-world networking. Central to
                this is XoloGlobe, our token-gated interactive
                world map that lets collectors pin their
                locations, showcase their NFTs, and build lasting
                relationships—unlocking peer-to-peer travel, home
                swaps, cultural exchanges, and lifelong
                connections. We strive to create a thriving
                decentralized community where art, adventure, and
                meaningful networking converge, all while honoring
                the Mesoamerican traditions of revering the
                Xoloitzquintle as a sacred protector, healer, and
                guide of souls, thereby enriching the XRPL
                ecosystem for future generations.
              </p>
              <div className="about-items">
                <div className="about-content">

                  <ul
                    className="list-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
                  >
                    <li>
                      <span>Staying in a Xolo Host’s Dwelling — Immerse yourself in local life with overnight stays in the homes of Xolo hosts around the XoloGlobe, building deep cultural connections.</span>
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
                      <span>Community Exchange Network — Tap into the XoloGlobe’s global network to offer or access member services, handmade goods, professional skills, or even work trades—fostering collaboration, learning, and mutual support beyond travel</span>
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
            <div
              id="TheTeam"
              className={`tab-pane ${activeTab === "TheTeam" ? "block" : "hidden"}`}
              role="tabpanel"
            >
              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#28aae4]">
                  Meet the Team
                </h3>
                <p className="mb-7 pt-4">
                  United by culture, art, and crypto, we're forging XoloDojo and XoloGlobe: a token-gated global tribe for trust, travel, skill-sharing, and real-world adventures.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#28aae4]">
                  Cryptonite
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-[#642ff8]">
                  Founder & Visionary Explorer
                  </h4>
                  <p className="mb-7 pt-4 text-justify text-[#8d6ca3] overflow-hidden">
                <img src="/xolo-nft-showcase-01.png" alt="Xolo Travel" className="float-left mr-4 mb-2 max-w-[166px] rounded-sm" />
                Cryptonite is a nomadic, blockchain-agnostic digital pirate who's been sailing the Cryptocurrenseas since 2016, 
            with footprints in 34 countries that have shaped a deep appreciation for diverse cultures and meaningful connections. 
            A proud XRP Army member marching forward with bullish conviction, he's the creator behind The Xoloitzquintle 
            Collection on the XRPL — fusing ancient Mesoamerican reverence for the sacred Xoloitzquintle with modern 
            innovation and genuine shared experiences. He's laying the foundation for XoloGlobe: a global, member-built 
            dojo for trust, travel, skill-sharing, and soul-guided adventures — all powered by XoloDojo. 
            Own a XoloNFT and join the voyage. If you ain't bullish, you're walking the plank.
                            </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] mt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#28aae4]">
                  RedShadow
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-[#891387]">
                  Visionary Artist & Cultural Alchemist
                  </h4>
                  <p className="mb-7 pt-4 text-justify text-[#8d6ca3] overflow-hidden">
                  <img src="/xolo-nft-showcase-01.png" alt="Xolo Travel" className="float-right ml-4 mb-2 max-w-[166px] rounded-sm" />
                  RedShadow is the visionary artist breathing life into The Xoloitzquintle Collection. With a masterful eye for 
            detail and deep respect for Mesoamerican heritage, RedShadow crafts each of the 10,001 unique XoloNFTs as 
            sacred digital guardians — blending timeless cultural symbolism with striking, evocative designs that honor 
            the Xoloitzquintle's role as a spiritual companion and soul guide. Teaming with Cryptonite, RedShadow's 
            artistry forms the visual heart of XoloDojo and XoloGlobe, inviting holders into a world where ancient 
            legacy meets modern community and real-world reciprocity.
                            </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards] mt-4 clear-both">
              <h3 className="text-2xl md:text-3xl font-bold text-[#28aae4]">
              Code
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-[#891387]">
                Lead Builder & Degen Architect
                  </h4>
                  <p className="mb-7 pt-4 text-justify text-[#8d6ca3] overflow-hidden">
                  <img src="/xolo-nft-showcase-01.png" alt="Xolo Travel" className="float-left mr-4 mb-2 max-w-[166px] rounded-sm" />
                  Code is a battle-hardened degen from the golden Clubhouse days on Ethereum, a seasoned crypto trader with razor-sharp market instincts and hands-on building experience. Fluid in React.js and battle-tested in high-stakes web development, he's shipped name-brand websites (under NDA) for top players in the space. Now building with the Xolo pack on XRPL, Code delivers the technical backbone for XoloDojo and XoloGlobe—turning visionary ideas into seamless, secure, token-gated experiences. From smart community tools to immersive interfaces, he ensures the dojo runs smoothly, the globe connects flawlessly, and the pack thrives in Web3. Degen roots. Builder soul. Xolo loyalty.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards]">
              <p className="mb-7">
              Together, we're not just minting NFTs — we're summoning a global pack of guardians ready to explore, connect, and build the future.
                </p>
              </div>
            </div>
            <div
              id="TheXoloGlobe"
              className={`tab-pane ${activeTab === "TheXoloGlobe" ? "block" : "hidden"}`}
              role="tabpanel"
            >
              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#28aae4]">
                  The living map of our global community
                </h3>
                <p>
                  Inside the Xolo Dojo, the XoloGlobe comes alive on
                  an interactive, Mapbox-powered world map. Verified
                  Xolo NFT holders pin their locations, showcase their
                  unique Xolo, and discover fellow members across the
                  planet.
                </p>
                <p>
                  This isn't just a map — it's where digital ownership
                  turns into real human connection. Find a host for an
                  authentic stay, arrange a home swap, share a meal,
                  join a day adventure, or exchange skills with someone
                  whose pin catches your eye.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mt-4">
                <h4 className="text-lg md:text-xl font-semibold text-[#891387] mb-3">
                  Exclusive, token-gated, and built on trust
                </h4>
                <p>
                  Only holders of a Xolo NFT can pin and fully
                  interact. Access is simple and secure — just connect
                  your wallet. No personal data required, just proof
                  of community membership.
                </p>
              </div>
              <div className="about-items">
                <div className="about-content">


                  <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] mt-4">
                    <h4 className="text-lg md:text-xl font-semibold text-[#891387] mb-3">
                      How It Works
                    </h4>

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
                        <span><strong className="text-[#f7eab7]">Discover &amp; Connect</strong> — Explore pins worldwide. Click any to view their Xolo, profile, and current offerings. Reach out directly to:</span>
                        <ul className="sublist mt-3">
                          <li>Stay in a fellow Xolo's dwelling for deep cultural immersion</li>
                          <li>Arrange house or dwelling swaps for cost-free travel</li>
                          <li>Enjoy peer-to-peer bed-and-breakfast with home-cooked meals and local wisdom</li>
                          <li>Meet up for coffee, lunch, dinner, or a guided adventure</li>
                          <li>Offer or access skills, services, handmade goods, or work trades</li>
                        </ul>
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
                    <p>
                      Over time, the XoloGlobe will open its doors to
                      other verified, values-aligned NFT communities who
                      share our vision of trust-based human connection.
                    </p>
                    <p>
                      Just as our Mission states: we're cultivating a
                      global dojo where shared experiences weave a
                      stronger, more connected world.
                    </p>
                  </div>

                  <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards] mt-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#28aae4]">Ready to add your pin and light up the map?</h3>
                    <p>
                      Connect your wallet and join the XoloGlobe today!
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
            <div
              id="TheMint"
              className={`tab-pane ${activeTab === "TheMint" ? "block" : "hidden"}`}
              role="tabpanel"
            >
              <section className="how-to-work-section fix">
                <div className="container">
                  <div className="section-title text-center">
                    <PageTitle title="The Xolo NFT Journey" alt="star icon" animate delay={0} />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#28aae4]">
                      Understanding the **Minting** <br />
                      <span>
                        Process <b>(4 Steps)</b>
                      </span>
                    </h3>
                  </div>
                  <div className="how-to-work-wrapper">
                    <div className="icon">
                      <div className="bar-shape">
                        <img src="/work-bar-shape.png" alt="bar shape" />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Set Up XRPL Wallet</h3>
                      <p>
                        Start by downloading a compatible wallet like **Joey Wallet**
                        or Xumm.
                      </p>
                    </div>
                    <div className="arrow-shape">
                      <img src="/work-arrow.png" alt="arrow shape" />
                    </div>
                    <div className="icon">
                      <div className="bar-shape">
                        <img src="/work-bar-shape.png" alt="bar shape" />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Fund With XRP</h3>
                      <p>
                        Deposit at least **20 XRP** to meet the ledger's minimum
                        reserve requirement.
                      </p>
                    </div>
                    <div className="arrow-shape">
                      <img src="/work-arrow.png" alt="arrow shape" />
                    </div>
                    <div className="icon">
                      <div className="bar-shape">
                        <img src="/work-bar-shape.png" alt="bar shape" />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Connect to xrp.cafe</h3>
                      <p>
                        Navigate to **xrp.cafe** and securely connect your funded XRPL
                        wallet.
                      </p>
                    </div>
                    <div className="arrow-shape">
                      <img src="/work-arrow.png" alt="arrow shape" />
                    </div>
                    <div className="icon">
                      <div className="bar-shape">
                        <img src="/work-bar-shape.png" alt="bar shape" />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Mint Your Xolo NFT</h3>
                      <p>
                        Be ready for the mint on **xrp.cafe** to claim your unique
                        Xolo asset!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
                Mythic Journey of the Xolo: Gods, Guardians, and Eternal Bonds
              </h3>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] mb-4">
                Picture this: the Aztec cosmos is basically a chaotic family reunion that never ends. At the center? The ultimate twin duo—Quetzalcoatl, the chill, feathered-serpent genius of wind, wisdom, creation, and "let's make everything better," and his rowdy, dog-headed brother Xolotl, the lightning-fast trickster god of fire, transformation, deformities, and "hold my conch shell while I pull off the impossible."
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4">
                These two aren't just siblings; they're the original dynamic duo who literally rebuilt humanity after the world got wrecked four times (because ancient gods apparently loved a good reset button). Quetzalcoatl, ever the visionary, decides it's time for round five: populate the earth with actual people. But plot twist—he needs the sacred bones from the previous eras, stashed deep in Mictlan, the shadowy, nine-level underworld ruled by the skeletal party-pooper Mictlantecuhtli (the Lord of the Dead) and his queen Mictecacihuatl.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
              The Xoloitzquintle Mint
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
              Claim Your Sacred Guide
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
              10,001 Unique XRPL NFTs
              </h3> 
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mb-4">
Hand-drawn with deep Mesoamerican roots — 7 distinct traits + 217 sub-traits by RedShadow.
Built on the eco-friendly XRP Ledger: fast transactions, low fees, no gas wars.
</p>
<p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4">
Mint Status: Coming Soon
Launching on the premier XRPL marketplace: xrp.cafe
Exact date, price, and any allowlist details TBA — stay tuned via @XoloDojo and xolodojo.io.
Prepare now to own your loyal Xolo guardian and unlock the XoloGlobe: a token-gated world map for holders to connect, share locations, plan travel swaps, and build community IRL.
</p>
<h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#28aae4]">
Prepare to Mint – 4 Simple Steps
</h3> 
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4">
              <ul
                    className="list-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
                  >
                    <li>
                      <span>
                      Set Up Your XRPL Wallet
                      Download a trusted, XRPL-compatible wallet:
                      </span>
                      <ul
                    className="list-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
                  >
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
                      Fund with XRP (Minimum 20+ Recommended)
                      </span>
                      The XRP Ledger requires a base reserve (around 10–20 XRP depending on features) plus extra for fees and trust lines.
                      Send at least 20 XRP to your wallet to cover:
                      
                      </li>
                    <li>
                    <span>
                        
                        </span>
                    </li>
                    <li>
                    <span>
                        
                        </span>
                    </li>
                    </ul>





Wallet activation/reserve
Transaction costs
Mint fees (typically very low on XRPL)
Buy XRP on exchanges like Uphold, Bitrue, or via the XRPL DEX.
Connect to xrp.cafe
Go to https://xrp.cafe
Click "Connect Wallet" → Choose your XRPL wallet → Sign the secure request.
Once connected, you'll see the official Xoloitzquintle collection when it drops.
Mint Your Xolo When Live
On launch: Navigate to the Xoloitzquintle collection page.
Select your mint quantity (if allowed), confirm the transaction.
Your unique NFT arrives in seconds on the ledger.
Then verify ownership on xolodojo.io to access XoloGlobe perks!
Why Mint a Xolo?
Cultural Depth — Honor the sacred Xoloitzquintle, ancient spiritual guide and symbol of loyalty.
XRPL Benefits — Eco-friendly, pennies-per-transaction, lightning-fast, no Ethereum-style bidding wars.
Long-Term Utility — Token-gate the XoloGlobe: pin your location, connect with fellow holders worldwide, share travel stories, skills, and culture.
Community First — Join a decentralized network fostering global connections on the XRPL.
              </p>             
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="counter-wrapper">
            <div
              className="counter-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]"
            >
              <div className="icon flex items-center justify-center">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <Counter end={10001} />
                </h2>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Unique Xolo NFTs</p>
              </div>
            </div>
            <div
              className="counter-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
            >
              <div className="icon flex items-center justify-center">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <Counter end={11} />
                </h2>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Distinct Traits</p>
              </div>
            </div>
            <div
              className="counter-items opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]"
            >
              <div className="icon flex items-center justify-center">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <Counter end={333} />
                </h2>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Unique Traits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabbedContent;
