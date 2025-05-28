import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projetos">Projetos</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}