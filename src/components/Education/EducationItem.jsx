import './EducationItem.css';

function EducationItem({ item, isLast }) {
  return (
    <div className="education-item">
      <div className="education-item__marker">
        <span className="education-item__dot" aria-hidden="true" />
        {!isLast && <span className="education-item__line" aria-hidden="true" />}
      </div>
      <article className="education-item__content card">
        <span className={`education-item__status education-item__status--${item.status}`}>
          {item.periodo}
        </span>
        <h3 className="education-item__title">{item.titulo}</h3>
        <p className="education-item__institution">{item.instituicao}</p>
      </article>
    </div>
  );
}

export default EducationItem;
