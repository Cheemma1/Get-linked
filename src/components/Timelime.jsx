import React from 'react'
import star1 from "../assets/star pu.png";
import star2 from "../assets/star.png";
import star5 from "../assets/star.png";



const Timelime = () => {
  return (
    <>
<div className='container'> 
<div className="timeline-container">
            <div className="stars star11"><img src={star5} alt="star" /></div>
            <div className="stars star12"><img src={star1} alt="star" /></div>
            <div className="stars star13"><img src={star2} alt="star" /></div>
            <h3>Timeline</h3>
            <p className="description">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            <div className="tl" id="tl1">
                <div className="dets">
                    <h4>Hackathon Announcement</h4>
                    <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    1
                </div>
            </div>
            <div className="tl" id="tl2">
                <div className="dets">
                    <h4>Teams Registration begins</h4>
                    <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    2
                </div>
            </div>
            <div className="tl" id="tl3">
                <div className="dets">
                    <h4>Teams Registration ends</h4>
                    <p>Interested Participants are no longer Allowed to register</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    3
                </div>
            </div>
            <div className="tl" id="tl4">
                <div className="dets">
                    <h4>Announcement of the accepted teams and ideas</h4>
                    <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    4
                </div>
            </div>
            <div className="tl" id="tl5">
                <div className="dets">
                    <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
                    <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    5
                </div>
            </div>
            <div className="tl" id="tl6">
                <div className="dets">
                    <h4>Demo Day</h4>
                    <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>
                <div className="dates">November 18, 2023</div>
                <div className="indicator">
                    6
                </div>
            </div>
        </div> 

</div> 
{/* mobile design  */}
 <div className='line'></div>
 </>
  )
}

export default Timelime