import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerImg from "../../images/home/Home-img-1.svg"

const Banner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="it-services-banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Fostering a Thriving Worker Community
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  The platform has fostered a thriving community of workers and
                  supporters, creating a network where individuals can grow, share
                  experiences, and continuously improve their career prospects.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="https://dash.onlinesaathi.org/login" className="default-btn">
                    <i className="flaticon-right"></i>
                    Become a Saathi <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img  src={bannerImg} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
