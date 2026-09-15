import React from "react"
import starIcon from "../../images/star-icon.png"
import howItWork from "../../images/how-its-work.png"

const WhyChooseUs = () => {
  return (
    <>
      <section className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  People Love Us
                </span>
                <h2>Why Choose Us?</h2>
                <p>
                  Online Saathi combines technology with a trusted local network
                  to make essential services accessible to the informal
                  workforce.
                </p>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>Trusted Local Network</h3>
                    <p>
                      1,500+ trained Saathi agents across 25+ states deliver
                      services at the grassroots, building trust one community
                      at a time.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Essential Services Made Easy</h3>
                    <p>
                      50+ services from jobs and government schemes to banking,
                      travel, and remittances — all accessible through a single
                      trusted platform.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>Real Impact, Proven Results</h3>
                    <p>
                      12,500+ individuals placed in jobs and 20,000+ migrants
                      supported since 2018 — with a mission to empower India's
                      informal workforce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <img src={howItWork} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
