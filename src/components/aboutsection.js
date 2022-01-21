import React from "react"
import "../css/base.css"

function Aboutsection(){
    return(<>
    



    <div id="about" className="about section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/about-dec-v3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h4>What is  <em>Roboweek?</em></h4>
                  <div className="line-dec"></div>
                </div><p> It is a blend of affairs encompassing week long enticing activities
                               ranging from guest talks, robotic workshops, coding manias, fun events, cryptic hunt,
                               quizzes and much more.</p>
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <div className="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div className="progress" data-percentage="100">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            5000+<br />
                            <span>Participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div className="progress" data-percentage="100">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>300+
                            <br />
                            <span>Colleges</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div className="progress" data-percentage="100">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            1 lakh+<br />
                            <span>lines of code</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></>)
}

export default Aboutsection