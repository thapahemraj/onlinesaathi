import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/gallery/logo.svg"
import LoginOrProfile from "./LoginOrProfile"
import ThemeToggle from "./ThemeToggle"
import HeaderSearch from "./HeaderSearch"

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const searchButton = React.useRef(null)
  const closeSearch = () => { setSearchOpen(false); searchButton.current?.focus() }
  React.useEffect(() => {
    if (!searchOpen) return
    const dismiss = event => { if (!document.getElementById("navbar")?.contains(event.target)) setSearchOpen(false) }
    document.addEventListener("pointerdown", dismiss)
    return () => document.removeEventListener("pointerdown", dismiss)
  }, [searchOpen])

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    const onScroll = () => {
      if (!elementId) return
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    }
    document.addEventListener("scroll", onScroll, { passive: true })
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="Rewy-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src={logo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </li>
                  {[['/workers/', 'Workers'], ['/saathi/', 'Saathi'], ['/business/', 'Business']].map(([url, label]) => (
                    <li className="nav-item" key={url}><Link to={url} activeClassName="active" onClick={() => setCollapsed(true)} className="nav-link">{label}</Link></li>
                  ))}
                  {/* <li className="nav-item">
                    <Link
                      to="/"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Home <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          IT Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/seo-agency"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          SEO Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-science-ml-company"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Data Science ML Company
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-analytics-ai-startup"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Data Analytics & AI Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/digital-marketing-agency"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Digital Marketing Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-science-online-courses"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Data Science Online Courses
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/big-data-analysis-startup"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Big Data Analysis Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-analytics-ml-consulting"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Data Analytics ML Consulting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/machine-learning-ai-solutions"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Machine Learning AI Solutions
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      to="/about-us"
                      onClick={() => setCollapsed(true)}
                      getProps={({ location }) => ({ className: /^\/(about|about-us|history|team)(\/|$)/.test(location.pathname) ? "nav-link active" : "nav-link" })}
                      className="nav-link"
                    >
                      About Us <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/history"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          History
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/testimonials"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/team"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/services"
                      onClick={() => setCollapsed(true)}
                      getProps={({ location }) => ({ className: /^\/services(\/|$)/.test(location.pathname) ? "nav-link active" : "nav-link" })}
                      className="nav-link"
                    >
                      Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/services"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          All Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/safe-jobs-connect"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Safe Jobs Connect
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/social-welfare-schemes"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Social Welfare Schemes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/micro-atm-services"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Micro ATM Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/pan-card-center"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          PAN Card Center
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/travel-bill-payments"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Travel & Bill Payments
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/neo-banking-remittance"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Neo Banking & Remittance
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/services"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/services/service-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Case Studies <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/case-studies"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Case Studies
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/case-studies/case-studies-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Case Studies Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="#"
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Courses <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/courses"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Courses
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/courses/course-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Course Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="#"
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Events <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/events"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Events
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/events/event-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Contact
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/gallery"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Gallery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/faq"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/coming-soon"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/membership-levels"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Membership Levels
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/profile-authentication"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Login/Register
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/privacy-policy"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/terms-condition"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Terms of Service
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/404"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                        <Link
                          to="/blog"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog
                        </Link>
                      </li> */}


                  {/* <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Blog <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/blog"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/blog/blog-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  
                  <li className="nav-item">
                        <Link
                          to="/contact"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Contact
                        </Link>
                      </li>

                </ul>

                

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <button ref={searchButton} type="button" className="site-search-toggle" aria-label={searchOpen ? "Close search" : "Open search"} aria-expanded={searchOpen} aria-controls="site-search-panel" onClick={() => { setSearchOpen(open => !open); setCollapsed(true) }}>
                      <i className={`bx ${searchOpen ? "bx-x" : "bx-search"}`} aria-hidden="true" />
                    </button>
                  </div>
                  <div className="option-item"><ThemeToggle /></div>

                  <div className="option-item">
                    <LoginOrProfile onNavigate={() => setCollapsed(true)} />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {searchOpen && <HeaderSearch onClose={closeSearch} />}
      </div>
    </>
  )
}

export default Navbar
