
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard'; 

const projectData = [
  {
    title: 'Trading Website',
    link: 'https://tresmind-sol-test-ij87.vercel.app/',
    description:
      'A responsive trading platform with live charts, real-time pricing, and secure login built using Next.js, WebSockets, and Tailwind CSS.',
    image: '/assets/project_1.png',
  },
  {
    title: 'Software House Website',
    link: 'https://quick-web-hub.vercel.app/',
    description:
      'Official website of our software house, showcasing our services, portfolio, and team using React, Framer Motion, and modern UI design.',
    image: '/assets/project_2.png',
  },
  {
    title: 'Burger Point Website',
    link: 'https://tastyburger63.web.app/',
    description:
      'A fast-food website for a burger restaurant featuring an interactive menu, contact section, and order system, made with React and Firebase.',
    image: '/assets/project_3.png',
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-heading">
        <h1>My Projects & Practice — Just See It!</h1>
        <p>
          Explore a few creations that reflect my learning, practice, and passion for building web experiences.
        </p>
      </div>

      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
