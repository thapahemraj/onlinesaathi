import React, { useEffect, useRef } from "react"
import gsap from "gsap"

import partner1 from "../../images/partner/image 1.png"
import partner2 from "../../images/partner/image 2.png"
import partner3 from "../../images/partner/image 3.png"
import partner4 from "../../images/partner/image 4.png"
import partner5 from "../../images/partner/image 5.png"
import partner6 from "../../images/partner/image 6.png"

const Partner = () => {
  const trackRef = useRef(null)

  const partners = [
    { name: "Prabhu Money Transfer", image: partner1 },
    { name: "eKO", image: partner2 },
    { name: "IME", image: partner3 },
    { name: "Partner 4", image: partner4 },
    { name: "Partner 5", image: partner5 },
    { name: "Partner 6", image: partner6 },
  ]

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    const items = [...track.children]

    const firstSet = items[0]

    const firstSetWidth = firstSet?.offsetWidth ?? 0

    if (!firstSetWidth) return

    const animation = gsap.fromTo(
      track,
      { x: -firstSetWidth },
      {
        x: 0,
        duration: 35,
        ease: "none",
        repeat: -1,

        onRepeat: () => {
          gsap.set(track, {
            x: -firstSetWidth,
          })
        },
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <span className="partners-eyebrow">Our Partners</span>

          <h2 className="partners-title">Trusted by leading companies</h2>
        </div>

        <div className="partners-viewport">
          <div className="partners-track-box">
            <div ref={trackRef} className="partners-track">
              <div className="partners-slide-set">
                {partners.map((partner, index) => (
                  <div key={`first-${index}`} className="partners-slide">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="partners-logo"
                    />
                  </div>
                ))}
              </div>

              <div className="partners-slide-set">
                {partners.map((partner, index) => (
                  <div key={`second-${index}`} className="partners-slide">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="partners-logo"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div aria-hidden="true" className="partners-fade-left" />

            <div aria-hidden="true" className="partners-fade-right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner
