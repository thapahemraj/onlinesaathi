// Native sticky positioning keeps content scrollable; transforms add depth as
// the following service card covers the preceding one.
export default function serviceStack(root) {
  const cards = [...root.querySelectorAll('.svc')]
  if (cards.length < 2) return () => {}
  const group = cards[0].parentElement
  if (!cards.every(card => card.parentElement === group)) return () => {}
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  let needsLayout = true
  group.classList.add('service-stack')
  cards.forEach((card, index) => {
    card.classList.add('service-stack-card')
    card.style.setProperty('--stack-index', index)
  })
  const paint = () => {
    frame = 0
    if (needsLayout) {
      const header = document.getElementById('navbar')
      const top = Math.max(84, header?.getBoundingClientRect().height || 0) + 20
      const available = window.innerHeight - top - cards.length * 9 - 24
      cards.forEach((card, index) => {
        card.style.setProperty('--stack-top', `${top + index * 9}px`)
        card.classList.toggle('is-stackable', !reduced.matches && card.offsetHeight <= available)
      })
      needsLayout = false
    }
    cards.forEach((card, index) => {
      const next = cards[index + 1]
      const rect = card.getBoundingClientRect()
      const top = parseFloat(card.style.getPropertyValue('--stack-top'))
      const overlap = next ? Math.max(0, Math.min(1, (top + rect.height - next.getBoundingClientRect().top) / Math.max(rect.height, 1))) : 0
      card.style.setProperty('--stack-scale', card.classList.contains('is-stackable') ? 1 - overlap * 0.035 : 1)
    })
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(paint) }
  const layout = () => { needsLayout = true; schedule() }
  const observer = new ResizeObserver(layout)
  cards.forEach(card => observer.observe(card))
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', layout)
  reduced.addEventListener('change', layout)
  paint()
  return () => {
    cancelAnimationFrame(frame)
    observer.disconnect()
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', layout)
    reduced.removeEventListener('change', layout)
    group.classList.remove('service-stack')
    cards.forEach(card => {
      card.classList.remove('service-stack-card', 'is-stackable')
      ;['--stack-index', '--stack-top', '--stack-scale'].forEach(name => card.style.removeProperty(name))
    })
  }
}
