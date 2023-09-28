import "../../src/pages.css";
import Nav from "../components/Nav";
import instagram from "../assets/instagram-logo.svg";
import x from "../assets/twitter-logo.svg";
import linkedin from "../assets/linkedin-logo.svg";
import facebook from "../assets/facbook-logo.svg";
import footerstar from "../assets/smallstar.png";
import footerstar1 from "../assets/star.png";
import footerstar2 from "../assets/star-pu.png";
import footerstar3 from "../assets/star-pu.png";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    email:"",
    message:""
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://backend.getlinked.ai/hackathon/contact-form', // Replace with the actual API endpoint
        {
          email: formData.email,
          phone_number: formData.phoneNumber,
          first_name: formData.firstName,
          message: formData.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(response.data);
      setError(null);
      setFormData({
     firstName:"",
    email:"",
    message:""
      })
    } catch (error) {
      console.error(error);
      setResponse(null);
      setError(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



    
  
  return (
    <div className="body">
      <div className="container">
        <img src={footerstar} alt="" className="contact-star" />
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
          <div className="form">
            <h2 className="form-h2">
              Questions or need assistance? Let us know about it!
            </h2>

            <form className="form1-container" onSubmit={handleSubmit}>

              <input type="text" placeholder="First Name"  name="firstName" value={formData.firstName} onChange={handleChange} />


  <input type="email" placeholder="mail" name="email"  value={formData.email} onChange={handleChange}/>

   <textarea className="textarea" name="message" placeholder="Message" value={formData.message} onChange={handleChange}> </textarea>

   <button type="submit" className="submit-btn">Submit</button>
            </form>
  {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error.message}</div>}
          </div>
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
