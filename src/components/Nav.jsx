import React, { useState } from 'react'
import ham from '../assets/Vector.png'
import NavMob from './NavMob'
import { Link } from 'react-router-dom'

const Nav = () => {
const [open, setOpen] = useState(false)
  return (
    <>
    <nav className=' container nav-bar'>
    <Link to={"/"}><h1 className='logo'> get <span>Linked</span></h1> </Link>
<img src={ham} alt="menu" onClick={()=>setOpen(!open)}  className='toggle-btn'/>
{open && <NavMob open={open } setOpen={setOpen}/>}
<div className='nav-link'>
<ul>
 <li><a href="#">Timeline</a></li>
 <li><a href="#">Overview</a></li>
 <li><a href="#">Faqs</a></li>
 
 <li><Link to={"contact"}>Contact</Link></li>
</ul>

<button className='nav-btn'> <Link to={"reg"}>Register</Link> </button>
</div>
    </nav>
    <div className='line'></div>
    </>
  )
}

export default Nav