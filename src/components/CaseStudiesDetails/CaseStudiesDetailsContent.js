import React from "react"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/projects-details1.jpg"
import project2 from "../../images/projects/project2.jpg"

const CaseStudiesDetailsContent = () => {
  return (
    <>
      <section className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="case-studies-details-image">
                <img src={details1} alt="about" />
              </div>
              <div className="case-studies-details-desc">
                <span className="sub-title">Jobs Connect</span>
                <h3>Helping 12,500+ Workers Find Reliable Employment</h3>
                <p>
                  Jobs Connect matches migrant workers with verified employment
                  opportunities across India. Through our network of 1,500+
                  Saathi agents, workers receive skill assessment, guidance
                  through applications, and ongoing support to build stable,
                  meaningful careers.
                </p>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="image">
                      <img src={project2} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="content">
                      <h3>Important Facts</h3>
                      <ul>
                        <li>12,500+ Individuals placed</li>
                        <li>1,500+ Saathi agents nationwide</li>
                        <li>Verified employers only</li>
                        <li>Skill assessment and matching</li>
                        <li>Application support at every step</li>
                        <li>Ongoing support after placement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Migrant workers often struggle to find trustworthy employment
                  and understand complex application processes. Online Saathi
                  brings the solution directly to local communities, where
                  Saathi agents assess each worker's skills and match them with
                  opportunities that fit their goals.
                </p>
                <p>
                  From verification of employers to preparation for interviews,
                  workers receive complete support. This local-first approach
                  builds trust and ensures workers are placed with confidence,
                  helping families across India secure a sustainable future.
                </p>
                <h3>Results</h3>
                <p>
                  More than 12,500 individuals have been placed in reliable jobs
                  through the Jobs Connect service, with families reporting
                  greater financial stability and access to essential services
                  through Online Saathi's wider ecosystem.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CaseStudiesSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudiesDetailsContent
