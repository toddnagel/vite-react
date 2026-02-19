import { useState, useEffect, useRef } from "react";
import PageTitle from "./PageTitle";
import Counter from "./Counter";
import FadeInUp from "./FadeInUp";

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
                  ? "bg-[#b7e9f7] text-[#1a1a1a] border-[#b7e9f7]"
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
                  ? "bg-[#b7e9f7] text-[#1a1a1a] border-[#b7e9f7]"
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
                  ? "bg-[#b7e9f7] text-[#1a1a1a] border-[#b7e9f7]"
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
                  ? "bg-[#b7e9f7] text-[#1a1a1a] border-[#b7e9f7]"
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
                  ? "bg-[#b7e9f7] text-[#1a1a1a] border-[#b7e9f7]"
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
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] mb-4">
                The Xoloitzquintle—known simply as Xolo—is no ordinary dog. For over 3,000 years it has been the earthly avatar of Xolotl, the Aztec god of lightning, fire, death, transformation, and deformity.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] mb-4">
                Xolotl, the shadowed twin of Quetzalcoatl, is born from Ometeotl, the primordial duality. Depicted as a skeletal dog-headed figure with blazing eyes, reversed feet, or a monstrous form, he embodies the destructive and renewing power of fire, the sudden crack of lightning, and the certainty of death. As guardian of Mictlan—the nine-layered underworld of rivers, jaguars, and freezing winds—Xolotl lights the path for souls, his fiery essence cutting through the darkness.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mb-4">
                Tied to Venus as the Evening Star, Xolotl descends into the underworld each night, escorting the sun downward while his radiant brother Quetzalcoatl rises as the Morning Star. In the Aztec creation myth, Xolotl accompanies Quetzalcoatl into Mictlan to retrieve the bones of previous worlds. He weeps sacrificial tears to loosen them, but stumbles and shatters some—explaining humanity's varied shapes and forms. As god of deformity, his own imperfect body mirrors the sacred divergence seen in the hairless Xolo.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] mb-4">
                In the Fifth Sun narrative, when the gods must sacrifice to ignite the current sun, Xolotl resists. He flees, transforming into a maguey plant, a salamander, and finally an axolotl before submitting. This defiance and ultimate surrender cement his role as the ultimate transformer—death and rebirth incarnate.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] mb-4">
                The Xolo carries this legacy. Revered by the Maya from ~1200 BCE (evidenced in burial figurines and skeletal remains at sites like Chichén Itzá and Palenque), it served as psychopomp, guiding souls through the afterlife. The Maya viewed its warm body as divine fire gifted by Xolotl, invoked in ancestor rituals and cosmic calendar ceremonies that echo today's Día de los Muertos.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] mb-4">
                The Toltecs and Aztecs elevated it further, burying Xolos with the dead as sacred escorts through Mictlan's trials, their loyalty mirroring Xolotl's guardianship. In rituals, they were offered to appease him or placed in tombs as eternal protectors.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards] mb-4">
                This mythic power endures. Frida Kahlo and Diego Rivera immortalized the Xolo's otherworldly presence; its image graces Día de los Muertos altars as a timeless symbol of guidance. Untouched by heavy selective breeding, the Xolo remains a living bridge to ancient divinity.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.0s_forwards] mb-4">
                The name itself tells a story. Rooted in Nahuatl "xōlōitzcuintli" ("dog of Xolotl"), it has appeared in many forms: Xoloitzcuintli, Xoloitzquintli, Xoloitzcuintle, and Xoloitzquintle. Spanish colonizers in 16th-century Mexico struggled with Nahuatl sounds, rendering the labialized /kʷi/ as "qui" or "qu"—hence the "q" that persists in our chosen spelling, Xoloitzquintle, as a deliberate echo of that historical fusion.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards] mb-4">
                The short form Xolo (pronounced shō lō) comes from the Nahuatl root "xōlō" (servant/guide). The "x" sound—soft "sh" as in "shoe"—was softened over centuries of oral tradition and colonial contact, becoming the accessible shō lō heard today.
              </p>
              <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards] mb-4">
                The Xoloitzquintle Collection channels this sacred narrative into 10,001 NFTs, each a digital homage to the Xolo's divine journey. Join us in carrying forward the eternal story of Xolotl, Quetzalcoatl, and the soul's passage through the cosmos.
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
                      <span>Peer-to-Peer Bed-and-Breakfast — Enjoy personalized stays with home-cooked breakfasts and insider tips from Xolo hosts on the XoloGlobe.</span>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#b7e9f7]">
                  Meet the Team
                </h3>
                <p className="mb-4">
                  United by culture, art, and crypto, we're forging XoloDojo and XoloGlobe: a token-gated global tribe for trust, travel, skill-sharing, and real-world adventures.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] mt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#b7e9f7]">
                  Cryptonite
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">Founder & Visionary Explorer</h4>
                <p className="mb-4">
                  Cryptonite is a nomadic, blockchain-agnostic digital pirate and early Clubhouse degen who's been navigating the Cryptocurrenseas since 2016. With footprints wandered in 30+ countries fueling a profound love for diverse cultures and authentic human connections, he stands proud in the XRP Army. He's the driving force building The Xoloitzquintle Collection on the XRPL — blending ancient wisdom with modern decentralized dreams. Partnering with RedShadow and Code, he's crafting XoloDojo and XoloGlobe as portals to genuine community, shared experiences, and worldwide adventures.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] mt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#b7e9f7]">RedShadow</h3>
                <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">Visionary Artist & Cultural Alchemist</h4>
                <p className="mb-4">
                  RedShadow is the masterful creative mind behind every one of the 10,001 unique XoloNFTs—one hand drawn trait at a time. With an unwavering eye for intricate detail and deep reverence for Mesoamerican heritage, he reimagines the Xoloitzcuintle as sacred digital guardians—soul guides and loyal companions infused with timeless spiritual symbolism. His evocative, striking artwork fuses ancient cultural reverence with bold, contemporary digital expression, forming the visual heartbeat of XoloDojo and XoloGlobe. Through this collaboration with Cryptonite, RedShadow honors the Xolo's role as protector and guide, inviting holders into a world where art, heritage, and blockchain converge.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards] mt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#b7e9f7]">
                  Code
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">Lead Builder & Degen Architect</h4>
                <p className="mb-4">
                  Code is a battle-hardened degen from the golden Clubhouse days on Ethereum, a seasoned crypto trader with razor-sharp market instincts and hands-on building experience. Fluid in React.js and battle-tested in high-stakes web development, he's shipped name-brand websites (under NDA) for top players in the space. Now building with the Xolo pack on XRPL, Code delivers the technical backbone for XoloDojo and XoloGlobe—turning visionary ideas into seamless, secure, token-gated experiences. From smart community tools to immersive interfaces, he ensures the dojo runs smoothly, the globe connects flawlessly, and the pack thrives in Web3. Degen roots. Builder soul. Xolo loyalty.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards] mt-4">
                <p className="mb-4">
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#b7e9f7]">
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
                <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">
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
                    <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">
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
                    <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">
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
                    <h4 className="text-lg md:text-xl font-semibold text-[#b7f7d1] mb-3">A platform for more than one tribe</h4>
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
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#b7e9f7]">Ready to add your pin and light up the map?</h3>
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
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#b7e9f7]">
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
