import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotFound() {
  return (
    <>
      <section className="error-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="error-items">
                <div
                  className="error-image wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <img src="/404.png" alt="img" />
                </div>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  Page not found
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Sorry, we couldn&apos;t find your page.
                </p>
                <Link
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".7s"
                  to="/"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  Go Back Home <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
