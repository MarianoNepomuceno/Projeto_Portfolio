import SectionHeader from '../common/SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import { projectsSection, projects } from '../../data/projects';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
          id="projects-title"
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
