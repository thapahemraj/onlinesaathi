import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const OurSolutions = () => {
  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              Online Saathi
            </span>
            <h2>Our community is built to support workers and opportunities</h2>
            <p>
              We connect workers with meaningful jobs, practical services, and a
              supportive community that helps them grow with confidence.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to="https://dash.onlinesaathi.org/login">12,500+ Individuals Placed</Link>
                </h3>
                <p>
                  Access a growing pipeline of opportunities and career pathways
                  designed to help workers find meaningful work.
                </p>

                <Link to="https://dash.onlinesaathi.org/login" className="view-details-btn">
                  Apply now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link to="https://dash.onlinesaathi.org/login">50+ Services</Link>
                </h3>

                <p>
                  Discover support-driven services that make daily work and
                  personal growth easier for the community.
                </p>

                <Link to="https://dash.onlinesaathi.org/login" className="view-details-btn">
                  Explore services
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="https://dash.onlinesaathi.org/login">1500+ Saathis</Link>
                </h3>

                <p>
                  Build connections with our trusted network of Saathi agents
                  and partners across 25+ states.
                </p>

                <Link to="https://dash.onlinesaathi.org/login" className="view-details-btn">
                  Join the network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
