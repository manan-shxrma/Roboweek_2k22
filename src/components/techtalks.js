import React from "react";
import "../css/techtalks.css";
import "../css/base.css";
import AOS from "aos";
AOS.init();
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function Services() {
  return (
    <>
      {" "}
      <div id="techtalks">
        <div style={{paddingTop:"5%"}} className="container mainbodyoftimeline">
          <div
            data-aos="fade-right"
            className="section-heading wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <h6>Speakers</h6>
            <h4>
              Learn with <em>Roboweek</em>{" "}
            </h4>
            <div className="line-dec"></div>
          </div>

          <div
            style={{ paddingTop: "5%", textAlign: "-webkit-center" }}
            class="row"
          >
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem",}}
                    src="assets/images/tech-talk-1.png"
                    alt="sample47"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Santosh Kumar Nanda</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Quantum Machine Learning</b>
                  </h4>
                  <p class="tech-para">
                    Vice President at Techversant | Quantum Machine Learning
                    Expert | IEEE Senior Member
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a href="https://www.linkedin.com/in/dr-santosh-kumar-nanda-b3848499">
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://scholar.google.com/citations?user=4owxU1QAAAAJ&hl=en">
                      {" "}
                      <i
                        class="ion-social-google"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                     <button class="raise" >Registering soon</button>
                     {/* <button class="raise">play</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img style={{ height: "16rem" }}src="assets/images/Manmeetkaur.jpeg"alt="sample83"/>
                </div>
                <figcaption>
                  <h3 class="tech-h3">Manmeet Kaur</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Cloud Computing</b>
                  </h4>
                  <p class="tech-para">
                  Cloud Technology Consulting at Protiviti | PG in Cloud Computing at University of Texas | Ex-Expedia at Xerox
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a href="https://www.linkedin.com/in/manmeet-kaur-35212129/">
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    {/* <a href="https://scholar.google.com/citations?user=4owxU1QAAAAJ&hl=en">
                      {" "}
                      <i
                        class="ion-social-google"
                        style={{ color: "orange" }}
                      ></i>
                    </a> */}
                  </div>
                  <div class="buttons">
                     <button class="raise" >Registering soon</button>
                     {/* <button class="raise">play</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img style={{ height: "16rem" }}src="assets/images/Pratiktirokar.jpeg"alt="sample83"/>
                </div>
                <figcaption>
                  <h3 class="tech-h3">Pratik Tirodkar</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Autonomous robots</b>
                  </h4>
                  <p class="tech-para">
                  Director PNT Robotics | Shark Tank India Finalist |
                   Maker of World's 1st Internet Controlled Robot for Pandemic
                  
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a href="https://www.linkedin.com/in/pratik-tirodkar/">
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://www.instagram.com/pnt_robotics/">
                      <i
                        class="ion-social-instagram-outline"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://pntsolutions.in/">
                      {" "}
                      <i
                        class="ion-link"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                     <button class="raise" >Registering soon</button>
                     {/* <button class="raise">play</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img style={{ height: "16rem" }}src="assets/images/tech-talk-2.jpg"alt="sample83"/>
                </div>
                <figcaption>
                  <h3 class="tech-h3">Nithya Duraisamy</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Women In FOSS{" "}</b>
                  </h4>
                  <p class="tech-para">
                    Assistant Consultant at Tata Consultancy Services Limited |
                    Ex Associate Cognizant Technology Solutions
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a href="https://www.linkedin.com/in/nithya-duraisamy-45284250/">
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCXsisJBABS2n2rQjR_rbJEg/videos">
                      {" "}
                      <i
                        class="ion-social-youtube"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://www.facebook.com/nithya.duraisamy.7">
                      {" "}
                      <i
                        class="ion-social-facebook"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                     <button class="raise">Registering soon</button>
                     {/* <button class="raise">play</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img style={{ height: "16rem" }}src="assets/images/tech-talk-3.jpg"alt="sample83"/>
                </div>
                <figcaption class="ei">
                  <h3 class="tech-h3">Kuppulakshmi Krishnamoorthy</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Emotional Intelligence is Important as AI{" "}</b>
                  </h4>
                  <p class="tech-para">
                  Global Head—Zoho for Startups at Zoho Corporation | Trainer
Datamatics Global Services

                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a href="https://www.linkedin.com/in/kuppukrish/">
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    {/* <a href="https://www.youtube.com/channel/UCXsisJBABS2n2rQjR_rbJEg/videos">
                      {" "}
                      <i
                        class="ion-social-youtube"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://www.facebook.com/nithya.duraisamy.7">
                      {" "}
                      <i
                        class="ion-social-facebook"
                        style={{ color: "orange" }}
                      ></i>
                    </a> */}
                  </div>
                  <div class="buttons">
                     <button class="raise">Registering soon</button>
                     {/* <button class="raise">play</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            {/* <div class="col-sm-12 col-md-4 col-lg-4">
<figure class="snip1515">
  <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg" alt="sample70" /></div>
  <figcaption>
    <h3 class="tech-h3">Ruby Von Rails</h3>
    <h4>Public Relations</h4>
    <p class="tech-para">The only skills I have the patience to learn are those that have no real application in life. </p>
    <div class="icons"><a href="#"><i class="ion-social-reddit" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-twitter" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-vimeo" style={{color:"orange"}}></i></a>
    </div>
  </figcaption>
</figure>
</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
