import React, { useEffect, useRef } from "react"
import serviceStack from "./serviceStack"
import Layout from "../_App/layout"
import Navbar from "../_App/Navbar"
import Footer from "../_App/Footer"
import Seo from "../_App/seo"
import PageBanner from "../Common/PageBanner"
import OriginalHome from "../OriginalContent/Home"
import OriginalAbout from "../OriginalContent/About"
import OriginalTeam from "../OriginalContent/Team"
import OriginalContact from "../OriginalContent/Contact"

const originals = { "/": OriginalHome, "/about/": OriginalAbout, "/team/": OriginalTeam, "/contact/": OriginalContact }
const labels = { "/about/": "About Us", "/workers/": "For Workers", "/saathi/": "Become a Saathi", "/business/": "For Businesses", "/team/": "Our Team", "/contact/": "Contact" }

export default function NewWebsite({ content }) {
  const host = useRef(null)
  const OriginalContent = originals[content.route]
  useEffect(() => {
    const node = host.current
    const stopStack = content.route === "/workers/" ? serviceStack(node) : () => {}
    const script = document.createElement("script")
    script.src = content.script
    script.async = false
    node.appendChild(script)
    return () => { stopStack(); node.disposeImportedContent?.(); script.remove() }
  }, [content.script, content.route])
  return <Layout>
    <Navbar />
    {content.route !== "/" && <PageBanner pageTitle={labels[content.route]} homePageText="Home" homePageUrl="/" activePageText={labels[content.route]} />}
    {OriginalContent && <OriginalContent />}
    <div className="imported-content uploaded-sections" ref={host} dangerouslySetInnerHTML={{ __html: content.mainBody }} />
    <Footer />
  </Layout>
}

export function NewWebsiteHead({ content }) {
  return <Seo title={content.title} description={content.description}>
    <link rel="canonical" href={`https://www.onlinesaathi.org${content.route}`} />
    <link rel="icon" href="/favicon.ico" />
  </Seo>
}
