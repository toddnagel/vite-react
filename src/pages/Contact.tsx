import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faClock,
  faComment,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../components/PageTitle";
import FadeInUp from "../components/FadeInUp";

function Contact() {
  return (
    <>
      <section
        className="contact-section fix style-padding section-padding bg-cover"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="container">
          <div className="section-title ml-200">
            <PageTitle title="contact us" animate delay={0} />
          </div>
          <div className="contact-wrapper">
            <div className="row align-items-center">
              <FadeInUp delay={0.3} className="col-lg-4">
                <div className="contact-image">
                  <img src="/contac-img-2.jpg" alt="img" />
                </div>
              </FadeInUp>
              <div className="col-lg-8">
                <div className="contact-form-items-area">
                  <FadeInUp delay={0.3} as="h2">
                    Get in touch
                  </FadeInUp>
                  <form
                    action="contact.php"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <FadeInUp delay={0.3} className="col-lg-6">
                        <div className="form-clt">
                          <div className="icon">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                          />
                        </div>
                      </FadeInUp>
                      <FadeInUp delay={0.5} className="col-lg-6">
                        <div className="form-clt">
                          <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                          </div>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </FadeInUp>
                      <FadeInUp delay={0.3} className="col-lg-6">
                        <div className="form-clt">
                          <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                          <input
                            type="text"
                            name="email"
                            id="email12"
                            placeholder="Email here"
                          />
                        </div>
                      </FadeInUp>
                      <FadeInUp delay={0.5} className="col-lg-6">
                        <div className="form-clt">
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Subject</span>
                            <ul className="list">
                              <li data-value="1" className="option selected">
                                01
                              </li>
                              <li data-value="1" className="option">
                                02
                              </li>
                              <li data-value="1" className="option">
                                03
                              </li>
                            </ul>
                          </div>
                        </div>
                      </FadeInUp>
                      <FadeInUp delay={0.3} className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write your comment"
                          />
                          <div className="icon">
                            <FontAwesomeIcon icon={faComment} />
                          </div>
                        </div>
                      </FadeInUp>
                      <FadeInUp delay={0.5} className="col-lg-7">
                        <button type="submit" className="theme-btn">
                          Send message{" "}
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                      </FadeInUp>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <PageTitle title="Quick support info" animate delay={0} />
            <FadeInUp delay={0.3} as="h2">
              Contact{" "}
              <span>
                <b>information</b>
              </span>
            </FadeInUp>
          </div>
          <div className="row g-4">
            <FadeInUp delay={0.2} className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-box-items-4">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="content">
                  <h3>Location</h3>
                  <p>2455 Prudence Street Quas Detroits, MI 48234</p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.4} className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-box-items-4">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="content">
                  <h3>Email us</h3>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.6} className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-box-items-4">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="content">
                  <h3>Free call</h3>
                  <p>
                    <a href="tel:+023133695329">+02 (313) 369 5329</a>
                  </p>
                  <p>
                    <a href="tel:+023133695329">+02 (313) 369 5329</a>
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.8} className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-box-items-4">
                <div className="icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="content">
                  <h3>Opening hour</h3>
                  <p>Sun to Fri: 09AM - 5PM Saturday: Closed</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
