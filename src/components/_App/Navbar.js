import React from "react"
import { Link } from "gatsby"
import logo from "../../images/gallery/logo.svg"

const mobileLinks = [
  ["/", "Home"],
  ["/about/", "About"],
  ["/history/", "— History"],
  ["/workers/", "For Workers"],
  ["/workers/#services", "— Services"],
  ["/saathi/", "Become a Saathi"],
  ["/saathi/#calculator", "— Earnings calculator"],
  ["/business/", "Business"],
  ["/business/#solutions", "— Solutions"],
  ["/team/", "Team"],
  ["/contact/", "Contact"],
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    const root = document.documentElement
    let saved = null
    try {
      saved = localStorage.getItem("os-theme")
    } catch (_) {
      // Storage may be unavailable in privacy-restricted browsers.
    }
    const value = saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    root.dataset.theme = value
    setTheme(value)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem("os-theme", next)
    } catch (_) {
      // The selected mode is still applied for this page session.
    }
    setTheme(next)
  }

  const closeMobile = () => setMobileOpen(false)
  const dropdown = (to, label, links) => (
    <div className="dd">
      <Link to={to} className="nav-main" activeClassName="on" onClick={closeMobile}>{label}</Link>
      <div className="sub">
        {links.map(([href, title]) => (
          <Link key={href} to={href} activeClassName="on" onClick={closeMobile}>{title}</Link>
        ))}
      </div>
    </div>
  )

  return (
    <div className="imported-content website-header">
      <div className="topbar">
        <div className="wrap">
          <div className="l">
            <a href="tel:+919099005251"><i className="bx bx-phone" aria-hidden="true" /> +91 90990 05251</a>
            <a href="mailto:support@onlinesaathi.org"><i className="bx bx-envelope" aria-hidden="true" /> support@onlinesaathi.org</a>
            <span className="hide"><i className="bx bx-map" aria-hidden="true" /> Naroda, Ahmedabad</span>
          </div>
          <div className="r">
            <a href="https://www.youtube.com/@onlinesaathi" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/company/online-saathi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.whatsapp.com/channel/0029VaVLYnq6LwHfwUg2SK2c" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
          </div>
        </div>
      </div>

      <header>
        <div className="wrap nav">
          <Link to="/" className="brand" aria-label="Online Saathi home" onClick={closeMobile}>
            <img src={logo} alt="Online Saathi — आपका अपना साथी" />
          </Link>

          <nav className="menu" aria-label="Main navigation">
            <Link to="/" activeClassName="on" onClick={closeMobile}>Home</Link>
            {dropdown("/about/", "About", [
              ["/about/#overview", "Overview"],
              ["/history/", "History"],
              ["/about/#vision-mission", "Vision & Mission"],
              ["/about/#roadmap", "Roadmap 2021–2031"],
            ])}
            {dropdown("/workers/", "For Workers", [
              ["/workers/#overview", "Overview"],
              ["/workers/#services", "Services"],
              ["/workers/#how-to-get", "How to get help"],
              ["/workers/#benefits", "Benefits & scheme finder"],
            ])}
            {dropdown("/saathi/", "Become a Saathi", [
              ["/saathi/#benefits", "Saathi benefits"],
              ["/saathi/#calculator", "Earnings calculator"],
              ["/saathi/#stories", "Saathi stories"],
              ["/saathi/#apply", "Apply now"],
            ])}
            {dropdown("/business/", "Business", [
              ["/business/#how-we-help", "How we help"],
              ["/business/#solutions", "Solutions"],
              ["/business/#partners", "Partners & incubators"],
            ])}
            {dropdown("/team/", "Team", [
              ["/team/#directors", "Directors"],
              ["/team/#advisors", "Mentors & advisors"],
              ["/team/#our-team", "Our team"],
              ["/team/#careers", "Careers"],
            ])}
            <Link to="/contact/" activeClassName="on" onClick={closeMobile}>Contact</Link>
          </nav>

          <div className="cta">
            <button
              id="theme"
              type="button"
              className="iconbtn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title="Toggle colour mode"
            >
              <i className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"}`} aria-hidden="true" />
            </button>
            <a className="btn btn-ghost" href="https://dash.onlinesaathi.org/login" target="_blank" rel="noopener noreferrer"><i className="bx bx-log-in" aria-hidden="true" /> Login</a>
            <a className="btn btn-blue" href="https://play.google.com/store/search?q=online+saathi+app&c=apps&hl=en" target="_blank" rel="noopener noreferrer"><i className="bx bx-download" aria-hidden="true" /> Get the App</a>
            <button
              type="button"
              className="iconbtn burger"
              onClick={() => setMobileOpen(value => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu"}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile ${mobileOpen ? "open" : ""}`} aria-label="Mobile navigation">
        {mobileLinks.map(([href, label]) => (
          <Link key={href} to={href} activeClassName="on" onClick={closeMobile}>{label}</Link>
        ))}
        <a href="https://dash.onlinesaathi.org/login" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>Login</a>
      </nav>
    </div>
  )
}

export default Navbar
