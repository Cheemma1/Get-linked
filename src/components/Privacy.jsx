import React from 'react'
import image from '../assets/Group 9.png'
import list from '../assets/list terms.svg'

const Privacy = () => {
  return (
    <>
    <div className='holder-last'>
    <div className='container privacy-container'>
<div className='privacy-txt'>
<h2 className='heading'>Privacy Policy and 
 <span className='span'> Terms </span></h2>
 <p className='para3'>Last updated on September 12, 2023</p>
 <p className='para3'>Below are our privacy & policy, which outline a lot of goodies. 
it’s our aim to always take of our participant</p>


<div className='privacy-mirrow'>
<p>At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>
<h3>Licensing Policy</h3>
<h4>Here are terms of our Standard License:</h4>
<ul>
 <li> <img src={list} alt="check" />The Standard License grants you a non-exclusive right to
navigate and register for our event</li>   
<li> <img src={list} alt="check" />You are licensed to use the item available at any free source
sites, for your project developement</li>
</ul>
<button className='nav-btn privacy-btn'>Read More</button>
</div>
</div>
<div className='img-container'> 
    <img src={image} alt="privacy-image" />
</div>
    </div>
    </div>

    </>
  )
}

export default Privacy