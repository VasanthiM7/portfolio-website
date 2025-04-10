import React from 'react'
import './Home.css';
import hireme from '../../assets/hireme.png';
import myimg from '../../assets/myimg.png';

const Home = () => {
  return (
    <section className='home-section'>

<img src={myimg} alt='img' className='image'></img>
    <div className='home-container'>
      <div className='text-container'>
      <h1 className='heading1'>Hello,</h1>
      <h2 className='heading2'>I'm Vasanthi</h2>
      <h2 className='title'>Frontend Developer</h2>
      <p className='description'>Crafting intuitive and responsive user interfaces with a passion for clean code and seamless user experiences.</p>
      <button className='hire-button'>
        <img src={hireme} alt='icon' className='button-icon'></img>Hire me</button>
    </div>
    
    </div>
   
    
    
    </section>

  )
}

export default Home;
