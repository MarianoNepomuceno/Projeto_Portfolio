import { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../../data/nav';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (hash) => {
    if (!hash.startsWith('#')) return;
    const target = document.querySelector(hash);
    if (!target) return;

    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 72;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 12;

    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState(null, '', hash);
  };

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegação principal">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo" onClick={(event) => handleLinkClick(event, '#home')} aria-label="Ir para o início">
          {siteConfig.logo}
        </a>

        <ul
          id="navbar-menu"
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={(event) => handleLinkClick(event, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
