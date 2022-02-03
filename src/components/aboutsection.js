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
                               <h2 className="py-4">Previous Year Records</h2></p>
                <div data-aos="fade-left" className="row">
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
                            3000+<br />
                            <span>Registrations</span>
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
                </div><p style={{fontSize:"larger",fontWeight: "400"}}>
                            <p>2020 MAY HAVE BEEN A HARSH AND ARDUOUS DURATION , BUT LET'S REDEFINE OUR APPROACH TO
                                2021....</p>
                                 <p><strong>ROBOWEEK</strong> IS TRYING TO PROMOTE DIVERSITY BY CONDUCTING EVENTS SPECIALLY <strong>ENDORSED</strong>FOR GIRLS, THUS PROMOTING FEMALE PARTICIPATION IN THE TECHNICAL FIELD AND THEREBY EMPOWERING WOMEN.
                        </p>
                        <b>
                            <p class="quote"><strong>"</strong><em>HIDDEN FIGURES ARE HIDDEN NO MORE</em>
                                WOMEN ARE BOTH TALENTED AND INNOVATIVE THINKERS AND TEND TO USE SCIENCE TO LOOK FOR SOLUTIONS.<strong>"</strong> <br/><em>- Kimberly Bryant</em> </p>
                        </b></p>
                <div data-aos="fade-left" className="row">
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
                            700+<br />
                            <span>Girl Participants</span>
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
                          <div>9
                            <br />
                            <span>Community Partners</span>
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