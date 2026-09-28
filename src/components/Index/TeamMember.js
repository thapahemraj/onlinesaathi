import React from "react"
import starIcon from "../../images/star-icon.png"
import team1 from "../../images/scientist/scientist6.png"
import team2 from "../../images/scientist/scientist3.png"
import team3 from "../../images/scientist/scientist4.png"
import team4 from "../../images/scientist/scientist8.png"

const TeamMember = () => {
  return (
    <>
      <section className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="team" />
              Team Members
            </span>
            <h2>Our Awesome Team</h2>
            <p>
              Meet the passionate people behind Online Saathi, working
              every day to empower India's informal workforce.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team1} alt="team" />

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
                <div className="content">
                  <h3>Naresh Sijapati</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team2} alt="team" />

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
                <div className="content">
                  <h3>Bhavika Bhogekar</h3>
                  <span>COO Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team3} alt="team" />

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
                <div className="content">
                  <h3>Hemraj Thapa</h3>
                  <span>Chief Technology Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" />

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
                <div className="content">
                  <h3>Puspa Raj Shestha</h3>
                  <span>Chief Operating Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMember
