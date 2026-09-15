import React from "react"
import starIcon from "../../images/star-icon.png"
import history1 from "../../images/history/history1.jpg"
import history2 from "../../images/history/history2.jpg"
import history3 from "../../images/history/history3.jpg"
import history4 from "../../images/history/history4.jpg"

const OurHistory = () => {
  return (
    <>
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              Our History
            </span>
            <h2>History Begins in 2015</h2>
          </div>

          <ol className="timeline history-timeline">
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
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>From Struggle to Purpose</h3>
                      <p>
                        Naresh had worked as a child labourer in factories,
                        hotels, and tea shops — yet never gave up his education.
                        While at Teach for India, he saw the hardships of migrant
                        workers first-hand and founded Online Saathi, a digital
                        mobile office that helped migrants access jobs, their
                        rights, and legal aid in cities.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history1} alt="banner" />
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
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Labour Resource & Support Centre</h3>
                      <p>
                        With CSR funding, Naresh launched the Labour Resource and
                        Support Centre, helping 20,000+ migrants across the
                        country. He registered a union and helped lakhs of
                        migrant workers access government schemes, entitlements,
                        wages, and legal aid.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history2} alt="banner" />
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
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Relief During the Pandemic</h3>
                      <p>
                        When COVID-19 hit migrant communities hard, Online Saathi
                        organised relief for over 12,500 migrant labourer
                        families — food, rations, transport, flight tickets,
                        livelihoods, and loans to start businesses — raising more
                        than ₹2.25 crore over two years.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history3} alt="banner" />
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
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>#WalkForMigrant</h3>
                      <p>
                        Naresh walked 5,100 kilometres through 77 districts
                        across 10 states. He filed 100+ RTIs on migrant labour
                        issues and petitioned over 50 district collectors and the
                        PMO, calling for action and dedicated schemes for migrant
                        workers.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history4} alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default OurHistory
