import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <div className="project-card__body">
        <h3 className="project-card__title">{project.nome}</h3>
        <p className="project-card__description">{project.descricao}</p>

        <div className="project-card__tags">
          {project.tecnologias.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiGithub />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiExternalLink />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
