import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
                {/* <p
                  className="wow fadeInUp"
                  style={{ visibility: "hidden", animationName: "fadeInUp" }}
                >
                  The
                </p>
                <h1
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "hidden",
                    animationDuration: "1.5s",
                    animationDelay: "0.1s",
                    animationName: "img-anim-left",
                  }}
                >
                  Xoloitzquintle <img src="/radius-img.png" alt="img" />
                  <b>A</b> <span className="text-2">Sacred Legacy</span>
                </h1> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-image img-custom-anim-left bg-cover"
          style={{ backgroundImage: "url('/hero-1.png')" }}
        ></div>
      </section>

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
            <h6
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img src="/star.png" alt="img" /> The Sacred Legacy
            </h6>
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
                  href="#Mission"
                  data-bs-toggle="tab"
                  className="nav-link active"
                  aria-selected="true"
                  role="tab"
                >
                  Our Mission
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
                  href="#Vision"
                  data-bs-toggle="tab"
                  className="nav-link"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  Our Vision
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
                  href="#XoloGlobe"
                  data-bs-toggle="tab"
                  className="nav-link"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  XoloGlobe
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
                  href="#Feature"
                  data-bs-toggle="tab"
                  className="nav-link"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Key Feature
                </a>
              </li>
            </ul>
          </div>
            <div className="about-wrapper mt-4 mt-md-0">
                <div className="tab-content">
                    <div id="Mission" className="tab-pane fade active show" role="tabpanel">
                        <div className="about-items">
                            <div className="about-content">
                                <p>
                                    Inside the Xolo Dojo, we’re cultivating a space for real human growth, trust, and connection in a fragmented world.
                                    Within the Dojo lives the XoloGlobe—a vibrant, member-built global community where people open their homes, share their time, exchange skills and resources, and support one another with genuine reciprocity.
                                    Through the XoloGlobe, members can:
                                </p>
                                <ul className="list-items">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Stay in a fellow Xolo’s home for authentic immersion</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                         <span>Swap houses for cost-free, trust-based travel</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Enjoy peer-to-peer bed-and-breakfast experiences with home-cooked meals and local wisdom</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Meet up for a day activity, lunch, coffee, or guided adventure</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Offer and access skills, services, handmade goods, or work trades</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>The XoloGlobe inside the Xolo Dojo isn’t just about travel or transactions—it’s a living network for cultural exchange, lifelong learning, collaboration, and mutual support.</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Enjoy peer-to-peer bed-and-breakfast experiences with home-cooked meals and local wisdom</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>We’re not building another app.</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>We’re cultivating a global dojo where strangers become allies, travelers become locals, and shared experiences weave a stronger, more connected world—one stay, one swap, one skill shared, one meal together at a time.</span>
                                    </li>

                                </ul>
                                <a href="about.html" className="theme-btn">explore now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                            </div>
                            <div className="about-image">
                                <img src="/01a.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div id="Vision" className="tab-pane fade" role="tabpanel">
                        <div className="about-items">
                            <div className="about-content">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Staying in a Xolo Host’s Dwelling — Immerse yourself in local life with overnight stays in the homes of Xolo hosts around the XoloGlobe, building deep cultural connections.</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>House and Dwelling Swaps — Swap homes directly with members across the XoloGlobe for cost-free, trust-based travel and reciprocal hospitality.</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Peer-to-Peer Bed-and-Breakfast — Enjoy personalized stays with home-cooked breakfasts and insider tips from Xolo hosts on the XoloGlobe.</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Local Meetups and Day Activities — Connect with Xolo hosts for a guided day out, shared lunch, coffee, or activity—perfect for experiencing the XoloGlobe through authentic, no-commitment local encounters.</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Community Exchange Network — Tap into the XoloGlobe’s global network to offer or access member services, handmade goods, professional skills, or even work trades—fostering collaboration, learning, and mutual support beyond travel</span>
                                    </li>
                                </ul>
                                <a
                                  href="/about"
                                  className="theme-btn wow fadeInUp animated"
                                  data-wow-delay=".3s"
                                  style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInUp",
                                  }}
                                >
                                  explore now{" "}
                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                </a>
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
                    <div id="XoloGlobe" className="tab-pane fade" role="tabpanel">
                      <div className="about-items">
                        <div className="about-content">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span><strong>Connect Your Wallet</strong> — Click "Connect Wallet," select your XRPL wallet (Xaman Wallet, Joey Wallet, Xoge's MadLabs, etc.), and sign. We verify your Xolo NFT ownership instantly on the XRP Ledger.</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span><strong>Pin Your Location</strong> — Drop your pin anywhere meaningful — your home base, current travels, or a dream destination you're open to sharing.</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span><strong>Showcase Your Xolo</strong> — Choose which Xolo NFT to feature. Your pin displays its artwork, letting your personality shine through to the community.</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span><strong>Discover &amp; Connect</strong> — Explore pins worldwide. Click any to view their Xolo, profile, and current offerings. Reach out directly to:</span>
                    <ul className="sublist mt-2">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span>Keeps our community genuine and safe through token-gating</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span>Lets your Xolo NFT become a beacon for real-world connection</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
                    <span>Turns strangers into allies, travelers into locals, and shared pins into shared experiences</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                    </svg>
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
                            <a href="#" className="theme-btn">
                              Connect Wallet{" "}
                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                            </a>
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
                     <div id="Feature" className="tab-pane fade" role="tabpanel">
                        <div className="about-items">
                            <div className="about-content">
                                <p>
                                    The collection features **10,001 unique Xolo NFTs** built on the eco-friendly **XRP Ledger (XRPL)**. Each unique asset is crafted with deep cultural roots, honoring the Xoloitzquintle's legacy as a spiritual guide and symbol of loyalty in Mesoamerican traditions.
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                                <ul className="list-items">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>10,001 Unique Xolo NFTs</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>7 Distinct Traits &amp; 217 Sub-traits</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                            <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                            <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                        </svg>

                                        <span>Upcoming Mint on xrp.cafe</span>
                                    </li>
                                </ul>
                                <a href="about.html" className="theme-btn">explore now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                            </div>
                            <div className="about-image">
                                <img src="/01a.png" alt="img" />
                            </div>
                        </div>
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
                    <span className="count">7</span>
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
        <div className="bg-shape">
          <img src="/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="message-items">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <span>
                {" "}
                Questions, Comments, <b>Concerns Message</b>
              </span>
            </h2>
            <div
              className="circle-bg wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <img src="circle-bg.png" alt="img" />
            </div>
            <div
              className="lets-talk-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <a className="lets-circle" href="/contact">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> <br />
                Let's talk
              </a>
              <p>
                Duise sagittis accumsan magna on adipiscing laoreet ultrices
                magna consectetuer eiaculis rutrum morbie habitasse orci libero
                porttitor scelerisque acid vivamus molestie mollise
              </p>
            </div>
          </div>
        </div>
        <div className="brand-section section-padding pb-0">
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
                    <img src="01a.png" alt="img" />
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
