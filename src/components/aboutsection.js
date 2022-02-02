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
            <div data-aos="fade-in" className="col-lg-6">
              <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="container huhcard">
              <div class="card">
            <div class="content">
                <div class="front">
                    <img src="assets/images/robosoc-team2.JPG"  className="img img-responsive" alt="visit"/>
                    
                </div>
                <div class="back">
                    <h1><a style={{fontSize:"1.1em", fontWeight:"700"}}href="https://robosocnith.com/">More Details</a></h1>
                    <h4 style={{fontSize:"1.5em", fontWeight:"700"}}>Roboweek2.0</h4>
                    <p style={{fontSize:"1em", fontWeight:"700"}}>It is a blend of affairs encompassing week long enticing activities ranging from guest talks, robotic workshops, coding manias, fun events, cryptic hunt, quizzes and much more.</p>
                </div>
            </div>
        </div>
    </div>
                {/* <img src="assets/images/about-dec-v3.png" alt="" /> */}
              </div>
            </div>
            <div data-aos="fade-up" className="col-lg-6 align-self-center" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h4>What is  <em>Roboweek?</em></h4>
                  <div className="line-dec"></div>
                </div><p style={{fontSize:"larger"}}><strong> It is a blend of affairs encompassing week long enticing activities
                               ranging from guest talks, robotic workshops, coding manias, fun events, cryptic hunt,
                               quizzes and much more.</strong></p>
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
                            5000+<br />
                            <span>Students</span>
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
                            2000+<br />
                            <span>Registrations</span>
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
            <div className="col-lg-6">
              <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="container huhcard">
              <div class="card">
            <div class="content">
                <div class="front">
                    <img src="assets/images/diversity.jpg" className="img img-responsive" alt="visit"/>
                    
                </div>
                <div class="back">
                    <h1><a href="https://robosocnith.com/">More Details</a></h1>
                    <h4 style={{fontSize:"1.3em", fontWeight:"700"}}>RoboWeek 2021</h4>
                    <p>RoboWeek 2021 was conducted last year which was a huge success. It was a first of its kind event conducted all over the country. We received huge support across the country which filled us with the zeal and entusiasm to conduct RoboWeek 2.0</p>
                </div>
            </div>
        </div>
    </div>
                {/* <img src="assets/images/about-dec-v3.png" alt="" /> */}
              </div>
            </div>
            <div  className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <div data-aos="fade-up" className="section-heading">
                  <h6>About Us</h6>
                  <h4>RoboWeek  <em>2021</em></h4>
                  <div className="line-dec"></div>
                </div><p style={{fontSize:"larger"}}><strong> RoboWeek 2021 was conducted last year which was a huge success. It was a first of its kind event conducted all over the country. We received huge support across the country which filled us with the zeal and entusiasm to conduct RoboWeek 2.0</strong></p>
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
                            25+<br />
                            <span>Sponsors</span>
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
                          <div>9+
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