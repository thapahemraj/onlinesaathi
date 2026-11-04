import React, { useEffect, useState } from "react"

// Live job openings from Online Saathi (public, read-only list), and - when the visitor is signed in to
// Online Saathi in this browser - a small strip with their photo and name, "My profile" and "My applications".
const API_URL = (process.env.GATSBY_API_URL || "https://apiv3.onlinesaathi.org/api").replace(/\/$/, "")
const APP = "https://dash.onlinesaathi.org"
const PROFILE_KEY = "os_site_profile"

const readProfile = () => {
  try {
    const raw = window.sessionStorage.getItem(PROFILE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const chip = { display: "inline-block", padding: "2px 10px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontSize: 12, fontWeight: 600, marginRight: 6, marginBottom: 6 }

const ProfileStrip = ({ profile }) => {
  const firstName = profile.fullName.trim().split(/\s+/)[0] || "there"
  const link = { display: "inline-block", padding: "8px 16px", borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: "none" }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, padding: "12px 16px", marginBottom: 28, borderRadius: 12, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(15,23,42,.06)" }}>
      {profile.photo ? (
        <img src={profile.photo} alt="" width="46" height="46" style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover" }} />
      ) : (
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
          {firstName.charAt(0).toUpperCase()}
        </span>
      )}
      <div style={{ flex: "1 1 160px" }}>
        <strong style={{ display: "block", fontSize: 16 }}>Hi, {firstName}</strong>
        <small style={{ color: "#64748b" }}>You are signed in to Online Saathi</small>
      </div>
      <a href={`${APP}/dashboard/my-profile`} style={{ ...link, background: "#2563eb", color: "#fff" }}>My profile</a>
      <a href={`${APP}/dashboard/applications`} style={{ ...link, border: "1px solid #cbd5e1", color: "#0f172a" }}>My applications</a>
    </div>
  )
}

const formatDate = value => {
  if (!value) return ""
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
}

const LatestJobs = () => {
  const [jobs, setJobs] = useState(null) // null = loading, [] = none / failed
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_URL}/public/jobs?limit=6`)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error("bad status"))))
      .then(body => { if (!cancelled) setJobs(Array.isArray(body?.data?.jobs) ? body.data.jobs : []) })
      .catch(() => { if (!cancelled) setJobs([]) })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const sync = () => setProfile(readProfile())
    sync()
    window.addEventListener("os-site-profile-change", sync)
    return () => window.removeEventListener("os-site-profile-change", sync)
  }, [])

  // Nothing to show (still loading, none open, or the list could not be fetched): no empty section on the home page.
  if (!jobs || jobs.length === 0) return null

  return (
    <section className="pt-100 pb-70" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: "center", marginBottom: 30 }}>
          <span className="sub-title">Latest jobs</span>
          <h2>Openings on Online Saathi</h2>
        </div>
        {profile ? <ProfileStrip profile={profile} /> : null}
        <div className="row">
          {jobs.map(job => (
            <div className="col-lg-4 col-md-6" key={job.id} style={{ marginBottom: 24 }}>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: 20, borderRadius: 12, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(15,23,42,.06)" }}>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>{job.title}</h3>
                <p style={{ margin: "0 0 10px", color: "#475569", fontWeight: 600 }}>{job.companyName}{job.location ? ` · ${job.location}` : ""}</p>
                <div style={{ marginBottom: 6 }}>
                  {[job.jobType, job.workMode, job.category].filter(Boolean).map(label => <span key={label} style={chip}>{label}</span>)}
                </div>
                {job.summary ? <p style={{ color: "#64748b", fontSize: 14, flex: 1 }}>{job.summary}</p> : <div style={{ flex: 1 }} />}
                <p style={{ margin: "8px 0", fontSize: 14 }}>
                  {job.salary ? <strong>{job.salary}</strong> : null}
                  {job.salary && job.experience ? " · " : ""}
                  {job.experience ? `${job.experience} experience` : ""}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <small style={{ color: "#94a3b8" }}>{job.lastDate ? `Apply by ${formatDate(job.lastDate)}` : `Posted ${formatDate(job.postedAt)}`}</small>
                  <a href={`${APP}/dashboard/jobs`} target="_blank" rel="noreferrer" style={{ padding: "8px 16px", borderRadius: 6, background: "#2563eb", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Apply</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <a href={`${APP}/dashboard/jobs`} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "#2563eb" }}>View all jobs →</a>
        </div>
      </div>
    </section>
  )
}

export default LatestJobs
