import '../styles/About.css';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "Kotlin", "Java",
  "SQL", "Git", "Android", "Python"
];

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a junior fullstack developer in my final year of a Computer Programming diploma at George Brown College, 
              graduating April 2026.
            </p>
            <p>
              I'm currently building SquirrelStd, a task management web app for an active game development studio and 
              ParkSpot, a GPS-based Android app.
            </p>
            <p>
              I work best when I can focus deeply on a problem and see it through. I pick things up fast once I get 
              hands-on, and I've spent three years balancing 
              full-time studies with part-time work.
            </p>
            <p>
              Based in Woodbridge, ON. Open to junior developer 
              opportunities in Toronto.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;