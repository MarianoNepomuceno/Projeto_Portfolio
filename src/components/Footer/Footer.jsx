import { siteConfig } from '../../data/nav';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copyright">
          &copy; {currentYear} {siteConfig.copyright}
        </p>
        <p className="footer__credit">{siteConfig.credit}</p>
      </div>
    </footer>
  );
}

export default Footer;
