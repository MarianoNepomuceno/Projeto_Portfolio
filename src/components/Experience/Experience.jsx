import SectionHeader from '../common/SectionHeader/SectionHeader';
import ExperienceCard from './ExperienceCard';
import { experienceSection, experiences } from '../../data/experience';

function Experience() {
  return (
    <section id="experience" className="experience section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          title={experienceSection.title}
          subtitle={experienceSection.subtitle}
          id="experience-title"
        />

        {experiences.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
