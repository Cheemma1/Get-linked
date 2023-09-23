import phone from '../assets/phone-logo.svg'
import location from '../assets/pin-logo.svg'
import instagram from '../assets/instagram-logo.svg'
import x from '../assets/twitter-logo.svg'
import linkedin from '../assets/linkedin-logo.svg'
import facebook from '../assets/facbook-logo.svg'
import footerstar from '../assets/smallstar.png'
import footerstar1 from '../assets/star.png'
import footerstar2 from '../assets/star-pu.png'
import footerstar3 from '../assets/smallstar.png'


const Footer = () => {
  return (
    <footer>
<img src={footerstar} alt=""  className='footer-star'/>
<img src={footerstar1} alt="" className='footer-star1' />
<img src={footerstar2} alt=""className='footer-star2' />
<img src={footerstar3} alt=""  className='footer-star3'/>

<div className='container'>
    <div className='footer-flex'>
<div>
<h1 className='logo'>get <span>Linked</span></h1> 
<p className='paragraph footer-para'> Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology</p> 
</div>
<div className='link'>
<div className='footer-link'>
   <h5>Useful Links</h5> 
   <ul>
    <li>Overview</li>
    <li>Timeline</li>
    <li>FAQs</li>
    <li>Register</li>
   </ul>
</div>
<div className='footer-link'> 
<h5>Contact Us</h5> 
   <ul>
    <li> <span><img src={phone} alt="phone-logo" /></span>+234 679 81819</li>
    <li> <span><img src={location} alt="location-logo" /></span>27,Alara Street Yaba 100012 Lagos State</li>
   </ul>
</div>
</div>

</div>
   
   <div className='footer-last'>
   
<p>Terms of Use | Privacy Policy</p>
   <p> Follow us <span className='img-span'> 
      <img src={instagram} alt="instagram-logo" />
      <img src={x} alt="twitter-logo" />
      <img src={facebook} alt="facebook-logo" />
      <img src={linkedin} alt="linkedin-logo" />
   </span></p> 
</div>

<p className='last-txt'>All rights reserved. © getlinked Ltd.</p>
</div>

    </footer>
  )
}

export default Footer