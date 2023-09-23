import React from 'react'
import logo from '../assets/Liberty company logo white colour.png'
import logo2 from '../assets/Liberty company logo white.png'
import logo3 from '../assets/Winwise logo White colour 1.png'
import logo4 from '../assets/wisper logo white.png'
import logo5 from '../assets/Paybox.png'
import logo6 from '../assets/Vuzual Plus.png'
import line from '../assets/Line 17.png'


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
    <div className='set-image'>
<img src={logo} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo2} alt="Liberty company logo" />
<img src={line} alt="" />
<img src={logo3} alt="Liberty company logo" />

</div>
<div className='horizontal'>
<div className='line-3'></div>
<div className='line-4'></div>
<div className='line-3'></div>
</div> 
<div className='set-image2'>

<img src={logo4} alt="Liberty company logo" className='company-logo' />
<img src={line} alt="" className='line-img' />
<img src={logo5} alt="Liberty company logo"  className='company-logo'/>
<img src={line} alt="" className='line-img2' />
<img src={logo6} alt="vizual logo"  className='company-logo'/>
</div>
</div>

 </div>
 </div>
 <div className='line'></div>
 </>
  )
}

export default Sponsors