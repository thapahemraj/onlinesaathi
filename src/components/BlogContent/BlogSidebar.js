import React from "react"
import { Link } from "gatsby"

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <h3 className="widget-title">Search</h3>

          <form className="search-form">
            <label htmlFor="search">
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_tracer_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>
            <div className="info">
              <span>April 30, 2025</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  How Migrant Workers Find Jobs Through Online Saathi
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>
            <div className="info">
              <span>April 29, 2025</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  Accessing Government Schemes Made Simple
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>
            <div className="info">
              <span>April 28, 2025</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  Empowering Communities Through Sewa Saathi Network
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link to="/blog">
                Jobs <span className="post-count">(03)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Government Schemes <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Remittance <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Services <span className="post-count">(08)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Community <span className="post-count">(01)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link to="/blog">
              Jobs <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="/blog">
              Migrants <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="/blog">
              Schemes <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="/blog">
              Remittance <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="/blog">
              Saathi <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Services <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Community <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Support <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSidebar
