import './SectionHeader.css';

function SectionHeader({ title, subtitle, id }) {
  return (
    <header className="section-header">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
