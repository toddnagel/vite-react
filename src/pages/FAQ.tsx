import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  return (
    <>
      <section
        className="faq-section fix  style-padding section-padding  bg-cover"
        style={{ backgroundImage: "url('/Pattern.png')" }}
      >
        <div className="container">
          <div className="faq-banner">
            <div className="section-title text-center">
              <h6>
                <img src="/star.png" alt="img" /> general FAQ
              </h6>
              <h2>
                Clients{" "}
                <span>
                  <b>query</b>
                </span>
              </h2>
            </div>
            <div className="faq-image-banner">
              <img src="/04a.png" alt="img" />
            </div>
          </div>
          <div className="faq-wrapper style-inner-page">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="faq-sidebar">
                  <div className="search-widget">
                    <form action="#">
                      <input type="text" placeholder="Search keyword..." />
                      <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </form>
                  </div>
                  <div className="contact-info-box">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <h2>
                      Have any project
                      <br />
                      <span>Contact</span> us
                    </h2>
                    <a className="theme-btn" href="/contact">
                      contact us{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="faq-content">
                  <h2>Project &amp; Collection Questions</h2>
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion-project">
                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-1"
                            aria-expanded="false"
                            aria-controls="faq-project-1"
                          >
                            What is The Xoloitzquintle Collection?
                          </button>
                        </h5>
                        <div
                          id="faq-project-1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            It is a premium collection of **5,000 unique NFT
                            assets** on the XRP Ledger (XRPL), celebrating the
                            Xoloitzcuintli, the sacred dog of Mexico.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-2"
                            aria-expanded="true"
                            aria-controls="faq-project-2"
                          >
                            What are the utilities of owning a Xolo NFT?
                          </button>
                        </h5>
                        <div
                          id="faq-project-2"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            Holders gain access to the **Xolo Dojo** (exclusive
                            community), future airdrops, and governance rights
                            in our community DAO for our travel vision.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-3"
                            aria-expanded="false"
                            aria-controls="faq-project-3"
                          >
                            Who is the artist behind the collection?
                          </button>
                        </h5>
                        <div
                          id="faq-project-3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            The collection was conceptualized and created by
                            **Red Shadow**, a renowned digital artist known for
                            blending cultural history with digital futurism.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-4"
                            aria-expanded="false"
                            aria-controls="faq-project-4"
                          >
                            When is the official mint date?
                          </button>
                        </h5>
                        <div
                          id="faq-project-4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            The official mint date and time will be announced
                            exclusively on our official **Discord** and
                            **Twitter** channels. Be sure to follow us closely!
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-5"
                            aria-expanded="false"
                            aria-controls="faq-project-5"
                          >
                            Where can I view the collection after minting?
                          </button>
                        </h5>
                        <div
                          id="faq-project-5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            You will be able to view and trade your Xolo NFTs on
                            the primary XRP Ledger marketplace, **xrp.cafe**.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-project-6"
                            aria-expanded="false"
                            aria-controls="faq-project-6"
                          >
                            Is there a secondary royalty fee?
                          </button>
                        </h5>
                        <div
                          id="faq-project-6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            Yes, secondary sales on platforms like xrp.cafe will
                            incur a small royalty fee that goes back into the
                            community wallet for future development.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="mb-3 mt-5">XRPL &amp; Technical Questions</h2>
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion-technical">
                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-tech-1"
                            aria-expanded="true"
                            aria-controls="faq-tech-1"
                          >
                            What is the price of one Xolo NFT?
                          </button>
                        </h5>
                        <div
                          id="faq-tech-1"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion-technical"
                        >
                          <div className="accordion-body">
                            The public mint price will be announced 48 hours
                            prior to the launch. It will be denominated in
                            **XRP**.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-tech-2"
                            aria-expanded="false"
                            aria-controls="faq-tech-2"
                          >
                            How many Xolo NFTs can I mint per wallet?
                          </button>
                        </h5>
                        <div
                          id="faq-tech-2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-technical"
                        >
                          <div className="accordion-body">
                            To ensure fair distribution, there will be a limit
                            of **5 NFTs** per wallet during the public sale.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-tech-3"
                            aria-expanded="false"
                            aria-controls="faq-tech-3"
                          >
                            Do I need to hold XRP to participate in the mint?
                          </button>
                        </h5>
                        <div
                          id="faq-tech-3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-technical"
                        >
                          <div className="accordion-body">
                            Yes, you need to have **XRP** in your wallet to
                            cover the mint price and the small transaction fees
                            (ledger reserve fees) on the XRPL.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-tech-4"
                            aria-expanded="false"
                            aria-controls="faq-tech-4"
                          >
                            Which wallets are compatible with the mint?
                          </button>
                        </h5>
                        <div
                          id="faq-tech-4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-technical"
                        >
                          <div className="accordion-body">
                            We recommend using self-custody wallets like
                            **Xumm**, **Joey Wallet**, or any other
                            XRPL-compatible wallet that supports the NFT
                            standard.
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
      <section
        className="cta-discuss-section fix section-padding bg-cover"
        style={{ backgroundImage: "url('/cta-discuss-bg.jpg')" }}
      >
        <div className="container">
          <div className="cta-discuss-content">
            <h2>
              Let’s discuss how we <br />
              <span>
                support <b>creative</b> vision
              </span>
            </h2>
            <p>
              Unlock the power of AI to generate the high-quality images and
              videos in few seconds
            </p>
            <a className="theme-btn" href="/contact">
              contact us <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
