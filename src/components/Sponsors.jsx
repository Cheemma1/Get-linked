import React from 'react'
import logo from '../assets/Liberty company logo white colour.png'
import line from '../assets/Line 17.png'
import line2 from '../assets/Line 18.png'

const Sponsors = () => {
  return (
    <div className='container sponsor-container'>
<div className='sponsor-txt'>
    <h2 className='heading'>Partners and Sponsors</h2>
    <p className='paragraph'>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
</div>

<div className='mirrow-container'>
    <div className='set-image'>
<img src={logo} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo} alt="Liberty company logo" />

</div>
<div className='horizontal'>
{/* <img src={line2} alt="" />
<img src={line2} alt="" />
<img src={line2} alt="" /> */}
<div className='line-3'></div>
<div className='line-3'></div>
<div className='line-3'></div>
</div> 
<div className='set-image2'>

<img src={logo} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo} alt="Liberty company logo" />

</div>
</div>

 </div>

  )
}

export default Sponsors