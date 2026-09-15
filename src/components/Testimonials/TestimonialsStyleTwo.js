import React from "react"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"
import shape from "../../images/shape/shape1.svg"

const TestimonialsStyleTwo = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-fafafb">
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
              <div className="single-testimonials-box">
                <img src={client1} className="shadow-sm" alt="about" />
                <p>
                  Thanks to Online Saathi services, I received immediate support
                  during a crisis. Their quick response and empathy made a
                  significant difference in my life.
                </p>
                <div className="client-info">
                  <h3>Ganesh KC</h3>
                  <span>Partner</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client2} className="shadow-sm" alt="about" />
                <p>
                  Before, sending money to Nepal required a full day's leave and
                  extra costs. With Online Saathi, it's now fast, cheap, and
                  hassle-free.
                </p>
                <div className="client-info">
                  <h3>Rudra Prasad Acharya</h3>
                  <span>Agent</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client3} className="shadow-sm" alt="about" />
                <p>
                  The support from Online Saathi was exceptional. They were
                  there when I needed them most, providing guidance and care.
                </p>
                <div className="client-info">
                  <h3>Raju Sharma</h3>
                  <span>User</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client1} className="shadow-sm" alt="about" />
                <p>
                  Online Saathi is a secure and fast platform for sending IME
                  Remit from India to Nepal, with easy deposits to any bank in
                  Nepal.
                </p>
                <div className="client-info">
                  <h3>Himal Magar</h3>
                  <span>User</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="about" />
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleTwo
