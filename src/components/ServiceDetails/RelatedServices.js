import React from "react"
import { Link } from "gatsby"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"
import services from "../../data/services"

const RelatedServices = () => {
  const related = services.slice(0, 3)
  const icons = [icon1, icon2, icon3]

  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1200">
            <h2>More Services You Might Like</h2>
          </div>

          <div className="row">
            {related.map((service, index) => (
              <div
                key={service.slug}
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={index * 150}
              >
                <div className="single-services-box">
                  <div className="icon">
                    <img src={icons[index]} alt="about" />
                  </div>
                  <h3>
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.shortDescription}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="read-more-btn"
                  >
                    Read More <i className="flaticon-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default RelatedServices