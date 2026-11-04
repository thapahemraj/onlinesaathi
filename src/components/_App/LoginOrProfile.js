import React, { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

// Signed out: the usual Login button. Signed in to Online Saathi in this browser: the person's photo and first name
// instead, and a click opens the Online Saathi home (dashboard). The web app only shares the name and photo with this
// site (never the login itself), through a hidden frame of its /docs-sso page.
const APP_ORIGIN = "https://dash.onlinesaathi.org"
const HOME_URL = `${APP_ORIGIN}/dashboard`
const LOGIN_URL = `${APP_ORIGIN}/login`
const CACHE_KEY = "os_site_profile"
const REFRESH_MS = 5 * 60 * 1000

const readCache = () => {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const LoginOrProfile = ({ onNavigate }) => {
  const [profile, setProfile] = useState(null)
  const [photoFailed, setPhotoFailed] = useState(false)
  const asking = useRef(false)

  const ask = useCallback(() => {
    if (asking.current) return
    asking.current = true
    const frame = document.createElement("iframe")
    frame.style.display = "none"
    frame.setAttribute("aria-hidden", "true")
    frame.src = `${APP_ORIGIN}/docs-sso?mode=silent&purpose=profile&origin=${encodeURIComponent(window.location.origin)}`
    document.body.appendChild(frame)
    window.setTimeout(() => {
      frame.remove()
      asking.current = false
    }, 8000)
  }, [])

  useEffect(() => {
    setProfile(readCache())
    const onMessage = event => {
      if (event.origin !== APP_ORIGIN) return
      if (event.data?.type === "os-site-profile") {
        const photo = /^(https:\/\/|data:image\/)/i.test(String(event.data.photo || "")) ? String(event.data.photo) : ""
        const next = { fullName: String(event.data.fullName || ""), photo }
        try { window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { /* ignore */ }
        window.dispatchEvent(new CustomEvent("os-site-profile-change"))
        setProfile(next)
        setPhotoFailed(false)
      } else if (event.data?.type === "os-site-profile-none") {
        try { window.sessionStorage.removeItem(CACHE_KEY) } catch { /* ignore */ }
        window.dispatchEvent(new CustomEvent("os-site-profile-change"))
        setProfile(null)
      }
    }
    const onBack = () => { if (document.visibilityState === "visible") ask() }
    window.addEventListener("message", onMessage)
    window.addEventListener("focus", onBack)
    document.addEventListener("visibilitychange", onBack)
    const timer = window.setInterval(ask, REFRESH_MS)
    ask()
    return () => {
      window.removeEventListener("message", onMessage)
      window.removeEventListener("focus", onBack)
      document.removeEventListener("visibilitychange", onBack)
      window.clearInterval(timer)
    }
  }, [ask])

  if (!profile) {
    return (
      <Link to={LOGIN_URL} target="_blank" onClick={onNavigate} className="default-btn">
        <i className="flaticon-right"></i> login <span></span>
      </Link>
    )
  }

  const firstName = profile.fullName.trim().split(/\s+/)[0] || "Account"
  return (
    <a
      href={HOME_URL}
      title={`${profile.fullName || firstName} · open Online Saathi home`}
      aria-label={`${firstName}, open Online Saathi home`}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "4px 16px 4px 4px", borderRadius: 999, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(15,23,42,.08)", color: "#0f172a", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
    >
      {profile.photo && !photoFailed ? (
        <img src={profile.photo} alt="" width="34" height="34" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover" }} onError={() => setPhotoFailed(true)} />
      ) : (
        <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
          {firstName.charAt(0).toUpperCase()}
        </span>
      )}
      <span style={{ maxWidth: 110, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{firstName}</span>
    </a>
  )
}

export default LoginOrProfile
