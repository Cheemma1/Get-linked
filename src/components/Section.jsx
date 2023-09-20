import React from 'react'
import introimage from '../assets/the big idea 1.png'
import star from '../assets/star pu.png'
import star1 from '../assets/sata gra.png'
import arrow from '../assets/arrow.png'

const Section = () => {
  return (
    <>
    <section className=' container intro-section'>
<img src={arrow} alt="arrow"  className='arrow'/>
<img src={star} alt="arrow"  className='star'/>
<img src={star1} alt="arrow"  className='star1'/>

    <div className='intro-img-container'>
       <img src={introimage} alt="the-big-idea"  className='intro-img'/> 
    </div>
    <div className='intro-right'>
        <h2 className='heading'>Introduction to getlinked
    <span className='span'> tech Hackathon 1.0</span></h2>
    <p className='paragraph'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!</p>
    </div>
      </section>
      <div className='line'></div>
      </>
  )
}

export default Section