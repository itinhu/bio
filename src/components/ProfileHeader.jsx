import { Code2 } from 'lucide-react'

export function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <div className="avatar-wrap">
        <img src={profile.avatar} alt={profile.name} className="avatar" />
        <span className="avatar-badge" aria-hidden="true"><Code2 size={15} /></span>
      </div>
      <p className="eyebrow">Olá, eu sou</p>
      <h1>{profile.name}</h1>
      <p className="profile-role">{profile.role}</p>
      <p className="profile-bio">{profile.bio}</p>
    </header>
  )
}