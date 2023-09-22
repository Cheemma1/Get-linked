import React from 'react'
import cupImg from '../assets/cup.png'
import award from '../assets/Rewards.png'

const Rewards = () => {
  return (
    <div className='reward'>
      <div className='reward-txt'>
    <h2 className='heading'> Prices and <span className='span'>Rewards</span> </h2>
    <p className='paragraph'> Highlight of the prices for the winners and for participants</p>
    </div>
   
    <div className=' container reward-container'>
<img src={cupImg} alt="reward-cup" className='cup' />
 
<img src={award} alt="reward-medals"  className='medals'/>

</div>
     <div className='line'></div>
     </div>
  )
}

export default Rewards