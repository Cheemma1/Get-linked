import { X } from 'phosphor-react'
import React from 'react'


const NavMob = ({open,setOpen}) => {
  return (
    < div className='nav'>
  
  <X onClick={()=>setOpen(!open)}  className='toggle-btn-mob'/>
      {/* <div className='mob-nav'> */}
   
{/*   
      <X onClick={()=>setOpen(!open)}  className='toggle-btn-mob'/> */}

<ul>
 <li><a href="#">Timeline</a></li>
 <li><a href="#">Overview</a></li>
 <li><a href="#">Faqs</a></li>
 <li><a href="#">Contact</a></li>
</ul>

<button className='nav-btn mob'>Register</button>
</div>
// </div>

  )
}

export default NavMob