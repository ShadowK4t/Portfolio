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
    description: "An Android app that helps users post and find available parking using real-time GPS and location services. Built in Android Studio",
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
  }
];

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-content'>
        <h1 className='projects-title'>Projects</h1>
        <p className='projects-subtitle'>Things I've built</p>
        <div className='projects-grid'>

          {projects.map((project) => (
            <div className='project-card' key={project.id}>
              <h3 className='project-name'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <div className='project-stack'>
                {project.stack.map((tech) => (
                  <span className='stack-tag' key={tech}>{tech}</span>
                ))}
              </div>
              <div className='projects-links'>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub</a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live</a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}

export default Projects;