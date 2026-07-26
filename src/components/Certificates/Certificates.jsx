import SectionHeader from '../common/SectionHeader/SectionHeader';
import CertificateCard from './CertificateCard';
import { certificatesSection, certificates } from '../../data/certificates';
import './Certificates.css';

function Certificates() {
  return (
    <section id="certificates" className="certificates section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeader
          title={certificatesSection.title}
          subtitle={certificatesSection.subtitle}
          id="certificates-title"
        />

        <div className="certificates__grid">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
