import React from 'react'
import Nav from './Nav'
import heroImg from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import vector from '../assets/Vector 4.svg'
import heroimg2 from '../assets/Image 1.png'

const Header = () => {
  return (
    <header>
<Nav/>
<div className=' container hero'> 

<div className='hero-txt'>
    <div className='text-one'>
<h1>getlinked Tech Hackathon <span className='span'>1.0</span> </h1></div>
<p className='hero-text1'>Participate in getlinked tech Hackathon 2023 stand 
a chance to win a Big prize</p>
<button className='nav-btn'>Register</button>
<div className='timer'>
<p>00<span>H</span> </p>
<p>00<span>M</span> </p>
<p>00<span>S</span> </p>



</div>
</div>
<div className='hero-right'> 
<div className='hero-text-right'>
<h2>Igniting a Revolution in HR Innovation</h2>
<img src={vector} alt="vector" className='image2' />
</div>
<div className='hero-image-container'>
<div>
<img src={heroImg} alt="hero-image"  className='image1'/>
<img src={heroimg2} alt=""  className='image3'/></div>
</div>
</div>
</div>
<div className='line'></div>
    </header>
    
  )
}

export default Header