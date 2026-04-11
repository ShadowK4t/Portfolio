import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          I'm currently open to junior developer opportunities. 
          Whether you have a project in mind or just want to say hi, 
          my inbox is open.
        </p>
        <div className="contact-links">
          <a href="mailto:sarammudet@gmail.com" className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">sarammudet@gmail.com</span>
          </a>
          <a href="https://github.com/ShadowK4t" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/ShadowK4t</span>
          </a>
          <a href="https://www.linkedin.com/in/sara-mosquera-mayo-3173a12a0/" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/sara-mosquera</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;