import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projetos">Projetos</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}
