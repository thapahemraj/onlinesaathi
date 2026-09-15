import React from "react"

const CaseStudiesSidebar = () => {
  return (
    <>
      <div className="case-studies-sidebar-sticky">
        <div className="case-studies-details-info">
          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              
              <span>Client:</span>
              <a href="https://www.onlinesaathi.org/" target="_blank" rel="noreferrer">
                Online Saathi
              </a>
              <a
                href="https://dash.onlinesaathi.org/login"
                target="_blank"
                rel="noreferrer"
              >
                Saathi Dashboard
              </a>
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
                <i className="bx bx-purchase-tag"></i>
              </div>
              <span>Services:</span>
              Jobs Connect, Micro ATM
            </li>

            <li>
              <div className="icon">
                <i className="bx bx-check"></i>
              </div>
              <span>Completed:</span>
              30 April 2025
            </li>

            <li>
              <div className="icon">
                <i className="bx bx-globe"></i>
              </div>
              <span>Website:</span>
              <a href="https://www.onlinesaathi.org/" target="_blank" rel="noreferrer">
                www.onlinesaathi.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesSidebar
