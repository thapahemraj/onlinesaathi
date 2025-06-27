import React from "react"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Our Address</h3>
                <p>309 3rd Floor The Atlanta Business Hub, Nana Chiloda, Ahmedabad, Gujarat 382330</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: <a href="tel:+919099005251">+91 90990 05251</a>
                </p>
                <p>
                  E-mail: <a href="mailto:support@onlinesaathi.org">support@onlinesaathi.org</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 18:00</p>
                <p>Sunday & Saturday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
