import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                visibility: "hidden",
                animationDelay: "0.4s",
                animationName: "none",
              }}
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>The Project</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <Link to="/about">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      The Sacred Xolo
                    </Link>
                  </li>
                  <li>
                    <a href="https://xolodojo.io">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Xolo Dojo (Community)
                    </a>
                  </li>
                  <li>
                    <Link to="/vision">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Decentralized Travel Vision
                    </Link>
                  </li>
                  <li>
                    <Link to="/redshadow">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Meet the Artist
                    </Link>
                  </li>
                  <li>
                    <Link to="/cryptonite">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Meet the Creator
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                visibility: "hidden",
                animationDelay: "0.6s",
                animationName: "none",
              }}
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>XRPL Resources</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="https://xrp.cafe/">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      xrp.cafe Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="https://joeywallet.app/">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Joey Wallet
                    </a>
                  </li>
                  <li>
                    <a href="https://xrpscan.com/">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      XRPSCAN Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://www.xrptoolkit.com/">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      XRP Toolkit
                    </a>
                  </li>
                  <li>
                    <a href="https://xrpl.org/">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="footer-arrow-icon"
                      />
                      Official XRPL Site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
              style={{
                visibility: "hidden",
                animationDelay: "0.8s",
                animationName: "none",
              }}
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Xolo Community Art</h3>
                </div>
                <div className="row g-3">
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="/gallery-1.jpg" alt="Xolo NFT Art 1" />
                      <a className="icon" href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="/gallery-2.jpg" alt="Xolo NFT Art 2" />
                      <a className="icon" href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="/gallery-3.jpg" alt="Xolo NFT Art 3" />
                      <a className="icon" href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="/gallery-4.jpg" alt="Xolo NFT Art 4" />
                      <a className="icon" href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <div
              className="logo-img wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <Link to="/">
                <img
                  src="xolo-logo-white.svg"
                  alt="The Xoloitzquintle Collection Logo"
                />
              </Link>
            </div>
            <p
              className="wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              The Xoloitzquintle Collection © 2024. All Rights Reserved.
            </p>
            <div
              className="social-icon wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon={faX} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faReddit} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
