import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"
import project3 from "../../images/projects/project3.jpg"
import project4 from "../../images/projects/project4.jpg"
import project5 from "../../images/projects/project5.jpg"
import project6 from "../../images/projects/project6.jpg"

const projects = [
  {
    title: "Jobs Connect",
    slug: "safe-jobs-connect",
    stat: "12,500+ Individuals Placed",
    image: project1,
  },
  {
    title: "Micro ATM Services",
    slug: "micro-atm-services",
    stat: "AEPS & Banking Access",
    image: project2,
  },
  {
    title: "Government Schemes",
    slug: "social-welfare-schemes",
    stat: "500+ Schemes Accessible",
    image: project3,
  },
  {
    title: "Indo-Nepal Remittance",
    slug: "neo-banking-remittance",
    stat: "Fast & Secure Transfers",
    image: project4,
  },
  {
    title: "Bill Payment",
    slug: "travel-bill-payments",
    stat: "One-stop Payments",
    image: project5,
  },
  {
    title: "Sewa Saathi Network",
    slug: "safe-jobs-connect",
    stat: "1500+ Agents Nationwide",
    image: project6,
  },
]

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
            {projects.map(project => (
              <div key={project.title} className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <div className="image">
                    <img src={project.image} alt="project" />

                    <Link
                      className="link-btn"
                      to={`/services/${project.slug}`}
                    >
                      <i className="bx bx-plus"></i>
                    </Link>

                    <h3 className="projects-box-heading">
                      <Link to={`/services/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="content">
                    <h3>
                      <Link to={`/services/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <span>{project.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentProjects