import React from "react";
import "../css/base.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Aboutsection1() {
  return (
    <>
      <div id="about" className="about section" style={{paddingBottom:"100px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                
                <div
                  data-aos="fade-up"
                  className="col-lg-6 align-self-center"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="about-right-content">
                    <div className="section-heading">
                      <h6>Highlights of Roboweek 2.0 </h6>
                      <h4>
                        What we <em>Did !</em>
                      </h4>
                      <div className="line-dec"></div>
                    </div>
                    <p style={{ fontSize: "larger" }}>
                      <strong>
                        {" "}
                        Roboweek 2.0 was a big triumph with over 3800 participants, 800 female participants and more than 320 colleges participating in it. The event was successfully backed and we had more than 25 sponsors. With Roboweek 3.0, we aim to go further and garner more participants and provide them with better connections and opportunities to grow.
                      </strong>
                      
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Aboutsection1;
