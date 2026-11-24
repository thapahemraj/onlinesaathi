import React from "react"
import hero from "../../data/new-web/hero.json"

export default function Banner() {
  const root = React.useRef(null)
  React.useEffect(() => {
    const timers = []
    root.current.querySelectorAll('.rot[data-words]').forEach(node => {
      const words = node.dataset.words.split('|')
      let index = 0
      timers.push(setInterval(() => { index = (index + 1) % words.length; node.textContent = words[index] }, 2600))
    })
    root.current.querySelectorAll('[data-count]').forEach(node => {
      node.textContent = (node.dataset.pre || '') + Number(node.dataset.count).toLocaleString('en-IN') + (node.dataset.suf || '')
    })
    return () => timers.forEach(clearInterval)
  }, [])
  const copy = hero.copy.replace(/class="btn btn-blue"/g, 'class="default-btn"').replace(/class="btn btn-green"/g, 'class="default-btn hero-secondary"')
  return <div className="it-services-banner overflow-hidden" ref={root}>
    <div className="container"><div className="row align-items-center">
      <div className="col-lg-6 col-md-12"><div className="main-banner-content hero-copy" dangerouslySetInnerHTML={{__html:copy}} /></div>
      <div className="col-lg-6 col-md-12"><div className="main-banner-image imported-content hero-map" dangerouslySetInnerHTML={{__html:hero.map}} /></div>
    </div></div>
  </div>
}
