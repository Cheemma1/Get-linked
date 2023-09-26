import React, { useState } from 'react'
import ham from '../assets/Vector.png'
import NavMob from './NavMob'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
const [open, setOpen] = useState(false)
const navigate = useNavigate()
  return (
    <>
    <nav className=' container nav-bar'>
    <Link to={"/"}><h1 className='logo'> get <span>Linked</span></h1> </Link>
<img src={ham} alt="menu" onClick={()=>setOpen(!open)}  className='toggle-btn'/>
{open && <NavMob open={open } setOpen={setOpen}/>}
<div className='nav-link'>
<ul>
 <li>Timeline</li>
 <li>Overview</li>
 <li>Faqs</li>
 <li onClick={()=>navigate('/contact')}>Contact</li>
</ul>

<button className='nav-btn' onClick={()=> navigate('/reg')}> Register </button>
</div>
    </nav>
  
    </>
  )
}

export default Nav