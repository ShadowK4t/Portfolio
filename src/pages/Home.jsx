import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p  className="home-greeting">Hi, I'm</p>
        <h1 className="home-name">Sara, Mosquera Mayo</h1>
        <h2 className="home-title">Junior Fullstack Developer</h2>
        <p className="home-description">
          I build web and mobile applications. Currently working on 
          projects for a game development studio while finishing 
          my Computer Programming diploma at George Brown College.
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <Link to="/contact" className="btn-secondary">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;