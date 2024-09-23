import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

function Resume() {
  return (
    <div className="resume-container">
      <Header />
      <div className="resume-content">
        <PersonalInfo />
        <Experience />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="resume-header">
      <h1>DANIEL MANARANG</h1>
      <h2>FUTURE SOFTWARE DEVELOPER</h2>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="personal-info">
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-section">
      <h1>CONTACT</h1>
      <p>
        manarangdaniel@gmail.com <FontAwesomeIcon icon={faEnvelope} /> <br />
        09303771375 <FontAwesomeIcon icon={faPhone} /> <br />
        Apalit, Pampanga, Philippines <FontAwesomeIcon icon={faLocationDot} /> <br />
        <a href="https://www.facebook.com/daniel.manarang" target="_blank" rel="noopener noreferrer">Facebook</a> <FontAwesomeIcon icon={faFacebook} /> <br />
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="education-section">
      <h1>EDUCATION</h1>
      <p>
        Bachelor of Science <br />
        Information Technology <br />
        University of the Assumption <br />
        2022 - Present <br />
        San Fernando, Pampanga
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-section">
      <h1>SKILLS</h1>
      <p>
        Python <br />
        Java <br />
        JavaScript <br />
      </p>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience-section">
      <h1>LEARNING EXPERIENCE</h1>
      <LearningExperience
        year="1st Year College"
        technologies="Python, Kivy, Tkinter"
        description="During my 1st Year, I was taught the basics and knowledge of programming. We learned Python basics, data types, operators, and control structures. We also created mobile games using Python."
      />
      <LearningExperience
        year="2nd Year College"
        technologies="MySQL, Java, JavaScript, HTML, CSS"
        description="During my 2nd Year, I learned the basics of MySQL, including database creation, input, and queries. We also covered Data Structures, Algorithms, and introductory JavaScript, HTML, and CSS."
      />
      <LearningExperience
        year="3rd Year College (Currently)"
        technologies="HTML, JavaScript, CSS, React, Bootstrap"
        description="Currently, I am deepening my knowledge of HTML, JavaScript, and CSS, while learning React to build adaptive, functional websites using Bootstrap for responsive design."
      />
    </div>
  );
}

function LearningExperience({ year, technologies, description }) {
  return (
    <div className="learning-experience">
      <h2>{year}</h2>
      <p>{technologies}</p>
      <ul>
        <li>{description}</li>
      </ul>
    </div>
  );
}
