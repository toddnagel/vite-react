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
