export function LinkCard({ link }) {
  return (
    <a className={`link-card link-card-${link.tone}`} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
      <span className="link-icon" aria-hidden="true">{link.icon}</span>
      <span className="link-copy">
        <strong>{link.title}</strong>
        <small>{link.subtitle}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">↗</span>
    </a>
  )
}