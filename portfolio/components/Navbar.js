import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link href="/Sobre" style={{ color: '#fff', textDecoration: 'none' }}>Sobre</Link></li>
        <li><Link href="/Skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</Link></li>
        <li><link href="/Projetos" style={{ color: '#fff', textDecoration: 'none' }}>Projetos</Link></li>
        <li><Link href="/Contato" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link></li>
      </ul>
    </nav>
  );
}
