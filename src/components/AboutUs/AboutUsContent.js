import React from "react"
import { Link } from "gatsby"
import aboutImage from "../../images/about/about-img5.png"
import starIcon from "../../images/star-icon.png"
import icon4 from "../../images/icons/icon4.png"
import icon5 from "../../images/icons/icon5.png"
import icon6 from "../../images/icons/icon6.png"
import icon7 from "../../images/icons/icon7.png"
import shape1 from "../../images/shape/circle-shape1.png"

const AboutUsContent = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={aboutImage} alt="banner" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    About Us
                  </span>
                  <h2>Empowering India's Informal Workforce</h2>
                  <p>
                    Online Saathi is a digital platform that bridges the gap
                    between informal workers and essential services — jobs,
                    government schemes, banking, insurance, and more.
                  </p>

                  <ul className="features-list">
                    <li>
                      <img src={icon4} alt="banner" />
                      <h3>1500+</h3>
                      <p>Saathi agents</p>
                    </li>
                    <li>
                      <img src={icon5} alt="banner" />
                      <h3>12,500+</h3>
                      <p>Individuals placed</p>
                    </li>
                    <li>
                      <img src={icon6} alt="banner" />
                      <h3>25+</h3>
                      <p>State partners</p>
                    </li>
                    <li>
                      <img src={icon7} alt="banner" />
                      <h3>50+</h3>
                      <p>Essential services</p>
                    </li>
                  </ul>
                  <p>
                    From safe job connect to welfare schemes, micro ATM to
                    remittances — we make essential services accessible to
                    everyone, everywhere.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>More About Us<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>

        <div className="container">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Founded by Naresh Sijapati in 2015, Online Saathi began as a
                    digital mobile office helping migrants access jobs, their
                    rights, and legal aid in cities.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> 20,000+ migrants supported
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> 12,500+ families served in crisis
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> 5,100 km walked for migrant rights
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> 100+ RTIs filed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    To create products and services that help informal workers
                    achieve their goals and build a partner ecosystem that
                    supports everyone who needs it.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Bridging the digital divide
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Job creation at grassroots
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Financial inclusion for all
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Welfare schemes for workers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Online Saathi is a strong worker community that connects
                    people with jobs, support, and opportunities to grow
                    together through a trusted Saathi agent network.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Trusted local Saathi agents
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Community-first approach
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Technology-enabled services
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Grassroots empowerment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default AboutUsContent
