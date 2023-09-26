
import "../../src/pages.css";
import Nav from "../components/Nav";
import image1 from '../assets/3d-graphic-designer-showing-thumbs-up-png.png'
import img2 from '../assets/Group 10.png'
import footerstar from '../assets/smallstar.png'
import footerstar1 from '../assets/star.png'
import footerstar4 from '../assets/star.png'
import footerstar2 from '../assets/star-pu.png'
import footerstar3 from '../assets/star-pu.png'

const Register = () => {
  return (
    <div className="body2">
          <img src={footerstar} alt=""  className="reg-star"/>
        <img src={footerstar1} alt="" className="reg-star1" />
        <img src={footerstar4} alt="" className="reg-star4" />
        <img src={footerstar2} alt="" className="reg-star2" />
        <img src={footerstar3} alt="" className="reg-star3" />
    <div className="container">
<Nav/>  
<div className="reg-container">
  <div>
    <img src={image1} alt="3d-man"  className="first-img"/>
  </div>

<div className="form2" >
<h2 className="form-h2">Register</h2>
<p className="contact-para">Be part of this movement <span><img src={img2}alt="moving" /></span></p>
<h3>CREATE YOUR ACCOUNT</h3>
<form >
  <div className="form-container">
  <div>
<label htmlFor="">Team's Name </label>
<input type="text"  placeholder="Enter the name of your group"/></div>
  <div>
<label htmlFor="">Phone</label>
<input type="text"  placeholder="Enter your phone number"/></div>
  <div>
<label htmlFor="">Email</label>
<input type="email"  placeholder="Enter your email address"/></div>
  <div>
<label htmlFor="">Project Topic </label>
<input type="text"  placeholder="What is your group project topic"/></div>
  <div className="select-container">
<label htmlFor="">Category</label>
<select>
  <option value="category">Select your category</option>
  <option value="frontend">Frontend Development</option>
  <option value="backend">Backend Development</option>
  <option value="product">Product Design</option>
  </select>
  </div>
  <div className="select-container">
<label htmlFor="">Group Size</label>
<select>
  <option value="category">Select</option>
  <option value="frontend">0-5</option>
  <option value="backend">5-10</option>
  <option value="product">10-15</option>
  </select>
  </div>

    </div>

    <p className="last-p">Please review your registration details before submitting</p>
    <div className="check-flex">
    <input type="checkbox" name="" id="" className="check" /> 
    <p>I agreed with the event terms sand conditions  and privacy policy</p></div>
    <button className="submit-btn reg-btn">Register Now</button>
</form>

</div>
  
  </div>  
    </div>
    </div>
  )
}

export default Register