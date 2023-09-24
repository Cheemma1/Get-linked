import { X } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'


const NavMob = ({open,setOpen}) => {
  return (
    < div className='nav'>
  
  <X onClick={()=>setOpen(!open)}  className='toggle-btn-mob'/>
     

<ul>
 <li><a href="#">Timeline</a></li>
 <li><a href="#">Overview</a></li>
 <li><a href="#">Faqs</a></li>
 <Link to={"/contact"}> <li>Contact</li></Link>
</ul>

<button className='nav-btn '> <Link to={"/reg"}>Register</Link></button>
</div>


  )
}

export default NavMob