import React, { useEffect, useRef } from "react"
import serviceStack from "./serviceStack"
import Layout from "../_App/layout"
import Navbar from "../_App/Navbar"
import Seo from "../_App/seo"
import homeHero from "../../data/new-web/hero.json"

// Every route backed by content/web-content is rendered only from its imported
// page content. Legacy React sections must not be added below the new design.

export default function NewWebsite({ content }) {
  const host = useRef(null)
  const mainContent = content.route === "/"
    ? `<div class="hero"><div class="wrap hero-grid"><div class="hero-copy">${homeHero.copy}</div><div class="hero-map">${homeHero.map}</div></div></div>${content.mainBody}`
    : content.mainBody
  const pageContent = `${mainContent}${content.footer || ""}`
  useEffect(() => {
    const node = host.current
    const stopStack = content.route === "/workers/" ? serviceStack(node) : () => {}
    if (!content.script) return stopStack
    const script = document.createElement("script")
    script.src = content.script
    script.async = false
    node.appendChild(script)
    return () => { stopStack(); node.disposeImportedContent?.(); script.remove() }
  }, [content.script, content.route])
  return <Layout>
    <Navbar />
    <div className="imported-content uploaded-sections" ref={host} dangerouslySetInnerHTML={{ __html: pageContent }} />
  </Layout>
}

export function NewWebsiteHead({ content }) {
  return <Seo title={content.title} description={content.description}>
    <link rel="canonical" href={`https://www.onlinesaathi.org${content.route}`} />
    <link rel="icon" href="/favicon.ico" />
  </Seo>
}
