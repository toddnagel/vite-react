import FadeInUp from "./FadeInUp";
import PageTitle from "./PageTitle";

function TabbedContent() {
  return (
    <section className="about-section section-padding section-bg fix">
      <div className="bg-shape">
        <img src="/bg-shape.png" alt="shape-img" />
      </div>
      <div className="color-bg">
        <img src="/color-bg-shape.png" alt="img" />
      </div>
      <div className="color-bg-2">
        <img src="/color-bg-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title ml-200">
          <PageTitle title="The Sacred Legacy" animate delay={0} />
          <h2
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            The XRPL Xoloitzquintle NFT Collection <br />
            <span>
              Presented by <b>Cryptonite</b> &amp; <b>RedShadow</b>
            </span>
          </h2>
        </div>

        <div className="tabs-navigation">
          <ul className="nav" role="tablist">
            <li
              className="nav-item wow fadeInUp"
              data-wow-delay=".3s"
              role="presentation"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <a
                href="#TheXoloitzquintle"
                data-bs-toggle="tab"
                className="nav-link active"
                aria-selected="true"
                role="tab"
              >
                The Xoloitzquintle
              </a>
            </li>
            <li
              className="nav-item wow fadeInUp"
              data-wow-delay=".4s"
              role="presentation"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <a
                href="#TheTeam"
                data-bs-toggle="tab"
                className="nav-link"
                aria-selected="false"
                role="tab"
                tabIndex={-1}
              >
                The Team
              </a>
            </li>
            <li
              className="nav-item wow fadeInUp"
              data-wow-delay=".4s"
              role="presentation"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <a
                href="#TheVision"
                data-bs-toggle="tab"
                className="nav-link"
                aria-selected="false"
                role="tab"
                tabIndex={-1}
              >
                The Vision
              </a>
            </li>
            <li
              className="nav-item wow fadeInUp"
              data-wow-delay=".5s"
              role="presentation"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <a
                href="#TheXoloGlobe"
                data-bs-toggle="tab"
                className="nav-link"
                aria-selected="false"
                role="tab"
                tabIndex={-1}
              >
                The XoloGlobe
              </a>
            </li>
            <li
              className="nav-item wow fadeInUp"
              data-wow-delay=".5s"
              role="presentation"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <a
                href="#TheMint"
                data-bs-toggle="tab"
                className="nav-link"
                aria-selected="false"
                tabIndex={-1}
                role="tab"
              >
                The Mint
              </a>
            </li>
          </ul>
        </div>
        <div className="about-wrapper mt-4 mt-md-0">
          <div className="tab-content">
            <div id="TheXoloitzquintle" className="tab-pane fade active show" role="tabpanel">
              <FadeInUp delay={0.3} as="h3" className="mb-3">
                Mythic Journey of the Xolo: Gods, Guardians, and Eternal Bonds
              </FadeInUp>
              <FadeInUp delay={0.35} as="p" className="mb-4">
                Picture this: the Aztec cosmos is basically a chaotic family reunion that never ends. At the center? The ultimate twin duo—Quetzalcoatl, the chill, feathered-serpent genius of wind, wisdom, creation, and "let's make everything better," and his rowdy, dog-headed brother Xolotl, the lightning-fast trickster god of fire, transformation, deformities, and "hold my conch shell while I pull off the impossible."
              </FadeInUp>
              <FadeInUp delay={0.4} as="p" className="mb-4">
                These two aren't just siblings; they're the original dynamic duo who literally rebuilt humanity after the world got wrecked four times (because ancient gods apparently loved a good reset button). Quetzalcoatl, ever the visionary, decides it's time for round five: populate the earth with actual people. But plot twist—he needs the sacred bones from the previous eras, stashed deep in Mictlan, the shadowy, nine-level underworld ruled by the skeletal party-pooper Mictlantecuhtli (the Lord of the Dead) and his queen Mictecacihuatl.
              </FadeInUp>
              <FadeInUp delay={0.45} as="p" className="mb-4">
                Quetzalcoatl can't solo this dungeon crawl. Enter Xolotl: dog-faced, shape-shifting, lightning-charged, and 100% ride-or-die. His name literally echoes in the word xoloitzcuintle—the sacred hairless dog bred in his image. Xolotl's like, "Bro, I've been guiding the sun through the underworld every night. I know the shortcuts. Let's go steal some bones."
              </FadeInUp>
              <FadeInUp delay={0.5} as="p" className="mb-4">
                They descend into Mictlan's nightmare levels: rivers of blood, screaming winds, mountains of obsidian knives, jaguars that don't play fetch. Mictlantecuhtli isn't handing over the goods without a fight. He sets impossible trials—like blowing a conch shell with no holes. Xolotl, being the ultimate degen trickster, summons worms to drill openings. Boom—impossible becomes "done." They grab the bones and bolt, with the skeletal hordes chasing them like bad exes.
              </FadeInUp>
              <FadeInUp delay={0.55} as="p" className="mb-4">
                In the getaway chaos, Quetzalcoatl trips (because even gods have off days), and some bones shatter. That's why humans come in every shape, size, and weird quirk—thanks, cosmic clumsiness!
              </FadeInUp>
              <FadeInUp delay={0.6} as="p" className="mb-4">
                Back topside, Quetzalcoatl mixes the bones with his own divine blood, breathing life into the current era. But Xolotl's gig doesn't stop there. He becomes the eternal soul-guide: escorting the dead through Mictlan's perils, warding off evil spirits, and making sure no one gets lost in the afterlife. That's why the Aztecs buried real xoloitzcuintles with their loved ones—loyal companions in life, healers (their body heat was legendary), and furry psychopomps in death. One Xolo to rule the journey, one soul to guide.
              </FadeInUp>
              <FadeInUp delay={0.65} as="p" className="mb-4">
                Fast-forward to today: in the Xolo Dojo, we're resurrecting this epic saga on the XRPL. Your XoloNFT isn't just a pretty (or gloriously wrinkly) piece of digital art—it's a sacred guardian reborn, channeling Xolotl's fierce loyalty, trickster smarts, and unbreakable bonds. Mint one, pin it, and unlock XoloGlobe—where holders reach out P2P, turn strangers into allies, share skills, trade services, or plan real-world adventures. Just like the gods' twin pact: no middleman, no limits, eternal vibes.
              </FadeInUp>
              <FadeInUp delay={0.7} as="p" className="mb-4">
                One Xolo, one journey, one legendary pack.
              </FadeInUp>
              <FadeInUp delay={0.75} as="p" className="mb-4">
                Why the quirky spelling "Xoloitzquintle" (with that "qu" instead of "cu")? It's a loving nod to old-school Nahuatl orthography and how Spanish chroniclers/translators rendered the original xōlōitzcuintli (pronounced roughly "show-low-eats-QUEENT-lee"). The "qu" captures the guttural, ancient Aztec sound more faithfully in some traditional texts and codex styles—think of it as the mythic equivalent of using "ye olde" English for flair. We chose it to honor the deep cultural roots, keep the lore authentic, and give our guardians that extra layer of timeless mystery. (Plus, it looks cooler than plain "cu"—admit it.)
              </FadeInUp>
              <FadeInUp delay={0.8} as="p">
                Own your Xolo. Guide the journey. Join the pack.
              </FadeInUp>
            </div>
            <div id="TheVision" className="tab-pane fade" role="tabpanel">
              <p
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
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
                ecosystem for future generations. &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;{" "}
              </p>
              <div className="about-items">
                <div className="about-content">

                  <ul
                    className="list-items wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
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
                  className="about-image wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <img src="/01a.png" alt="img" />
                </div>
              </div>
            </div>
            <div id="TheTeam" className="tab-pane fade" role="tabpanel">
              <h3
                className="wow fadeInUp mb-3"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Meet the Team
              </h3>
              <p
                className="wow fadeInUp mb-5"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                United by culture, art, and crypto, we're forging XoloDojo and XoloGlobe: a token-gated global tribe for trust, travel, skill-sharing, and real-world adventures.
              </p>
              <h3
                className="wow fadeInUp mt-5 mb-2"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Cryptonite
              </h3>
              <h4 className="mb-3">Founder & Visionary Explorer</h4>
              <p

                className="wow fadeInUp mb-4"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >

                Cryptonite is a nomadic, blockchain-agnostic digital pirate and early Clubhouse degen who's been navigating the Cryptocurrenseas since 2016. With footprints wandered in 30+ countries fueling a profound love for diverse cultures and authentic human connections, he stands proud in the XRP Army. He's the driving force building The Xoloitzquintle Collection on the XRPL — blending ancient wisdom with modern decentralized dreams. Partnering with RedShadow and Code, he's crafting XoloDojo and XoloGlobe as portals to genuine community, shared experiences, and worldwide adventures.
              </p>
              <h3
                className="wow fadeInUp mt-5 mb-2"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                RedShadow
              </h3>
              <h4 className="mb-3">Visionary Artist & Cultural Alchemist</h4>
              <p
                className="wow fadeInUp mb-4"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                RedShadow is the masterful creative mind behind every one of the 10,001 unique XoloNFTs—one hand drawn trait at a time. With an unwavering eye for intricate detail and deep reverence for Mesoamerican heritage, he reimagines the Xoloitzcuintle as sacred digital guardians—soul guides and loyal companions infused with timeless spiritual symbolism. His evocative, striking artwork fuses ancient cultural reverence with bold, contemporary digital expression, forming the visual heartbeat of XoloDojo and XoloGlobe. Through this collaboration with Cryptonite, RedShadow honors the Xolo's role as protector and guide, inviting holders into a world where art, heritage, and blockchain converge.
              </p>
              <h3
                className="wow fadeInUp mt-5 mb-2"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Code
              </h3>
              <h4 className="mb-3">Lead Builder & Degen Architect</h4>
              <p
                className="wow fadeInUp mb-4"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >

                Code is a battle-hardened degen from the golden Clubhouse days on Ethereum, a seasoned crypto trader with razor-sharp market instincts and hands-on building experience. Fluid in React.js and battle-tested in high-stakes web development, he's shipped name-brand websites (under NDA) for top players in the space. Now building with the Xolo pack on XRPL, Code delivers the technical backbone for XoloDojo and XoloGlobe—turning visionary ideas into seamless, secure, token-gated experiences. From smart community tools to immersive interfaces, he ensures the dojo runs smoothly, the globe connects flawlessly, and the pack thrives in Web3. Degen roots. Builder soul. Xolo loyalty.
              </p>
              <p
                className="wow fadeInUp mt-5 mb-0"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Together, we're not just minting NFTs — we're summoning a global pack of guardians ready to explore, connect, and build the future.
              </p>
            </div>
            <div id="TheXoloGlobe" className="tab-pane fade" role="tabpanel">
              <h3
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                The living map of our global community
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                Inside the Xolo Dojo, the XoloGlobe comes alive on
                an interactive, Mapbox-powered world map. Verified
                Xolo NFT holders pin their locations, showcase their
                unique Xolo, and discover fellow members across the
                planet.
              </p>
              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                This isn't just a map — it's where digital ownership
                turns into real human connection. Find a host for an
                authentic stay, arrange a home swap, share a meal,
                join a day adventure, or exchange skills with someone
                whose pin catches your eye.
              </p>

              <h4
                className="wow fadeInUp mt-4"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Exclusive, token-gated, and built on trust
              </h4>
              <p
                className="wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                Only holders of a Xolo NFT can pin and fully
                interact. Access is simple and secure — just connect
                your wallet. No personal data required, just proof
                of community membership.
              </p>
              <div className="about-items">
                <div className="about-content">


                  <h4
                    className="wow fadeInUp mt-4"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    How It Works
                  </h4>

                  <ul
                    className="list-items wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <li>
                      <span><strong>Connect Your Wallet</strong> — Click "Connect Wallet," select your XRPL wallet (Xaman Wallet, Joey Wallet, Xoge's MadLabs, etc.), and sign. We verify your Xolo NFT ownership instantly on the XRP Ledger.</span>
                    </li>
                    <li>
                      <span><strong>Pin Your Location</strong> — Drop your pin anywhere meaningful — your home base, current travels, or a dream destination you're open to sharing.</span>
                    </li>
                    <li>
                      <span><strong>Showcase Your Xolo</strong> — Choose which Xolo NFT to feature. Your pin displays its artwork, letting your personality shine through to the community.</span>
                    </li>
                    <li>
                      <span><strong>Discover &amp; Connect</strong> — Explore pins worldwide. Click any to view their Xolo, profile, and current offerings. Reach out directly to:</span>
                      <ul className="sublist mt-3">
                        <li>Stay in a fellow Xolo's dwelling for deep cultural immersion</li>
                        <li>Arrange house or dwelling swaps for cost-free travel</li>
                        <li>Enjoy peer-to-peer bed-and-breakfast with home-cooked meals and local wisdom</li>
                        <li>Meet up for coffee, lunch, dinner, or a guided adventure</li>
                        <li>Offer or access skills, services, handmade goods, or work trades</li>
                      </ul>
                    </li>
                  </ul>
                  <h4
                    className="wow fadeInUp mt-4"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Why the Xolo Globe Matters
                  </h4>
                  <ul
                    className="list-items wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
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

                  <div
                    className="wow fadeInUp mt-4"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <h4>A platform for more than one tribe</h4>
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

                  <div
                    className="wow fadeInUp mt-4"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <h3>Ready to add your pin and light up the map?</h3>
                    <p>
                      Connect your wallet and join the XoloGlobe today!
                    </p>
                  </div>
                </div>
                <div
                  className="about-image wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <img
                    src="/01a.png"
                    alt="Xolo Globe Map"
                  />
                </div>
              </div>
            </div>
            <div id="TheMint" className="tab-pane fade" role="tabpanel">
              <FadeInUp delay={0.5} as="h2">
                This is a test heading
              </FadeInUp>
              <FadeInUp delay={0.5} as="h3">
                This is a test heading
              </FadeInUp>
              <FadeInUp delay={0.5} as="p">
                The collection features 10,001 unique Xolo NFTs built on the eco-friendly XRP Ledger (XRPL). Each unique asset is crafted with deep cultural roots, honoring the Xoloitzquintle's legacy as a spiritual guide and symbol of loyalty in Mesoamerican traditions.
                <br />
                The collection features 10,001 unique Xolo NFTs built on the eco-friendly XRP Ledger (XRPL). Each unique asset is crafted with deep cultural roots, honoring the Xoloitzquintle's legacy as a spiritual guide and symbol of loyalty in Mesoamerican traditions.
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section section-padding pb-0">
        <div className="container">
          <div className="counter-wrapper">
            <div
              className="counter-items wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2>
                  <span className="count">10001</span>
                </h2>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Unique Xolo NFTs</p>
              </div>
            </div>
            <div
              className="counter-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2>
                  <span className="count">11</span>
                </h2>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Distinct Traits</p>
              </div>
            </div>
            <div
              className="counter-items wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <img src="/01.svg" alt="img" />
              </div>
              <div className="content">
                <h2>
                  <span className="count">333</span>
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
