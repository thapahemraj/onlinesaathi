import React from "react"
import { Link } from "gatsby"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"

const RelatedProjects = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <h2>More Services You Might Like</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box ">
                <div className="icon">
                  <img src={icon1} alt="about" />
                </div>
                <h3>
                  <Link to="/services/safe-jobs-connect">Safe Jobs Connect</Link>
                </h3>
                <p>
                  Verified job listings with local Saathi support from skill
                  assessment to application and beyond.
                </p>

                <Link to="/services/safe-jobs-connect" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon2} alt="about" />
                </div>
                <h3>
                  <Link to="/services/micro-atm-services">Micro ATM Services</Link>
                </h3>
                <p>
                  Banking access closer to home with AEPS services and assisted
                  transactions through your local Saathi.
                </p>

                <Link to="/services/micro-atm-services" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon3} alt="about" />
                </div>
                <h3>
                  <Link to="/services/social-welfare-schemes">Government Schemes</Link>
                </h3>
                <p>
                  Guidance and application support for social welfare schemes,
                  making essential benefits accessible to all.
                </p>

                <Link to="/services/social-welfare-schemes" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RelatedProjects
