import { X } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavMob = ({open,setOpen}) => {
  const navigate = useNavigate()
  return (
    < div className='nav'>
  
  <X onClick={()=>setOpen(!open)}  className='toggle-btn-mob'/>
     

<ul>
 <li>Timeline</li>
 <li>Overview</li>
 <li>Faqs</li>
 <li onClick={()=>navigate('/contact')}>Contact</li>
</ul>

<button className='nav-btn' onClick={()=> navigate('/reg')}> Register </button>
</div>


  )
}

export default NavMob