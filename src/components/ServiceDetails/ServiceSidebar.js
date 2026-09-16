import React from "react"
import { Link } from "gatsby"
import services from "../../data/services"

const ServiceSidebar = ({ activeSlug }) => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          {services.map(service => (
            <li key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className={service.slug === activeSlug ? "active" : ""}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="download-file">
          <h3>Brochures</h3>

          <ul>
            <li>
              <Link to="https://dash.onlinesaathi.org/login">
                Download Brochure <i className="bx bxs-file-pdf"></i>
              </Link>
            </li>
            <li>
              <Link to="https://dash.onlinesaathi.org/login">
                Download App <i className="bx bxs-file-txt"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Phone:</span>
              <a href="tel:+21453545413">+91 90990 05251</a>
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              Ahmedabad, Gujarat,
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>Email:</span>
              <a href="mailto:support@onlinesaathi.org">support@onlinesaathi.org</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar