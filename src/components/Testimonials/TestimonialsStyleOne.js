import React from "react"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"

const TestimonialsStyleOne = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Testimonials
            </span>
            <h2>What Our Users are Saying?</h2>
            <p>
              Real stories from the workers, agents, and partners we
              support every day.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Thanks to Online Saathi services, I received immediate support
                  during a crisis. Their quick response and empathy made a
                  significant difference in my life.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="about" />
                    <div className="title">
                      <h3>Ganesh KC</h3>
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Before, sending money to Nepal required a full day's leave and
                  extra costs. With Online Saathi, it's now fast, cheap, and
                  hassle-free.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client2} alt="about" />
                    <div className="title">
                      <h3>Rudra Prasad Acharya</h3>
                      <span>Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  The support from Online Saathi was exceptional. They were
                  there when I needed them most, providing guidance and care.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client3} alt="about" />
                    <div className="title">
                      <h3>Raju Sharma</h3>
                      <span>User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Online Saathi is a secure and fast platform for sending IME
                  Remit from India to Nepal, with easy deposits to any bank in
                  Nepal.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="about" />
                    <div className="title">
                      <h3>Himal Magar</h3>
                      <span>User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleOne
