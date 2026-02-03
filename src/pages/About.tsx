function About() {
  return (
    <>
      <section className="about-section section-padding fix">
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
          <div className="row">
            <div className="col-lg-5">
              <div className="about-image-33 img-custom-anim-left">
                <img src="/06.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image-33 img-custom-anim-right">
                <img src="/07.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="about-wrapper mt-4 mt-md-0">
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
                  visibility: "visible",
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
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Our globe is an interactive map, powered by Mapbox, where
                      holders of the Xolo NFT can showcase their location and
                      connect with the global Xolo community. Access to pinning
                      your location is exclusive (token-gated) and secured
                      through wallet connection—only verified holders can
                      participate! How It Works Connect Your Wallet: Click the
                      "Connect Wallet" button on the Xolo Globe section. Select
                      your wallet (e.g., Joey Wallet) and approve the
                      connection. This verifies you hold a Xolo NFT. Pin Your
                      Location: Once your NFT ownership is confirmed, the globe
                      lets you pin your current location or any place you want
                      to represent. Click the "Add Pin" button and drag your pin
                      to your chosen spot. Display Your NFT: When adding your
                      pin, choose which Xolo NFT you'd like to feature. Your
                      pin's icon will display your chosen NFT's image, making
                      your location unique and instantly recognizable to the
                      community. Connect with Others: Browse the globe to see
                      where fellow Xolo holders are located. Click on any pin to
                      view that user's NFT and reach out—perfect for connecting,
                      offering travel opportunities, or sharing adventure tips.
                      Why This Matters Token-Gated Privacy: Only genuine Xolo
                      holders can add and view pins, ensuring a trusted
                      community. Show Off Your Xolo: Celebrate your NFT and let
                      others easily find and connect with you around the world.
                      Start Your Adventure: See who's nearby or where the Xolo
                      community is growing—find hosts, travelers, or new friends
                      to join your journey! You can place this content on your
                      Xolo Globe section or as a pop-up/help guide near the map.
                      If you'd like this further tailored to your site's tone or
                      want short FAQ-style answers, let me know!
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

                        <span>Visiting a Xolo Host’s Dwelling</span>
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
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
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
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
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
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon">
                  <img src="/01.svg" alt="img" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">34</span>
                  </h2>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <p>Countries Traveled by Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-to-work-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h6
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img src="/star.png" alt="star icon" /> The Xolo NFT Journey
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
              Understanding the **Minting** <br />
              <span>
                Process <b>(4 Steps)</b>
              </span>
            </h2>
          </div>
          <div className="how-to-work-wrapper">
            <div
              className="how-too-work-items text-center wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="icon">
                <img src="/wallet-setup.svg" alt="Wallet Setup Icon" />
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
            </div>
            <div className="arrow-shape">
              <img src="/work-arrow.png" alt="arrow shape" />
            </div>
            <div
              className="how-too-work-items text-center wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="icon">
                <img src="/fund-wallet.svg" alt="Fund Wallet Icon" />
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
            </div>
            <div className="arrow-shape">
              <img src="/work-arrow.png" alt="arrow shape" />
            </div>
            <div
              className="how-too-work-items text-center wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <div className="icon">
                <img src="/marketplace-connect.svg" alt="Connect" />
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
            </div>
            <div className="arrow-shape">
              <img src="/work-arrow.png" alt="arrow shape" />
            </div>
            <div
              className="how-too-work-items text-center wow fadeInUp"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeInUp",
              }}
            >
              <div className="icon">
                <img src="/mint-nft.svg" alt="Mint NFT Icon" />
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
        </div>
      </section>
      <div className="marquee-section fix section-padding pt-0 margin-bottom-8 margin-top-5">
        <div className="mycustom-marque">
          <div className="scrolling-wrap gap-100">
            <div className="comm">
              <div className="cmn-textslide textitalick text-custom-storke">
                design
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                image
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                video
              </div>
              <img src="/has-2.png" alt="img" />
            </div>
            <div className="comm">
              <div className="cmn-textslide textitalick text-custom-storke">
                design
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                image
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                video
              </div>
              <img src="/has-2.png" alt="img" />
            </div>
            <div className="comm">
              <div className="cmn-textslide textitalick text-custom-storke">
                design
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                image
              </div>
              <img src="/has-2.png" alt="img" />
              <div className="cmn-textslide textitalick text-custom-storke">
                video
              </div>
              <img src="/has-2.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
