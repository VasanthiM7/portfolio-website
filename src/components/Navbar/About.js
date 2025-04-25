import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          Frontend Developer with 7+ years of experience designing and building responsive, scalable, and accessible web applications using modern frontend technologies. Proven expertise in developing intuitive UI components, optimizing performance, and collaborating with cross-functional teams to deliver high-quality digital experiences.
        </p>
        <p className="about-text">
          Successfully contributed to large-scale projects at organizations like Hanover Insurance, Edward Jones, Girnar Newtel Solutions, and Aakruti Software Solutions with a strong focus on UI/UX development using React, Redux, JavaScript, and Material UI.
        </p>
        <p className="about-text">
          Outside of work, I’m passionate about chess, art, and mentoring young learners — bringing creativity, strategy, and empathy into both my professional and personal life.
        </p>

        <h3 className="about-subheading">Education</h3>
        <div className="education-container">
          <div className="education-item">
            
            <div className="edu-content">
              <h4 className="edu-degree">Bachelor's in Commerce and Computer Applications</h4>
              <p className="edu-institution">The Sri Venkateswara University &nbsp;|&nbsp; 2016 – 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
