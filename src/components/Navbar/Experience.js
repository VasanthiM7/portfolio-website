import React from 'react';
import './Experience.css';

const experiences = [
  {
    client: "The Hanover Insurance, Worcester city, MA",
    duration: "Nov 2023 – Till Date",
    role: "UI React Developer",
    responsibilities: [
      "Designed and developed web pages using HTML5, CSS3, JavaScript, Bootstrap, SASS, LESS, React JS, Redux, and Node JS.",
      "Worked with UI/UX teams to define screen designs and developed responsive interfaces using React components and custom HTML tags.",
      "Built component libraries including Tree, Slide-View, and Table Grid with reusable UI logic.",
      "Utilized React Query and Axios for efficient API data handling and offline scenarios.",
      "Implemented unit and E2E tests using Mocha and Cypress.",
      "Worked with Node.js for backend tasks and MongoDB for database operations.",
      "Integrated REST APIs and implemented backend logic using Next.js API routes.",
      "Used Git, Bitbucket, and JIRA in an Agile environment."
    ],
    tech: "HTML5, CSS3, JavaScript, React.js, Redux, Node.js, MongoDB, Mocha, Cypress, Next.js, JIRA, Git, Bitbucket"
  },
  {
    client: "Edward Jones, Dallas, TX",
    duration: "Jan 2022 – April 2023",
    role: "UI React Developer",
    responsibilities: [
      "Developed SPAs using React, Redux, Flux, and React-Router.",
      "Managed responsive design and optimized frontend with Webpack, Excel-Builder, and GraphQL.",
      "Implemented drag-and-drop, Excel export, Firebase authentication, Zustand, Recoil and Core JS integration.",
      "Used AWS services like S3, Route 53, Amplify, and AppSync.",
      "Worked closely with offshore teams and handled Jenkins CI/CD pipelines."
    ],
    tech: "React.js, Redux, Flux, Webpack, Firebase, GraphQL, AWS, Jenkins, Zustand, Recoil"
  },
  {
    client: "Girnar Newtel Solutions Pvt Ltd, India",
    duration: "Sep 2018 - Dec 2021",
    role: "UI Developer",
    responsibilities: [
        "Collaborated with stakeholders to gather and define functional and system requirements.",
        "Designed and developed responsive UI pages using HTML5, CSS3, JavaScript, and Bootstrap.",
        "Created wireframes, mockups, and prototypes to bring ideas to life with a focus on UX and accessibility.",
        "Built rich, interactive applications using jQuery plugins, AJAX, and JSON data from APIs.",
        "Worked on Chrome Packaged Apps, including mini-games and widgets using modern web technologies.",
        "Implemented cross-browser compatible and SEO-friendly components.",
        "Developed and optimized layouts for both fixed-width and fluid designs using SASS and Bootstrap.",
        "Worked closely with backend developers to integrate APIs and dynamic content.",
        "Contributed to the complete redesign of a daily events site to enhance performance and readability."
    ],
    tech: "HTML5, CSS3, Sass, JavaScript, jQuery, Bootstrap, ReactJS, Angular 2, VueJS, JSON, XML, MySQL, REST API, AWS, GitHub, JIRA, Jasmine, Webstorm, Python"
  },
  {
    client: "Aakruthi Software Solutions Pvt Ltd, India",
    duration: "May 2017 - Aug 2018",
    role: "Web Developer",
    responsibilities: [
        "Collaborated in Agile/Scrum meetings for project planning and requirement analysis.",
        "Built interactive web applications using HTML, CSS, JavaScript, ReactJS, and Bootstrap.",
        "Followed clean coding practices and performed code reviews and build deployments.",
        "Integrated REST APIs using AJAX and handled data in JSON/XML formats.",
        "Ensured cross-browser compatibility and optimized for SEO.",
        "Wrote unit tests with Jasmine and used Firebug for debugging.",
        "Managed version control using Git and SVN, deployed code across multiple environments.",
        "Tracked tasks and issues via JIRA.",
    ],
    tech: "HTML, CSS, JavaScript, ReactJS, Bootstrap, Node.js, AJAX, JSON, XML, Git, SVN, JIRA, Jasmine, Jenkins"
  },

];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="experience-header">
            <h3 className="experience-client">{exp.client}</h3>
            <span className="experience-duration">{exp.duration}</span>
          </div>
          <h4 className="experience-role">{exp.role}</h4>
          <ul className="experience-list">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
          <p className="experience-tech"><strong>Tech Used:</strong> {exp.tech}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
