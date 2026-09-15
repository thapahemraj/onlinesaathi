import React from "react"
import starIcon from "../../images/star-icon.png"
import history1 from "../../images/history/history1.jpg"
import history2 from "../../images/history/history2.jpg"
import history3 from "../../images/history/history3.jpg"
import history4 from "../../images/history/history4.jpg"

const OurHistoryContentTwo = () => {
  return (
    <>
      <div className="history-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Our History
            </span>
            <h2>History Begins in 2015</h2>
          </div>

          <ol className="timeline history-timeline history-timeline-style-two">
            <li className="timeline-block">
              <div className="timeline-date">
                <span>2015</span>
                From Struggle to Purpose
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history1} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>From Struggle to Purpose</h3>
                      <p>
                        Naresh Sijapati founded Online Saathi, a digital mobile
                        office that helped migrants access jobs, their rights,
                        and legal aid in cities. Having worked as a child
                        labourer himself, he understood the challenges of the
                        informal workforce first-hand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2018</span>
                Labour Resource & Support Centre
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history2} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Labour Resource & Support Centre</h3>
                      <p>
                        With CSR funding, Online Saathi launched the Labour
                        Resource and Support Centre, helping 20,000+ migrants
                        across the country access government schemes,
                        entitlements, wages, and legal aid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2019</span>
                Relief During the Pandemic
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history3} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Relief During the Pandemic</h3>
                      <p>
                        When COVID-19 hit migrant communities hard, Online Saathi
                        organised relief for over 12,500 migrant labourer
                        families — food, rations, transport, flight tickets,
                        livelihoods, and loans — raising more than ₹2.25 crore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2022</span>
                #WalkForMigrant
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history4} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>#WalkForMigrant</h3>
                      <p>
                        Naresh walked 5,100 kilometres through 77 districts
                        across 10 states, filing 100+ RTIs on migrant labour
                        issues and petitioning over 50 district collectors and
                        the PMO for dedicated schemes for migrant workers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default OurHistoryContentTwo
