
import "../../src/pages.css";
import Nav from "../components/Nav";
import image1 from '../assets/3d-graphic-designer-showing-thumbs-up-png.png'
import img2 from '../assets/Group 10.png'
import footerstar from '../assets/smallstar.png'
import footerstar1 from '../assets/star.png'
import footerstar4 from '../assets/star.png'
import footerstar2 from '../assets/star-pu.png'
import footerstar3 from '../assets/star-pu.png'
import congrats from '../assets/congratulation (1).png'
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {

  const [register, setRegister] = useState({
    name: "",
   phone_number : "",
    email: "",
    topic: "",
    category: "",
  size: "",
  check:false
  })
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([])

 const handleReg= async (e)=>{
e.preventDefault();

try {
  if (!register.name || !register.num || !register.email || !register.topic || !register.category || !register.size) {
    setError(new Error('Please fill in all required fields.'));
    return;
  }
  const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', {
    email: register.email,
    phone_number: register.num, // Use the correct field name
    team_name: register.name,
    group_size: register.size,
    project_topic: register.topic,
    category: register.category,
    privacy_policy_accepted: register.check,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

console.log("Form Inputs:", register); // Log the inputs
console.log("API Response:", response.data);

setResponse(response.data);
setError(null);
setRegister({
  name: "",
  num: "",
  email: "",
  topic: "",
  category: "",
size: "",
check:false
})
} 

catch (error)
  {
    console.error(error);
    setResponse(null);
    setError(error);
  }
  
 }
 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  const newValue = type === 'checkbox' ? checked : value;

  setRegister({ ...register, [name]: newValue });
};


useEffect(() => {
  // Fetch categories when the component mounts
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://backend.getlinked.ai/hackathon/categories-list'
      );

      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  fetchCategories();
}, []);



  return (
    <div   className="body2" style={{
      backgroundColor:
        displayedCategory === "month" ? "#0d0d0d" : "#097fd9",
      color: "white",
    }}  >
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
<form  onSubmit={handleReg}>
  <div className="form-container">
  <div>
<label htmlFor="">Team's Name </label>
<input type="text"  placeholder="Enter the name of your group" name="name"  value={register.name} onChange={handleChange}/></div>
  <div>
<label htmlFor="">Phone</label>
<input type="text"  placeholder="Enter your phone number" name="num" value={register.num}  onChange={handleChange}/></div>
  <div>
<label htmlFor="">Email</label>
<input type="email"  placeholder="Enter your email address" name="email" value={register.email} onChange={handleChange}/></div>
  <div>
<label htmlFor="">Project Topic </label>
<input type="text"  placeholder="What is your group project topic" name="topic" value={register.topic}  onChange={handleChange}/></div>

  <div className="select-container">
          <label htmlFor="">Category</label>
          <select
            name="category"
            value={register.category} 
            onChange={handleChange}
          >
            <option value="">Select your category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

  </div>
  <div className="select-container">
<label htmlFor="">Group Size</label>
<select name="size" value={register.size}  onChange={handleChange}>
  <option value="0">Select</option>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="15">15</option>
  </select>
  </div>
  </div>
    

    <p className="last-p">Please review your registration details before submitting</p>
    <div className="check-flex">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="check"
            checked={register.check}
            onChange={handleChange}
          />
          <label htmlFor="check">
            I agree with the event terms and conditions and privacy policy
          </label> </div>
    <button className="submit-btn reg-btn" type="submit">Register Now</button>
</form>     
 {response && (
        <div className="success-popup">
          <img src={congrats} alt="congratulations-png" />
          <h2>Congratulations
you have successfully Registered!</h2>
          <p>Yes, it was easy and you did it!
check your mail box for next step</p>

<button>Back</button>
        </div>
      )}

      {error && <div>Error: {error.message}</div>}
</div>
  
  </div>  
    </div>
    </div>
  )
}

export default Register