import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import services from "../../data/services"

const ServiceDetailsContent = props => {
  const service = props.service || services[0]

  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div
                className="services-details-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img src={service.headerImage} alt="about" />
              </div>

              <div className="services-details-desc">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  {service.subtitle}
                </span>
                <h3 data-aos="fade-up" data-aos-duration="1200">
                  About this Services
                </h3>
                <p data-aos="fade-up" data-aos-duration="1200">
                  {service.about}
                </p>

                <div className="row align-items-center">
                  <div
                    className="col-lg-6 col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="image">
                      <img src={service.factsImage} alt="about" />
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="content">
                      <h3>Important Facts</h3>
                      <ul>
                        {service.facts.map(fact => (
                          <li key={fact}>{fact}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p data-aos="fade-up" data-aos-duration="1200">
                  {service.aboutTwo}
                </p>
                <h3 data-aos="fade-up" data-aos-duration="1200">
                  Who It Helps
                </h3>

                <div className="row">
                  {service.helps.map((item, index) => (
                    <div
                      key={item.label}
                      className="col-lg-4 col-sm-6 col-md-6"
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                      data-aos-delay={index * 100}
                    >
                      <div className="single-industries-serve-box">
                        <div className="icon">
                          <i className={item.icon}></i>
                        </div>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <h3
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Key Features
                </h3>
                <ul className="technologies-features">
                  {service.features.map((feature, index) => (
                    <li
                      key={feature}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={(index % 3) * 100}
                    >
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-12"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <ServiceSidebar activeSlug={service.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsContent