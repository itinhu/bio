import { Share2 } from 'lucide-react'
import { BrandIcon } from './components/BrandIcon'
import { LinkCard } from './components/LinkCard'
import { ProfileHeader } from './components/ProfileHeader'

const profile = {
  name: 'Ítalo Iran',
  role: 'Ciência da Computação • Tecnologia • Educação • Design',
  bio: 'Estudante de Ciência da Computação, professor e criador. Entre códigos, servidores e ideias, construo projetos que unem tecnologia, criatividade e educação.',
  avatar: 'https://avatars.githubusercontent.com/u/6899447?v=4',
}

const links = [
  {
    title: 'Instagram',
    subtitle: 'Projetos, rotina e bastidores',
    url: 'https://www.instagram.com/itinhu/',
    icon: <BrandIcon name="instagram" />,
    tone: 'coral',
  },
  {
    title: 'LinkedIn',
    subtitle: 'Experiência e conexões profissionais',
    url: 'https://www.linkedin.com/in/italoiran/',
    icon: <BrandIcon name="linkedin" />,
    tone: 'blue',
  },
  {
    title: 'GitHub',
    subtitle: 'Código, estudos e projetos',
    url: 'https://github.com/itinhu',
    icon: <BrandIcon name="github" />,
    tone: 'red',
  },
  {
    title: 'WhatsApp',
    subtitle: 'Fale comigo diretamente',
    url: 'https://wa.me/5588981673862',
    icon: <BrandIcon name="whatsapp" />,
    tone: 'pink',
  },
  {
    title: 'Meu Discord',
    subtitle: 'Comunidade e conversas',
    url: 'https://discord.gg/383836665812221953',
    icon: <BrandIcon name="discord" />,
    tone: 'violet',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <main className="bio-page">
        <ProfileHeader profile={profile} />
        <section className="links-section" aria-label="Links principais">
          <div className="section-heading">
            <span>Conecte-se comigo</span>
            <Share2 size={16} />
          </div>
          <div className="links-list">
            {links.map((link) => <LinkCard key={link.title} link={link} />)}
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} <span>•</span> Feito para criar coisas memoráveis</footer>
    </div>
  )
}