import SectionHeader from '../common/SectionHeader/SectionHeader';
import AboutParagraph from './AboutParagraph';
import { aboutSection, aboutParagraphs } from '../../data/about';
import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader title={aboutSection.title} subtitle={aboutSection.subtitle} id="about-title" />

        <div className="about__content card">
          {aboutParagraphs.map((paragraph) => (
            <AboutParagraph key={paragraph.id} paragraph={paragraph} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
