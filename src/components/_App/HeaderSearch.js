import React from "react"
import { Link, navigate } from "gatsby"

const pages = [
  ["Home", "/", "Online Saathi services, jobs and worker support"],
  ["For Workers", "/workers/", "Services, welfare schemes, banking and help near you"],
  ["Become a Saathi", "/saathi/", "Benefits, earnings calculator and application"],
  ["For Businesses", "/business/", "Hiring, solutions and partnerships"],
  ["About Us", "/about/", "Our story, vision, mission and roadmap"],
  ["Our History", "/history/", "Online Saathi milestones and journey"],
  ["Our Team", "/team/", "Directors, advisors, staff and careers"],
  ["Contact", "/contact/", "Phone, WhatsApp, email, addresses and enquiries"],
  ["Safe Jobs Connect", "/workers/#jobs", "Job discovery, resume, referrals and employment"],
  ["Social Welfare Schemes", "/workers/#schemes", "Government schemes, eligibility, pensions and insurance"],
  ["Micro ATM", "/workers/#atm", "AEPS, cash withdrawal and banking"],
  ["PAN Card Center", "/workers/#pan", "PAN applications, corrections and documents"],
  ["Travel & Bills", "/workers/#travel", "Tickets, bill payments and recharge"],
  ["Neo Banking & Remittance", "/workers/#remit", "Money transfer, Nepal remittance and accounts"],
  ["Privacy Policy", "/privacy-policy/", "Personal information and data protection"],
  ["Terms & Conditions", "/terms-condition/", "Platform terms and service conditions"],
  ["Refund Policy", "/refund-policy/", "Refunds, cancellations and payments"],
]

export default function HeaderSearch({ onClose }) {
  const [query, setQuery] = React.useState("")
  const input = React.useRef(null)
  React.useEffect(() => { input.current?.focus() }, [])
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const matches = words.length ? pages.filter(page => words.every(word => page.join(" ").toLowerCase().includes(word))) : pages.slice(0, 6)
  return <div id="site-search-panel" className="header-search-panel" onKeyDown={event => { if (event.key === "Escape") onClose() }}>
    <div className="container">
      <form role="search" aria-label="Search website" onSubmit={event => { event.preventDefault(); if (matches[0]) { onClose(); navigate(matches[0][1]) } }}>
        <label className="visually-hidden" htmlFor="site-search-input">Search pages and services</label>
        <i className="bx bx-search" aria-hidden="true" />
        <input ref={input} id="site-search-input" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search pages, services, jobs…" autoComplete="off" />
        <button type="button" className="header-search-close" onClick={onClose} aria-label="Close search"><i className="bx bx-x" aria-hidden="true" /></button>
      </form>
      <div className="header-search-results" aria-live="polite">
        <p>{words.length ? `${matches.length} results` : "Explore pages"}</p>
        {matches.length ? <ul>{matches.map(([title, url, description]) => <li key={url}><Link to={url} onClick={onClose}><strong>{title}</strong><span>{description}</span></Link></li>)}</ul> : <p>No pages found. Try “jobs”, “Saathi” or “contact”.</p>}
      </div>
    </div>
  </div>
}
