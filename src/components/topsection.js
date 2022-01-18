import React from "react"


function Topsection(){
return(
    <><div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container">
      {/* <div className="row"> */}
        
          {/* <div className="row"> */}
            <div className="align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div className="" style={{textAlign:"center"}}>
                  <div className="">
                    <h2>Roboweek 2k22</h2>
                    <p style={{marginRight:"0px"}}>Why restrict yourself only to projects,<br /> when there is so much more to learn <br /> and enjoy simultaneously!</p>
                  </div>
                  <div >
                    <div className="border-first-button scroll-to-section">
                      <a href="/contact">Register</a>
                      <a style={{marginLeft:"2%"}} href="/contact">Discord</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec-v3.png" alt="" />
              </div>
            </div> */}
          {/* </div> */}
        
      {/* </div> */}
    </div>
  </div></>
)
}

export default Topsection
