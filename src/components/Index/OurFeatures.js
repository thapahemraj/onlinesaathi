import React from "react"
import starIcon from "../../images/star-icon.png"
import serviceIcon1 from "../../images/services/service-icon1.png"
import serviceIcon2 from "../../images/services/service-icon2.png"
import serviceIcon3 from "../../images/services/service-icon3.png"
import serviceIcon4 from "../../images/services/service-icon4.png"
import serviceIcon5 from "../../images/services/service-icon5.png"
import serviceIcon6 from "../../images/services/service-icon6.png"

const OurFeatures = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="feature" />
              Why Choose Us
            </span>

            <h2>We help workers move forward with confidence</h2>
            <p>
              Online Saathi brings together opportunity, trust, and practical
              support so workers can grow, connect, and succeed.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon1} alt="feature" />
                </div>
                <h3>Trusted Opportunities</h3>
                <p>
                  Workers can access real opportunities and a platform designed to
                  create better career visibility and support.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon2} alt="feature" />
                </div>
                <h3>Supportive Network</h3>
                <p>
                  A strong eco-system of workers, supporters, and partners creates
                  a community that is active, helpful, and collaborative.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon3} alt="feature" />
                </div>
                <h3>Practical Growth</h3>
                <p>
                  We help communities access jobs, services, and progress-driven
                  connections that improve daily life and work outcomes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon4} alt="feature" />
                </div>
                <h3>Career Visibility</h3>
                <p>
                  Our platform makes opportunities easier to discover and helps
                  workers move toward better, more stable options.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon5} alt="feature" />
                </div>
                <h3>Service Access</h3>
                <p>
                  Members can connect with services that reduce barriers and make
                  support more accessible for everyday needs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon6} alt="feature" />
                </div>
                <h3>Long-term Progress</h3>
                <p>
                  Online Saathi is built to help people grow continuously and
                  stay connected to the opportunities they need most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurFeatures
