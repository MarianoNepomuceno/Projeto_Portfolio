import { useState } from 'react';
import { FiGithub, FiLinkedin, FiDownload, FiX } from 'react-icons/fi';
import { hero } from '../../data/hero';
import { contactItems } from '../../data/contact';
import './Hero.css';

function Hero() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const githubLink = contactItems.find((item) => item.id === 'github');
  const linkedinLink = contactItems.find((item) => item.id === 'linkedin');

  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 id="hero-title" className="hero__name">
            {hero.name}
          </h1>
          <h2 className="hero__title">
            Desenvolvedor{' '}
            <span className="hero__title-highlight">{hero.titleHighlight}</span> em Formação
          </h2>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a href={hero.actions.projects.href} className="btn btn-primary">
              {hero.actions.projects.label}
            </a>
            <a
              href={hero.resumePath}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload aria-hidden="true" />
              {hero.actions.resume.label}
            </a>
          </div>

          <div className="hero__social">
            {githubLink && (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            )}
          </div>
        </div>

        <div className="hero__visual">
          <button
            type="button"
            className="hero__avatar"
            onClick={() => setIsImageOpen(true)}
            aria-label="Ampliar foto de Mariano Nepomuceno"
          >
            <img src="/images/eu-projeto.png" alt="Mariano Nepomuceno" loading="lazy" />
          </button>
        </div>
      </div>

      {isImageOpen && (
        <div className="hero__image-modal" role="dialog" aria-modal="true" aria-label="Foto ampliada">
          <button
            type="button"
            className="hero__image-modal-close"
            onClick={() => setIsImageOpen(false)}
            aria-label="Fechar imagem ampliada"
          >
            <FiX />
          </button>
          <img src="/images/eu-projeto.png" alt="Mariano Nepomuceno ampliado" />
        </div>
      )}
    </section>
  );
}

export default Hero;
