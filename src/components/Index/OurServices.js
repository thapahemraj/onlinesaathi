import React from "react"
import service1 from "../../images/services/service1.png"
import service2 from "../../images/services/service2.png"
import starIcon from "../../images/star-icon.png"

const OurServices = () => {
  return (
    <>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Opportunities built around worker success</h2>
                  <p>
                    Online Saathi creates pathways for workers to discover jobs,
                    build skills, and access the support they need to grow in a
                    changing economy.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Job matching and referrals
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Skill-building support
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Community-driven opportunities
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Trusted service access
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Career growth guidance
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Worker empowerment programs
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Local network support
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Continuous learning opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Support that helps workers thrive</h2>
                  <p>
                    Our platform brings together workers, supporters, and
                    businesses to encourage progress, create opportunities, and
                    strengthen the community at every step.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Reliable worker support
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Better visibility for services
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Community-driven connections
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Growth-oriented partnerships
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Career confidence and guidance
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Access to wider opportunities
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Stronger local collaboration
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Shared success across the network
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service2} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
    </>
  )
}

export default OurServices
