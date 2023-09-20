import React, { useState } from 'react'
import ham from '../assets/Vector.png'
import NavMob from './NavMob'

const Nav = () => {

  const [open, setOpen] = useState(false)
  // const navToggle=()=>{
  //   setOpen(!open)
  // }
  return (
    <>
    <nav className=' container nav-bar'>
<h1 className='logo'>get <span>Linked</span></h1> 
<img src={ham} alt="menu" onClick={()=>setOpen(!open)}  className='toggle-btn'/>
{open && <NavMob open={open } setOpen={setOpen}/>}
<div className='nav-link'>
<ul>
 <li><a href="#">Timeline</a></li>
 <li><a href="#">Overview</a></li>
 <li><a href="#">Faqs</a></li>
 <li><a href="#">Contact</a></li>
</ul>

<button className='nav-btn'>Register</button>
</div>
    </nav>
    <div className='line'></div>
    </>
  )
}

export default Nav