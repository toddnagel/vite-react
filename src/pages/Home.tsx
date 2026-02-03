import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import TabbedContent from "../components/TabbedContent";

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
            <h6
              className="wow fadeInUp"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="star.png" alt="img" />
              The Xoloitzquintle Collection
            </h6>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              A Sacred Legacy of <br />
              <span>Art, Culture, &amp; **XRPL**</span>
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                visibility: "hidden",
                animationDelay: "0.2s",
                animationName: "none",
              }}
            >
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xolo-art.png" alt="Xolo NFT Art" />
                </div>
                <div className="service-content">
                  <h3>10,001 Unique NFT Masterpieces</h3>
                  <p>
                    A meaningful collection featuring **10,001 unique Xolo
                    NFTs** with a combination of 7 distinct traits, capturing
                    the sacred canine's spirit.
                  </p>
                  <a className="link-btn" href="/service">
                    view the traits{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                visibility: "hidden",
                animationDelay: "0.4s",
                animationName: "none",
              }}
            >
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xrpl-blockchain.png" alt="XRPL Blockchain" />
                </div>
                <div className="service-content">
                  <h3>Built on the XRP Ledger (XRPL)</h3>
                  <p>
                    Hosted on the **XRPL** for its high speed payments, low-cost
                    transactions, and eco-friendly design. The visionary artist
                    bringing the 10,001 Xolo NFT's to life.
                  </p>
                  <a className="link-btn" href="/service">
                    learn about XRPL{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                visibility: "hidden",
                animationDelay: "0.6s",
                animationName: "none",
              }}
            >
              <div className="service-box-items">
                <div className="service-image">
                  <img src="/xolo-travel.png" alt="Xolo Travel Vision" />
                </div>
                <div className="service-content">
                  <h3>Decentralized Travel Vision</h3>
                  <p>
                    Our long-term goal: a platform for holders to explore the
                    world through unique, **wallet-to-wallet** travel
                    experiences on the XRPL.
                  </p>
                  <a className="link-btn" href="/service">
                    read the roadmap{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-delay=".8s"
              style={{
                visibility: "hidden",
                animationDelay: "0.8s",
                animationName: "none",
              }}
            >
              <div className="service-box-items mb-0">
                <div className="service-image">
                  <img src="/xrp-cafe-mint.png" alt="XRP Cafe Mint" />
                </div>
                <div className="service-content">
                  <h3>Upcoming Mint on xrp.cafe</h3>
                  <p>
                    Prepare your **Joey Wallet** and **20 XRP minimum reserve**
                    for the meaningful minting experience on the premier XRPL
                    NFT marketplace.
                  </p>
                  <a className="link-btn" href="/service">
                    get prepared{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
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
          <h2
            className="project-title text-center wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "hidden",
              animationDelay: "0.3s",
              animationName: "none",
            }}
          >
            The Xolo's <br /> <img src="/has.png" alt="img" />{" "}
            <span>Legacy</span>
          </h2>
          <div className="row align-items-center">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="project-image">
                <img src="/01.jpg" alt="Ancient Xolo Sculpture" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="project-content">
                <span>Ancient Mesoamerica</span>
                <h3>
                  <a href="project-details.html">
                    A Sacred <br />
                    Heritage
                  </a>
                </h3>
                <p>
                  Dating back over **3,000 years**, the Xolo is a living symbol
                  of Mesoamerican heritage, revered as a spiritual guide to
                  **Mictlan**, the Aztec afterlife.
                </p>
                <a href="project-details.html" className="theme-btn">
                  learn history{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="project-content">
                <span>The Team</span>
                <h3>
                  <a href="project-details.html">
                    RedShadow &amp; <br />
                    Cryptonite
                  </a>
                </h3>
                <p>
                  **Cryptonite**, the global explorer and XRPL enthusiast,
                  partnered with **RedShadow**, the visionary artist, to bring
                  the 10,001 Xolo NFTs to life.
                </p>
                <a href="project-details.html" className="theme-btn">
                  meet the team{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="project-image style-2">
                <img src="/02.jpg" alt="Artist and Creator" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="project-image">
                <img src="/03.jpg" alt="Map and travel icons" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
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
                  **wallet-to-wallet** travel experiences on the XRPL.
                </p>
                <a href="project-details.html" className="theme-btn">
                  view the vision{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section fix section-padding">
        <div className="color-bg">
          <img src="/color-bg-3.png" alt="img" />
        </div>
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="faq-image-items">
                  <div
                    className="faq-image wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.3s",
                      animationName: "none",
                    }}
                  >
                    <img src="/xolo-nft-showcase-01.png" alt="Xolo NFT Art" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <h6>
                      <img src="star.png" alt="img" /> The Xoloitzquintle
                      Collection
                    </h6>
                    <h2>
                      Key Questions About <br />
                      <span>The **NFT** Project</span>
                    </h2>
                  </div>
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay=".2s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.2s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            What is the Xoloitzquintle?
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            The **Xoloitzquintle** (*Shō Lō eats queent lay*) is
                            an ancient dog breed, revered for **3,000 years** as
                            a spiritual guide and companion in Mesoamerican
                            cultures, particularly tied to the Aztec afterlife
                            (Mictlan).
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay=".4s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.4s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            when and where can I mint a Xolo NFT?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            The mint is coming soon to
                            **[xrp.cafe](https://xrp.cafe/)**, the premier
                            marketplace for XRPL-based NFTs. The collection size
                            is **10,001 unique Xolos**, built on the **XRP
                            Ledger (XRPL)**.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay=".6s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.6s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            What wallet and funds do I need to prepare?
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            You will need an XRPL-compatible wallet like **Joey
                            Wallet**. Ensure your wallet is funded with a
                            minimum of **20 XRP** to cover the XRPL's wallet
                            reserve and transaction fees.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          height: "500px",
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

      <section className="message-section fix section-bg section-padding">

        <div className="brand-section pb-0">
          <div className="container">
            <div className="swiper brand-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-ec779da8a244910fb"
                aria-live="off"
                style={{
                  transitionDuration: "2000ms",
                  transform: "translate3d(-1780px, 0px, 0px)",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="05.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-next"
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="01.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="2 / 5"
                  data-swiper-slide-index="1"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="02.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 5"
                  data-swiper-slide-index="2"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="03.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  role="group"
                  aria-label="4 / 5"
                  data-swiper-slide-index="3"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="04.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="05.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                  style={{ width: "326px", marginRight: "30px" }}
                >
                  <div className="brand-image text-center">
                    <img src="01.png" alt="img" />
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
