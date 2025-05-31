import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`projects-container ${inView ? 'animate-slide-fade' : ''}`}
    >
      <div className="project-text">
        <h2>{project.title}</h2>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Hosted Link
        </a>
        <p>{project.description}</p>
      </div>

      <div className="project-image">
        <img src={project.image} alt={`${project.title} Screenshot`} />
      </div>
    </div>
  );
};

export default ProjectCard;
