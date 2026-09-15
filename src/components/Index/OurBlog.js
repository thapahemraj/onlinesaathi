import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import blog1 from "../../images/blog/blog-img1.jpg"
import blog5 from "../../images/blog/blog-img5.jpg"
import blog6 from "../../images/blog/blog-img6.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"

const OurBlog = () => {
  return (
    <>
      <section className="blog-area pt-100 pb-70 bg-fffbf5">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="blog" />
              Our Blog
            </span>
            <h2>Latest Valuable Insights</h2>
            <p>
              Stories, updates, and insights about empowering India's informal
              workforce.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog1} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user1}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>Online Saathi</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2025
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      How Migrant Workers Find Jobs Through Online Saathi
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog5} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user2}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>Online Saathi</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 28, 2025
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Accessing Government Schemes Made Simple
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog6} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user3}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>Online Saathi</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 29, 2025
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Empowering Communities Through Sewa Saathi Network
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurBlog
