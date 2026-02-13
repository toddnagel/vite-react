import PageTitle from '../components/PageTitle';

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
              <PageTitle title="FAQ" />
            </div>
            <div className="faq-image-banner">
              <img src="/04a.png" alt="img" />
            </div>
          </div>
          <div className="faq-wrapper style-inner-page">
            <div className="row g-4">

              <div className="col-lg-12">
                <div className="faq-content">
                  <h2>Project & Collection Questions</h2>
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
                            What Is The Xoloitzquintle?
                          </button>
                        </h5>
                        <div
                          id="faq-project-1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            The Xoloitzcuintle (Shō-lō eats-kwēnt-lee), also known as Xolo (Shō-lō), is one of the world's oldest breeds, with archaeological evidence dating back over 3,000–3,500 years in Mesoamerican civilizations (including Colima, Toltec, Zapotec, Maya, and Aztec cultures). Revered as a sacred spiritual guide and loyal companion, it was believed to guard homes from evil spirits in life and accompany souls through the dangers of Mictlan (the Aztec underworld/afterlife) to reach eternal rest. Named after the god Xolotl (lightning, death, and transformation) and the Nahuatl word for dog (itzcuintli), the Xolo symbolizes protection, healing, and the journey between worlds.
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
                            Who Is The Creator?
                          </button>
                        </h5>
                        <div
                          id="faq-project-2"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            Cryptonite — a nomadic, blockchain-agnostic digital pirate who's been sailing the Cryptocurrenseas since 2016. With footprints in 34 countries shaping a deep appreciation for diverse cultures and meaningful connections, he's a proud XRP Army member building The Xoloitzquintle Collection on the XRPL. Teaming with visionary artist RedShadow, he's creating XoloDojo and XoloGlobe: a token-gated global community for trust, travel, skill-sharing, and genuine shared experiences. Own a XoloNFT and join the voyage.
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
                            Who Is The Artist?
                          </button>
                        </h5>
                        <div
                          id="faq-project-3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            RedShadow is the visionary artist behind The Xoloitzquintle Collection. With a masterful eye for detail and deep respect for Mesoamerican heritage, RedShadow designs each of the 10,001 unique XoloNFTs as sacred digital guardians — blending timeless cultural symbolism with striking, evocative artwork that honors the Xoloitzquintle's spiritual role as a companion and soul guide. Teaming with Cryptonite, RedShadow's artistry forms the visual foundation of XoloDojo and XoloGlobe.
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
                            When And Where And Where Can I Mint A Xolo NFT?
                          </button>
                        </h5>
                        <div
                          id="faq-project-4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            The mint for The Xoloitzcuintle Collection (10,001 unique XoloNFTs) is coming soon on xrp.cafe, the premier marketplace for XRPL-based NFTs. Built on the eco-friendly XRP Ledger (XRPL), the mint will feature low-cost, fast transactions with no gas wars. Prepare now: set up an XRPL-compatible wallet (like Joey Wallet, Xaman, or Mad Lab), fund it with at least 20 XRP, and stay tuned to xolodojo.io or @XoloDojo for the exact launch announcement and any allowlist details. Get ready to own your sacred Xolo guardian and unlock the XoloGlobe!
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
                            What Wallet And Funds Do I Need To Prepare?
                          </button>
                        </h5>
                        <div
                          id="faq-project-5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion-project"
                        >
                          <div className="accordion-body">
                            You will need an XRPL-compatible wallet like **Joey Wallet**. Ensure your wallet is funded with a minimum of **20 XRP** to cover the XRPL's wallet reserve and transaction fees.
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
    </>
  );
}

export default FAQ;
