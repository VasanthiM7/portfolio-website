import React from 'react';
import './Skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import sass from '../../assets/sass.png';
import react from '../../assets/react.png';
import node from '../../assets/node-js.png';
import npm from '../../assets/npm.png';
import git from '../../assets/git.png';
import api from '../../assets/api.png';

const Skills = () => {
  return (
    <div className='skill-container'>
      <div className='skills-grid'>
        <div className='skill-card'>
          <img src={html} alt='HTML' className='icon' />
          <label>HTML</label>
        </div>
        <div className='skill-card'>
          <img src={css} alt='CSS' className='icon' />
          <label>CSS</label>
        </div>
        <div className='skill-card'>
          <img src={js} alt='JavaScript' className='icon' />
          <label>JavaScript</label>
        </div>
        <div className='skill-card'>
          <img src={sass} alt='SASS' className='icon' />
          <label>SASS</label>
        </div>
        <div className='skill-card'>
          <img src={react} alt='React' className='icon' />
          <label>React</label>
        </div>
        <div className='skill-card'>
          <img src={node} alt='Node.js' className='icon' />
          <label>Node.js</label>
        </div>
        <div className='skill-card'>
          <img src={npm} alt='NPM' className='icon' />
          <label>NPM</label>
        </div>
        <div className='skill-card'>
          <img src={git} alt='Git' className='icon' />
          <label>GIT</label>
        </div>
        <div className='skill-card'>
          <img src={api} alt='API' className='icon' />
          <label>API</label>
        </div>
      </div>
    </div>
  );
};

export default Skills;
