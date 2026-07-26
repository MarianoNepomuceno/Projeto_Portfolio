import SectionHeader from '../common/SectionHeader/SectionHeader';
import EducationItem from './EducationItem';
import { educationSection, education } from '../../data/education';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          title={educationSection.title}
          subtitle={educationSection.subtitle}
          id="education-title"
        />

        <div className="education__timeline">
          {education.map((item, index) => (
            <EducationItem
              key={item.id}
              item={item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
