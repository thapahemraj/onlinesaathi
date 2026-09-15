import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"
import project3 from "../../images/projects/project3.jpg"
import project4 from "../../images/projects/project4.jpg"
import project5 from "../../images/projects/project5.jpg"
import project6 from "../../images/projects/project6.jpg"

const RecentProjects = () => {
  return (
    <>
      <section className="projects-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="project" /> Recent Projects
            </span>
            <h2>Our Impact Across India</h2>
            <p>
              From job placements to financial services, see how Online Saathi
              is transforming the lives of informal workers nationwide.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project1} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Jobs Connect</Link>
                  </h3>
                  <span>12,500+ Individuals Placed</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project2} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      Micro ATM Services
                    </Link>
                  </h3>
                  <span>AEPS & Banking Access</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project3} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Government Schemes</Link>
                  </h3>
                  <span>500+ Schemes Accessible</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project4} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Indo-Nepal Remittance</Link>
                  </h3>
                  <span>Fast & Secure Transfers</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box ">
                <div className="image">
                  <img src={project5} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Bill Payment</Link>
                  </h3>
                  <span>One-stop Payments</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project6} alt="project" />

                  <Link className="link-btn" to="/case-studies/case-studies-details">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Sewa Saathi Network</Link>
                  </h3>
                  <span>1500+ Agents Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentProjects
