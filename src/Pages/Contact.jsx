import "../../src/pages.css";
import Nav from "../components/Nav";
import instagram from '../assets/instagram-logo.svg'
import x from '../assets/twitter-logo.svg'
import linkedin from '../assets/linkedin-logo.svg'
import facebook from '../assets/facbook-logo.svg'
import footerstar from '../assets/smallstar.png'
import footerstar1 from '../assets/star.png'
import footerstar2 from '../assets/star-pu.png'
import footerstar3 from '../assets/star-pu.png'

const Contact = () => {
  return (
    <div className="body">
      <div className="container">
        <img src={footerstar} alt=""  className="contact-star"/>
        <img src={footerstar1} alt="" className="contact-star1" />
        <img src={footerstar2} alt="" className="contact-star2" />
        <img src={footerstar3} alt="" className="contact-star3" />
        <Nav />
        <div className="contact-container">
          <div className="contact-txt">
            <h2>Get in touch</h2>
            <p className="contact-para">Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p className="contact-para">Call Us : 07067981819</p>
            <p>we are open from Monday-Friday</p>
            <span> 08:00am - 05:00pm</span>
            <h4>Share on</h4>
            <div className="images">
<img src={instagram} alt="instagram-logo" />
<img src={x} alt="twitter-logo" />
<img src={facebook} alt="facebook-logo" />
<img src={linkedin} alt="linkedin-logo" />
            </div>
          </div>
          <div className="mob-heading">
        <h2 className="form-h2-mob">Questions or need assistance? <br /> Let us know  about it!</h2>
        <p className="contact-para">Email us below to any question related 
to our event</p></div>
        <form >
<h2 className="form-h2">Questions or need assistance? Let us know  about it!</h2>
<input type="text" placeholder="First Name" />
<input type="email" placeholder="mail" />
<input type="text" placeholder="Message" className="message" />
<button className="submit-btn">Submit</button>
        </form>
        </div>
        <div className="contact-last">
        <h4>Share on</h4>
            <div className="images">
<img src={instagram} alt="instagram-logo" />
<img src={x} alt="twitter-logo" />
<img src={facebook} alt="facebook-logo" />
<img src={linkedin} alt="linkedin-logo" />
            </div>
            </div>
      </div>
    </div>
  );
};

export default Contact;
