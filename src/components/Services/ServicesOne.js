import React from "react"
import { Link } from "gatsby"

const ServicesOne = () => {
  return (
    <>
      <section className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">Safe Jobs Connect</Link>
                </h3>
                <p>
                  Local job opportunities tailored to user skills, with a
                  job-matching tool, resume builder, and Saathi support for a
                  smooth hiring experience.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Social Welfare Schemes</Link>
                </h3>

                <p>
                  Identify eligible government schemes, guide applications, and
                  track status so benefits reach the right people efficiently.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Micro ATM Services</Link>
                </h3>

                <p>
                  AEPS cash withdrawals, balance enquiries, and mini statements
                  brought right to your doorstep through local Saathi agents.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-segmentation"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">PAN Card Center</Link>
                </h3>

                <p>
                  Easy PAN card applications and verifications made simple for
                  rural and semi-urban communities at local centers.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Travel & Bill Payments</Link>
                </h3>

                <p>
                  Ticket booking and travel assistance, plus electricity, mobile,
                  DTH and more — all paid in one convenient place.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-settings"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Neo Banking & Remittance</Link>
                </h3>

                <p>
                  Modern banking features for informal workers and secure
                  cross-border remittances between India and Nepal.
                </p>

                <Link className="view-details-btn" to="/services/service-details">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesOne
