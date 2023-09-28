import React from 'react'
import image from '../assets/key-img.png'

const Key = () => {
  return (
    <div className='holding-second'>
<div className='container key-container'>
<div className='key-img-container'> <img src={image} alt="image"  className='key-img'/></div>
<div>
    <h2 className='heading'> Judging Criteria
<span className='span'> Key attributes</span></h2>

<p className='key-txt'> <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.</p>
<p className='key-txt'> <span>Impact and Relevance:</span>  Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.</p>
<p className='key-txt'> <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.</p>
<p className='key-txt'> <span> Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.</p>
<button className='nav-btn key-btn'>Know More</button>
</div>

</div>
<div className='line'></div>
    </div>
  )
}

export default Key