import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"
import shape from "../../images/shape/shape1.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-area bg-f1f8fb">
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

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>

          <div className="testimonials-view-btn text-center">
            <Link to="/testimonials" className="default-btn">
              <i className="flaticon-view"></i>
              Check Out All Reviews <span></span>
            </Link>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="about" />
        </div>
      </section>
    </>
  )
}

export default Testimonials
