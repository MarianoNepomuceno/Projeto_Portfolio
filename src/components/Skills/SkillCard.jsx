import { skillIconMap } from '../../utils/iconMaps';
import './SkillCard.css';

function SkillCard({ skill }) {
  const Icon = skillIconMap[skill.icon];

  return (
    <div className="skill-card card">
      <div className="skill-card__icon" aria-hidden="true">
        {Icon && <Icon />}
      </div>
      <span className="skill-card__name">{skill.name}</span>
    </div>
  );
}

export default SkillCard;
