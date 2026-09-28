import React from "react"
import starIcon from "../../images/star-icon.png"
import scientist1 from "../../images/scientist/scientist6.png"
import scientist2 from "../../images/scientist/scientist3.png"
import scientist3 from "../../images/scientist/scientist4.png"
import scientist4 from "../../images/scientist/scientist8.png"

const TeamMembers = () => {
  return (
    <>
      <section className="scientist-area bg-color pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Team Members
            </span>
            <h2>Our Leadership Team</h2>
            <p>
              The passionate people behind Online Saathi, working every day
              to empower India's informal workforce.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist1} alt="about" />
                </div>
                <div className="content">
                  <h3>Naresh Sijapati</h3>
                  <span>CEO & Founder</span>

                  <ul className="social">
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist2} alt="about" />
                </div>
                <div className="content">
                  <h3>Bhavika Bhogekar</h3>
                  <span>COO Founder</span>

                  <ul className="social">
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist3} alt="about" />
                </div>
                <div className="content">
                  <h3>Hemraj Thapa</h3>
                  <span>Chief Technology Officer</span>

                  <ul className="social">
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist4} alt="about" />
                </div>
                <div className="content">
                  <h3>Puspa Raj Shestha</h3>
                  <span>Chief Operating Officer</span>

                  <ul className="social">
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-block"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "default" }}
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMembers
