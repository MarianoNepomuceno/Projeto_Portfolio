import { FiEye } from 'react-icons/fi';
import { categoryIconMap, categorySlugMap } from '../../utils/iconMaps';
import './CertificateCard.css';

function CertificateCard({ certificate }) {
  const CategoryIcon = categoryIconMap[certificate.categoria];
  const categorySlug = categorySlugMap[certificate.categoria] || 'default';

  return (
    <article className="certificate-card card">
      <div className="certificate-card__top">
        <div
          className={`certificate-card__icon certificate-card__icon--${categorySlug}`}
          aria-hidden="true"
        >
          {CategoryIcon && <CategoryIcon />}
        </div>
        <span className={`certificate-card__category certificate-card__category--${categorySlug}`}>
          {certificate.categoria}
        </span>
      </div>

      <div className="certificate-card__body">
        <h3 className="certificate-card__title">{certificate.nome}</h3>
        <p className="certificate-card__institution">{certificate.instituicao}</p>

        <div className="certificate-card__meta">
          <span>{certificate.cargaHoraria}</span>
          <span className="certificate-card__meta-divider" aria-hidden="true">
            •
          </span>
          <span>{certificate.ano}</span>
        </div>

        <p className="certificate-card__description">{certificate.descricao}</p>
      </div>

      <div className="certificate-card__actions">
        <a
          href={certificate.arquivoPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary certificate-card__btn"
          aria-label={`Visualizar certificado: ${certificate.nome}`}
        >
          <FiEye aria-hidden="true" />
          Visualizar Certificado
        </a>
      </div>
    </article>
  );
}

export default CertificateCard;
