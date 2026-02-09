import TabbedContent from "../components/TabbedContent";
import PageTitle from "../components/PageTitle";
import FadeInUp from "../components/FadeInUp";

function Home() {
  return (
    <>
      <section
        className="hero-secton hero-1 bg-cover"
        style={{ backgroundImage: "url('/hero-bg-3.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="color-bg">
                  <img src="/color-bg.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-image img-custom-anim-left bg-cover"
          style={{ backgroundImage: "url('/hero-1.png')" }}
        ></div>
      </section>

      <TabbedContent />

      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <PageTitle title="The Xoloitzquintle Collection" animate delay={0} />
            <FadeInUp delay={0.3} as="h2">
              A Sacred Legacy of <br />
              <span>Art, Culture, &amp; XRPL</span>
            </FadeInUp>
          </div>
          <div className="row">
            <FadeInUp delay={0.2} className="col-xl-6">
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xolo-art.png" alt="Xolo NFT Art" />
                </div>
                <div className="service-content">
                  <h3>10,001 Unique NFT Masterpieces</h3>
                  <p>
                    A meaningful collection featuring 10,001 unique Xolo
                    NFTs with a combination of 7 distinct traits, capturing
                    the sacred canine's spirit.
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.4} className="col-xl-6">
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xrpl-blockchain.png" alt="XRPL Blockchain" />
                </div>
                <div className="service-content">
                  <h3>Built on the XRP Ledger (XRPL)</h3>
                  <p>
                    Hosted on the XRPL for its high speed payments, low-cost
                    transactions, and eco-friendly design. The visionary artist
                    bringing the 10,001 Xolo NFT's to life.
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.6} className="col-xl-6">
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xolo-travel.png" alt="Xolo Travel Vision" />
                </div>
                <div className="service-content">
                  <h3>Decentralized Travel Vision</h3>
                  <p>
                    Our long-term goal: a platform for holders to explore the
                    world through unique, wallet-to-wallet travel
                    experiences on the XRPL.
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.8} className="col-xl-6">
              <div className="service-box-items mb-0">
                <div className="service-image">
                  <img src="/xrp-cafe-mint.png" alt="XRP Cafe Mint" />
                </div>
                <div className="service-content">
                  <h3>Upcoming Mint on xrp.cafe</h3>
                  <p>
                    Prepare your Joey Wallet and 20 XRP minimum reserve
                    for the meaningful minting experience on the premier XRPL
                    NFT marketplace.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section
        className="project-section fix section-padding section-bg bg-cover"
        style={{ backgroundImage: "url('/line-shape.png')" }}
      >
        <div className="color-bg">
          <img src="/color-bg-1.png" alt="img" />
        </div>
        <div className="project-wrapper">
          <FadeInUp delay={0.3} as="h2" className="project-title text-center">
            The Xolo's <br /> <img src="/has.png" alt="img" />{" "}
            <span>Legacy</span>
          </FadeInUp>
          <div className="row align-items-center">
            <FadeInUp delay={0.3} className="col-lg-6">
              <div className="project-image">
                <img src="/01.jpg" alt="Ancient Xolo Sculpture" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.5} className="col-lg-6">
              <div className="project-content">
                <span>Ancient Mesoamerica</span>
                <h3>
                  <a href="project-details.html">
                    A Sacred <br />
                    Heritage
                  </a>
                </h3>
                <p>
                  Dating back over 3,000 years, the Xolo is a living symbol
                  of Mesoamerican heritage, revered as a spiritual guide to
                  Mictlan, the Aztec afterlife.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3} className="col-lg-6">
              <div className="project-content">
                <span>The Team</span>
                <h3>
                  <a href="project-details.html">
                    RedShadow &amp; <br />
                    Cryptonite
                  </a>
                </h3>
                <p>
                  Cryptonite, the global explorer and XRPL enthusiast,
                  partnered with RedShadow, the visionary artist, to bring
                  the 10,001 Xolo NFTs to life.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.5} className="col-lg-6">
              <div className="project-image style-2">
                <img src="/02.jpg" alt="Artist and Creator" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3} className="col-lg-6">
              <div className="project-image">
                <img src="/03.jpg" alt="Map and travel icons" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.5} className="col-lg-6">
              <div className="project-content">
                <span>Future Utility</span>
                <h3>
                  <a href="project-details.html">
                    Fostering Global <br />
                    Travel &amp; Connection
                  </a>
                </h3>
                <p>
                  The collection's long-term vision is to build a decentralized
                  platform for Xolo NFT holders to enable unique
                  wallet-to-wallet travel experiences on the XRPL.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Paralax Section Start */}
      <div className="paralax-section fix section-padding pt-0">
        <div className="paralax-image">
          <img src="paralax-bg.png" alt="img" />
        </div>
      </div>

      {/* MAPBOX */}
      <div
        style={{
          width: "90%",
          height: "640px",
          borderRadius: "0%",
          overflow: "visible",
          margin: "20px auto",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://api.mapbox.com/styles/v1/danish44/cmhytc1wx002t01r0fiou0755.html?title=false&amp;access_token=pk.eyJ1IjoiZGFuaXNoNDQiLCJhIjoiY21oeXQ1ZHl5MDg0ajJpcXpoMHU4bDh3YyJ9.meXTImltU7jzZYdaeE5tsw&amp;zoomwheel=true#2/38/-34"
          title="Untitled"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}

export default Home;
