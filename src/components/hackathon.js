import React from "react";
import "../css/hackathon.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Hackathon() {

    function activateLasers5() {
        window.location.href =
        "https://dare2compete.com/hackathon/flipr-hackathon-roboweek-20-national-institute-of-technology-nit-hamirpur-271755";
    }
    

return (
    <>
    <section class="hackathon">
    <div
        className="container-fluid"
        
    >
        <div className="row">
        <div className="col-lg-12">
            <div
                data-aos="fade-up"
                className="section-heading  wow fadeInDown section-heading-workshop"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
                style={{ marginBottom: "2px", marginTop: "10px", textAlign: "left" }}
            >
                <h6>Hackathon</h6>
                <h4 style={{ color: "white" }}>
                Compete in <em>Roboweek</em>
                </h4>
                <div className="line-dec" style={{ marginLeft: "0px" }}></div>
            </div>
            </div>

            <div class="card">
            <div className="row">
            <div class="col-lg-12 img-time">
                
                <div class="thumbnail1">
                    <img class="left img img-responsive" src="assets/images/hackathon(1).png" />
                </div>
                <div class="row main-time"  data-aos="fade-down" style={{ textAlign: "center", marginBottom: "20px"}}>
                    <div class="col-4">
                        <h5 className="date1">25</h5>
                        <h6 className="month1">MARCH</h6>
                        <h5>09:00 PM</h5>
                    </div>
                    <div class="col-4 to">
                        <h3>To</h3>
                    </div>
                    <div class="col-4">
                        <h5 className="date1">27</h5>
                        <h6 className="month1">MARCH</h6>
                        <h5 className="time">08:59 PM</h5>
                      </div>
                    
            </div>
                    
                
            
            
            </div>
              </div>
              <div class="col-lg-6 hack-content-main">
                <div class="right">
                    <h1 className="hack-head"  data-aos="fade-up">Flipr Hackathon</h1>
                    <p className="hack-content">
                      Hello there, y'all! ✋ There's a chance to land a full-time job
                      or an internship. Robotics society NIT hamirpur presents Flipr
                      hackathon.☄️ This Hackathon will be entirely online, and a
                      number of firms will be on the lookout for exceptional
                      individuals to join their exclusive team.🤵This Hackathon will
                      provide pre-final and final-year students with placement and
                      internship opportunities
                    </p>
                    <div data-aos="fade-right"
                                        className="ticks-list"
                                      >
                                          <div class="row">
                                              <div class="col-6">
                                                <span>
                                                <i className="fa fa-check"></i> Amazon
                                          Gift
                                          <br />
                                          Vouchers to the top 3
                                        </span>{" "}
                                              </div>
                                              <div class="col-6">
                                        <span>
                                          <i className="fa fa-check"></i>
                                          The top 3 will receive placement and 
                                          <br />
                                          internship 
                                          opportunities 
                                          <br />
                                          as well.
                                        </span>{" "}
                                              </div>
                                              <div class="col-6">
                                                <span>
                                                    <i className="fa fa-check"></i>{" "}
                                                    Students in the <br />
                                                    3rd, 4th, and 5th year <br />
                                                    are eligible. <br />
                                                    (Open to All Branches).
                                                  </span>
                                                  
                                              </div>
                                          </div>
                                        
                                          
                                        
                                      </div>
                                      <div class="row buttons-ml">
                                        <div class="row buttons-ml">
                                          <button
                                            onClick={activateLasers5}
                                            id="bottone5"
                                            style={{
                                              width: "fit-content",
                                              padding: "0 15% 0 15%",
                                              backgroundColor: "#00345e",
                                              color: "#fff",
                                              marginBottom: "5%"
                                            }}
                                          >
                                            {" "}
                                            <i
                                              style={{
                                                paddingRight: "2px",
                                                paddingTop: "3px",
                                              }}
                                              class="fa fa-award"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Register
                                          </button>
                                        </div>
                                        </div>
                  </div>
            </div>
        </div>
          
            
            
          </div>
          </div>
      
    </section>
    </>
  );
}

export default Hackathon;
