import React , { useEffect } from "react"
import Snowfall from 'react-snowfall'
import Sparkle from 'react-sparkle'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/base.css"
import "../js/topsection.js"


function Topsection(){
  
              useEffect(() => {
              AOS.init();
              AOS.refresh();
            }, []);


return(<>
  <div id="home" className="main-banner">

    <Sparkle style={{ color: '#fff', zIndex:'300' }} color={'#FFF'} count={50} minSize={5}  maxSize={8}
             overflowPx={20} fadeOutSpeed={50} newSparkleOnFadeOut={true}
             flicker={true}  flickerSpeed={'normal'}/>
    {/* <Snowfall color="white" style={{ color: '#fff', zIndex:'200' }} snowflakeCount={150} /> */}

  <div className="backshadow"></div>
  <div>
    <div className="container main-elements">
      <div className="align-self-center">
        <div data-aos="zoom-out-right" className="left-content show-up header-text">
          <div data-aos="zoom-out-right" className="" style={{textAlign:"center"}}>
            <div className="" style={{ color: '#fff', zIndex:'500' }}>

              {/* <h2 className="MainSecFont" >Roboweek 2.0</h2> */}
              
                            <x-sign>
                            Roboweek 2.0
                          </x-sign>
                
              {/* <p className="headingTextTop">Why restrict yourself only to projects,<br /> when there is so much more to learn <br /> and enjoy simultaneously!</p> */}
              
            </div>
            
              {/* <div className="border-first-button scroll-to-section">
                <a className="headingText" style={{color:"white" , zIndex:'500',fontSize:"x-large"}} href="https://dare2compete.com/festival/roboweek-national-institute-of-technology-nit-hamirpur-10200"><i class="fas fa-award"></i> REGISTER</a>
                <a  className="headingText" style={{marginLeft:"2%", color: 'white' , zIndex:'500',fontSize:"x-large"}} href="https://discord.gg/vHz3tyjyke"><i className="fab fa-discord"></i> DISCORD</a>
              </div> */}
              

            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>


  {/* waves animation */}
  {/* <div class="header">
             <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
                </div>
             </div> */}
</>
)
}

export default Topsection
