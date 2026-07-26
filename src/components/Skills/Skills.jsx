import SectionHeader from '../common/SectionHeader/SectionHeader';
import SkillCard from './SkillCard';
import { skillsSection, skills } from '../../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader title={skillsSection.title} subtitle={skillsSection.subtitle} id="skills-title" />

        <div className="skills__grid" role="list">
          {skills.map((skill) => (
            <div key={skill.id} role="listitem">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
