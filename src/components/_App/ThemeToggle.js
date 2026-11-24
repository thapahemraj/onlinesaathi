import React from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState("light")
  React.useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    let saved
    try { saved = localStorage.getItem("os-theme") } catch (_) {}
    const apply = value => { root.dataset.theme = value; setTheme(value) }
    apply(saved === "dark" || saved === "light" ? saved : media.matches ? "dark" : "light")
    const changed = event => { try { if (localStorage.getItem("os-theme")) return } catch (_) {} apply(event.matches ? "dark" : "light") }
    media.addEventListener("change", changed)
    return () => media.removeEventListener("change", changed)
  }, [])
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem("os-theme", next) } catch (_) {}
  }
  return <button type="button" className="site-theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"}>
    <i className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"}`} aria-hidden="true" />
  </button>
}
