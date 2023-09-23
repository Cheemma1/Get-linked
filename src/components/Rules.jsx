import React from 'react'
import image from '../assets/rules-img.png'

const Rules = () => {
  return (
    <div className='holder'>
    <div className='holder-rules'>
    <div className='container rules-container'>
<div>
    <h2 className='heading '> Rules and
<span className='span'> Guidelines</span></h2>
<p className='paragraph'> Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>
</div>

<div >
<img src={image} alt="image" className='rules-img' />
</div>
</div>
<div className='line'></div>
    </div>
    </div>
  )
}

export default Rules