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
                <p
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
                </h1>
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
              style={{ visibility: "hidden", animationName: "fadeInUp" }}
            >
              <img src="star.png" alt="img" /> The Sacred Legacy
            </h6>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              The Xoloitzquintle NFT Collection
              <br />
              <span>
                &amp; <b>Our Vision</b> for the XRPL
              </span>
            </h2>
          </div>
          <div className="about-wrapper mt-4 mt-md-0">
            <ul className="nav" role="tablist">
              <li
                className="nav-item wow fadeInUp"
                data-wow-delay=".3s"
                role="presentation"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <a
                  href="#Mission"
                  data-bs-toggle="tab"
                  className="nav-link"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Our Mission
                </a>
              </li>
              <li
                className="nav-item wow fadeInUp"
                data-wow-delay=".5s"
                role="presentation"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <a
                  href="#Vision"
                  data-bs-toggle="tab"
                  className="nav-link active"
                  aria-selected="true"
                  role="tab"
                >
                  Our Vision
                </a>
              </li>
              <li
                className="nav-item wow fadeInUp"
                data-wow-delay=".5s"
                role="presentation"
                style={{
                  visibility: "hidden",
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
            <div className="tab-content">
              <div id="Mission" className="tab-pane fade" role="tabpanel">
                <div className="about-items">
                  <div className="about-content">
                    <p>
                      Our mission is to honor the millennia-old legacy of the
                      Xoloitzquintle, the spiritual guide of Mesoamerica, by
                      blending ancient heritage with modern blockchain
                      technology. We are determined to make a difference while
                      celebrating culture, art, and loyalty to the XRPL
                      community. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp;{" "}
                    </p>
                    <ul className="list-items">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Celebrate Mesoamerican Heritage</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Give Back to the XRPL Community</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Foster Global Collector Connections</span>
                      </li>
                    </ul>
                    <a className="theme-btn" href="/about">
                      explore now{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                  <div className="about-image">
                    <img src="/01a.png" alt="img" />
                  </div>
                </div>
              </div>
              <div
                id="Vision"
                className="tab-pane fade show active"
                role="tabpanel"
              >
                <div className="about-items">
                  <div className="about-content">
                    <p
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      The Xoloitzquintle Collection is the foundation for a bold
                      vision to encourage travel and cultural connection within
                      the XRPL community and beyond. Our long-term goal is to
                      build a decentralized, trust-based platform for unique,
                      wallet-to-wallet travel experiences on the XRP Ledger.
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </p>
                    <ul
                      className="list-items wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.5s",
                        animationName: "none",
                      }}
                    >
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Visiting a Xolo Host's Dwelling</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>House or Dwelling Swaps</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Peer-to-Peer Bed-and-Breakfast</span>
                      </li>
                    </ul>
                    <a
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".3s"
                      href="/about"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.3s",
                        animationName: "none",
                      }}
                    >
                      explore now{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                  <div
                    className="about-image wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.3s",
                      animationName: "none",
                    }}
                  >
                    <img src="/01a.png" alt="img" />
                  </div>
                </div>
              </div>
              <div id="Feature" className="tab-pane fade" role="tabpanel">
                <div className="about-items">
                  <div className="about-content">
                    <p>
                      The collection features **10,001 unique Xolo NFTs** built
                      on the eco-friendly **XRP Ledger (XRPL)**. Each unique
                      asset is crafted with deep cultural roots, honoring the
                      Xoloitzquintle's legacy as a spiritual guide and symbol of
                      loyalty in Mesoamerican traditions. &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </p>
                    <ul className="list-items">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>10,001 Unique Xolo NFTs</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>7 Distinct Traits &amp; 217 Sub-traits</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="14"
                          viewBox="0 0 22 14"
                          fill="none"
                        >
                          <path
                            d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                            fill="#EFFB53"
                          ></path>
                          <path
                            d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                            fill="#EFFB53"
                          ></path>
                        </svg>

                        <span>Upcoming Mint on xrp.cafe</span>
                      </li>
                    </ul>
                    <a className="theme-btn" href="/about">
                      explore now{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
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
