import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333' }}>
      <ul
        style={{
          display: 'flex',
          gap: '1rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre" style={{ color: '#fff', textDecoration: 'none' }}>
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/skills" style={{ color: '#fff', textDecoration: 'none' }}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projetos" style={{ color: '#fff', textDecoration: 'none' }}>
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/contato" style={{ color: '#fff', textDecoration: 'none' }}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
