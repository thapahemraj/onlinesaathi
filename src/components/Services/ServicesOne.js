import React from "react"
import { Link } from "gatsby"
import services from "../../data/services"

const ServicesOne = () => {
  return (
    <>
      <section className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {services.map(service => (
              <div
                key={service.slug}
                className="col-lg-4 col-md-6 col-sm-6"
              >
                <div className="single-solutions-box">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.shortDescription}</p>

                  <Link
                    className="view-details-btn"
                    to={`/services/${service.slug}`}
                  >
                    View Details
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

export default ServicesOne