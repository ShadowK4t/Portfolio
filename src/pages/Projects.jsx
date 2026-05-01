import { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "SquirrelStd",
    description: "A fullstack task management web app built for an active game development studio. Similar in concept to Jira — features task assignment, project tracking, and user roles.",
    stack: ["Next.js", "Node.js", "Express", "SQL"],
    github: "https://github.com/ShadowK4t/SquirrelStd",
    live: null,
  },
  {
    id: 2,
    title: "ParkSpot",
    description: "An Android app that helps users find available parking using real-time GPS and location services. Built with Jetpack Compose and SQLite for local data persistence.",
    stack: ["Kotlin", "Jetpack Compose", "GPS", "SQLite"],
    github: "https://github.com/DanielQ-BP/ParkSpot",
    live: null,
  },
  {
    id: 3,
    title: "Weather App",
    description: "A simple weather application that fetches real-time data from a public API and displays current conditions and forecasts.",
    stack: ["React", "REST API", "CSS"],
    github: "https://github.com/ShadowK4t/Simple_Weather_app-Practice",
    live: "https://simple-weather-app-practice.vercel.app/",
  },
];

function Projects() {
  const [popup, setPopup] = useState(null);

  function handleCardClick(project) {
    if (project.live) {
      setPopup(project);
    } else {
      window.open(project.github, '_blank');
    }
  }

  function closePopup() {
    setPopup(null);
  }

  return (
    <div className="projects">
      <div className="projects-content">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Things I've built</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleCardClick(project)}
            >
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>{tech}</span>
                ))}
              </div>
              <p className="project-link">
                {project.live ? "View Project →" : "View on GitHub →"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>{popup.title}</h3>
            <p>Where do you want to go?</p>
            <div className="popup-buttons">
              <a href={popup.github} target="_blank" rel="noreferrer" className="popup-btn">GitHub</a>
              <a href={popup.live} target="_blank" rel="noreferrer" className="popup-btn popup-btn-primary">Live Site</a>
            </div>
            <button className="popup-close" onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;