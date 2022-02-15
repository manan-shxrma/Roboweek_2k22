import React from "react"
import "../css/base.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Aboutsection(){
    return(<>
    



    <div id="about" className="about section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div data-aos="fade-in" className="paddingofaboutimage col-lg-6">
              
                    <img src="assets/images/robosoc-team2.JPG"  className="imgabout" alt="visit"/>
                    </div>
            <div data-aos="fade-up" className="col-lg-6 align-self-center" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h4>What is  <em>Roboweek?</em></h4>
                  <div className="line-dec"></div>
                </div><p style={{fontSize:"larger"}}><strong> It is a blend of affairs encompassing week long enticing activities
                          ranging from guest talks, robotic workshops, coding manias, fun events, cryptic hunt,
                          quizzes and much more.</strong>
                          <h4 style={{color:"#f7931e"}}

                                className="py-4" style={{color:"#f58b56"}}>Previous Year Records</h4></p>
                        <div className="row">
                          <div className="col-lg-4 col-sm-4">
                            <div data-aos="fade-left" className="row">
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
                                      3000+<br />
                                      <span>Registrations</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                            <div data-aos="fade-up" className="row">
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
                            </div>
                            <div className="col-lg-4 col-sm-4">
                            <div data-aos="fade-right" className="row">
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
                                      25<br />
                                      <span>Sponsors</span>
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
      </div>
      <div style={{paddingTop:"10%"}} className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="paddingofaboutimage down col-lg-6">
              
                    <img src="assets/images/diversity.jpg" className="imgabout" alt="visit"/>
                    
              
            </div>
            <div  className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <div data-aos="fade-up" className="section-heading">
                  <h6>About Us</h6>
                  <h4>Unity in  <em>Diversity</em></h4>
                  <div className="line-dec"></div>
                </div><p style={{fontSize:"larger"}}>
                            
                                <strong>RoboWeek is trying to promote diversity by conducting events
                                  specially endorsed for girls, thereby promoting women participation in technical 
                                  field and hence empowering women.</strong>
                        </p>
                        <b>
                            <p class="quote"><strong>"</strong>
                                WOMEN ARE BOTH TALENTED AND INNOVATIVE THINKERS AND TEND TO USE SCIENCE TO LOOK FOR SOLUTIONS.<strong>"</strong> <br/> Kimberly Bryant </p>
                        </b>
                <div className="row">
                  
                  <div className="col-lg-6 col-sm-6">
                    <div data-aos="fade-right">
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
                              700+<br/>
                              <span>Girl Participants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 col-sm-6">
                    <div data-aos="fade-left">
                      <div className="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div className="progress" data-percentage="100">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>9
                              <br />
                              <span>Community Partners</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-sm-4">
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
                  </div> */}
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