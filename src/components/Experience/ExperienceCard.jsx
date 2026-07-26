import { FiBriefcase } from 'react-icons/fi';
import './ExperienceCard.css';

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card card">
      <div className="experience-card__header">
        <div className="experience-card__icon" aria-hidden="true">
          <FiBriefcase />
        </div>
        <div>
          <h3 className="experience-card__role">{experience.cargo}</h3>
          <p className="experience-card__company">{experience.empresa}</p>
        </div>
      </div>

      <ul className="experience-card__highlights">
        {experience.destaques.map((item) => (
          <li key={item} className="experience-card__highlight">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
