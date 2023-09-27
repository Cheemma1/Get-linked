import React from 'react'
import logo from '../assets/Partner and Sponsors.png'
// import logo2 from '../assets/Liberty company logo white.png'
// import logo3 from '../assets/Winwise logo White colour 1.png'
// import logo4 from '../assets/wisper logo white.png'
// import logo5 from '../assets/Paybox.png'
// import logo6 from '../assets/Vuzual Plus.png'
// import line from '../assets/Line 17.png'


const Sponsors = () => {
  return (
    <>
    <div className='sponsor'>
    <div className='container sponsor-container'>
<div className='sponsor-txt'>
    <h2 className='heading'>Partners and Sponsors</h2>
    <p className='paragraph'>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
</div>

<div className='mirrow-container'>
  <img src={logo} alt="companies-logo"/>
  </div>
 </div>
 </div>
 <div className='line'></div>
 </>
  )
}

export default Sponsors