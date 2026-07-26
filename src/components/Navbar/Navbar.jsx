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

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegação principal">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick} aria-label="Ir para o início">
          {siteConfig.logo}
        </a>

        <ul
          id="navbar-menu"
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
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
