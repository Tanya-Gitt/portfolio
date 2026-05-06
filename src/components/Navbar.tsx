import { useEffect, useState } from 'react';
import { personal } from '../data';
import './styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">T<span>.</span>Sharma</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href} data-hover>{l.label}</a></li>
        ))}
      </ul>
      <a href={`mailto:${personal.email}`} data-hover>
        <button className="nav-cta">Hire Me</button>
      </a>
    </nav>
  );
}
