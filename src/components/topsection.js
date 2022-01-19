import React from "react"
import Snowfall from 'react-snowfall'
import Sparkle from 'react-sparkle'

function Topsection(){
return(
  <div className="main-banner">

    <Sparkle style={{ color: '#fff', zIndex:'300' }} color={'#FFF'} count={50} minSize={5}  maxSize={8}
             overflowPx={20} fadeOutSpeed={50} newSparkleOnFadeOut={true}
             flicker={true}  flickerSpeed={'normal'}/>
    <Snowfall color="white" style={{ color: '#fff', zIndex:'200' }} snowflakeCount={150} />

  <div className="backshadow"></div>
  <div className="wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container main-elements">
      <div className="align-self-center">
        <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
          <div className="" style={{textAlign:"center"}}>
            <div className="" style={{ color: '#fff', zIndex:'500' }}>
              <h2 className="headingText" style={{color:"white"}}>Roboweek 2k22</h2>
              <p className="headingText" style={{marginRight:"0px"}}>Why restrict yourself only to projects,<br /> when there is so much more to learn <br /> and enjoy simultaneously!</p>
            </div>
            <div >
              <div className="border-first-button scroll-to-section">
                <a className="headingText" style={{color:"white" , zIndex:'500'}} href="/contact">Register</a>
                <a  className="headingText" style={{marginLeft:"2%", color: 'white' , zIndex:'500'}} href="/contact">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)
}

export default Topsection
