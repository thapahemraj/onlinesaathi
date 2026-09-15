import React from "react"
import { Link } from "gatsby"
import BlogSidebar from "./BlogSidebar"
import img6 from "../../images/blog/blog-img6.jpg"
import img4 from "../../images/blog/blog-img4.jpg"
import img5 from "../../images/blog/blog-img5.jpg"
import img7 from "../../images/blog/blog-img7.jpg"
import img11 from "../../images/blog/blog-img11.jpg"
import img12 from "../../images/blog/blog-img12.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import user4 from "../../images/user4.jpg"

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={img6} alt="Blog post" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-folder-open"></i>
                        <span>Category</span>
                        <Link to="/blog">Jobs</Link>
                      </li>
                      <li>
                        <i className="bx bx-group"></i>
                        <span>View</span>
                        <Link to="#">12,500</Link>
                      </li>
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Last Updated</span>
                        <Link to="#">30/04/2025</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>How Migrant Workers Find Jobs Through Online Saathi</h3>

                  <p>
                    Migrant workers face many barriers when searching for work,
                    from verifying employers to understanding application
                    processes. Online Saathi connects job seekers with local
                    Saathi agents who understand their skills and needs.
                  </p>

                  <p>
                    Through our Jobs Connect service, workers are matched with
                    verified employers, supported through every step of the
                    application process, and guided toward meaningful,
                    sustainable work across India.
                  </p>

                  <blockquote>
                    <p>
                      "The support from Online Saathi was exceptional. I found a
                      reliable job and my family's future is now secure."
                    </p>
                    <cite>Sewa Saathi Agent</cite>
                  </blockquote>

                  <p>
                    Saathi agents work directly in local communities, assessing
                    skills, gathering documents, and ensuring applicants are
                    prepared for interviews. This local presence makes the
                    process approachable and reliable for every worker.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img4} alt="Blog post" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img5} alt="Blog post" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img7} alt="Blog post" />
                      </figure>
                    </li>
                  </ul>

                  <h3>What we offer through Jobs Connect:</h3>

                  <ul className="features-list">
                    <li>
                      <i className="bx bx-badge-check"></i> Verified employers
                      and trusted job listings
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> Local Saathi support
                      for every step of the application
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> Skill assessment and
                      career guidance
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> Ongoing support even
                      after placement
                    </li>
                  </ul>

                  <h3>Going beyond job matching</h3>
                  <p>
                    Beyond placement, Online Saathi helps workers access
                    government schemes, open bank accounts, and manage their
                    finances. Our mission is to create a supportive ecosystem
                    where every worker can grow with confidence.
                  </p>

                  <h3>How to get started</h3>
                  <p>
                    Visit your nearest Saathi agent or contact us through our
                    website to begin your journey. With over 12,500 individuals
                    placed and 1,500+ Saathis across India, a better opportunity
                    is closer than you think.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-purchase-tag"></i>
                    </span>

                    <Link to="/blog">Jobs</Link>
                    <Link to="/blog">Migrants</Link>
                    <Link to="/blog">Services</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          className="twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="linkedin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="article-author">
                  <div className="author-profile-header"></div>
                  <div className="author-profile">
                    <div className="author-profile-title">
                      <img src={user1} className="shadow-sm" alt="Blog post" />
                      <h4>Online Saathi</h4>
                      <span className="d-block">
                        Jobs Connect Team
                      </span>
                      <p>
                        The Online Saathi team works every day to connect workers
                        with jobs, government schemes, and essential services
                        through our network of 1,500+ Saathi agents across India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tracer-post-navigation">
                  <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                      <Link to="#">
                        <span className="image-prev">
                          <img src={img11} alt="Blog post" />
                          <span className="post-nav-title">Prev</span>
                        </span>

                        <span className="prev-link-info-wrapper">
<span className="prev-title">
                              Accessing Government Schemes Made Simple
                            </span>
                            <span className="meta-wrapper">
                              <span className="date-post">April 28, 2025</span>
                            </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                      <Link to="#">
                        <span className="next-link-info-wrapper">
<span className="next-title">
                              Empowering Communities Through Sewa Saathi Network
                            </span>
                            <span className="meta-wrapper">
                              <span className="date-post">April 29, 2025</span>
                            </span>
                        </span>

                        <span className="image-next">
                          <img src={img12} alt="Blog post" />
                          <span className="post-nav-title">Next</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={user1}
                              className="avatar"
                              alt="Blog post"
                            />
                            <b className="fn">Suresh Thapa</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 30, 2025 at 10:59 am</span>
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            I applied through my local Saathi and received great
                            support through the whole process. Highly recommended
                            for anyone looking for reliable work.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={user2}
                                  className="avatar"
                                  alt="Blog post"
                                />
                                <b className="fn">Binita Lama</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>April 30, 2025 at 12:15 pm</span>
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                Great article! The Saathi agent near me helped my
                                family access government schemes easily. Thank you
                                Online Saathi.
                              </p>
                            </div>

                            <div className="reply">
                              <Link to="#comment" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>

                          <ol className="children">
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <div className="comment-author vcard">
                                    <img
                                      src={user3}
                                      className="avatar"
                                      alt="Blog post"
                                    />
                                    <b className="fn">Raju Sharma</b>
                                    <span className="says">says:</span>
                                  </div>

                                  <div className="comment-metadata">
                                    <span>April 30, 2025 at 2:45 pm</span>
                                  </div>
                                </div>

                                <div className="comment-content">
                                  <p>
                                    The support team was responsive and helped me
                                    understand every step. My journey with Online
                                    Saathi has been truly rewarding.
                                  </p>
                                </div>

                                <div className="reply">
                                  <Link to="#comment" className="comment-reply-link">
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={user4}
                              className="avatar"
                              alt="Blog post"
                            />
                            <b className="fn">Himal Magar</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 30, 2025 at 4:20 pm</span>
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            Online Saathi is a secure and fast platform for
                            sending money from India to Nepal. The process was
                            simple and reliable.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={user1}
                                  className="avatar"
                                  alt="Blog post"
                                />
                                <b className="fn">Ganesh KC</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>April 30, 2025 at 5:00 pm</span>
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                As a partner, I can confidently say Online Saathi
                                genuinely cares about workers and their families.
                                Keep up the great work.
                              </p>
                            </div>

                            <div className="reply">
                              <Link to="#comment" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div id="comment" className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-author">
                        <label htmlFor="name">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          placeholder="Your Name*"
                          name="author"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-email">
                        <label htmlFor="email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email*"
                          name="email"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-url">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          id="url"
                          placeholder="Website"
                          name="url"
                        />
                      </p>

                      <p className="comment-form-comment">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          placeholder="Your Comment..."
                          rows="5"
                          required="required"
                        ></textarea>
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label htmlFor="cookies">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailsContent
