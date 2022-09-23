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
        <div
          style={{ paddingTop: "5%" }}
          className="container mainbodyoftimeline"
        >
          <div
            data-aos="fade-right"
            className="section-heading wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <h6>Previous year Speakers</h6>
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
                    style={{ height: "16rem" }}
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
                    <a
                      href="https://www.linkedin.com/in/dr-santosh-kumar-nanda-b3848499"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=4owxU1QAAAAJ&hl=en"
                      target="_blank"
                    >
                      {" "}
                      <i
                        class="ion-social-google"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a href="https://youtu.be/qtheF6UpIRI" target="_blank">
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/Manmeetkaur.jpeg"
                    alt="sample83"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Manmeet Kaur</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Cloud Computing</b>
                  </h4>
                  <p class="tech-para">
                    Cloud Technology Consulting at Protiviti | PG in Cloud
                    Computing at University of Texas | Ex-Expedia at Xerox
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/manmeet-kaur-35212129/"
                      target="_blank"
                    >
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
                    <a
                      href="https://www.youtube.com/watch?v=D7hhgGlkS60"
                      target="_blank"
                    >
                      <button class="raise">Watch Now</button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/Pratiktirokar.jpeg"
                    alt="sample83"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Pratik Tirodkar</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Autonomous robots</b>
                  </h4>
                  <p class="tech-para">
                    Director PNT Robotics | Shark Tank India Finalist | Maker of
                    World's 1st Internet Controlled Robot for Pandemic
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/pratik-tirodkar/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.instagram.com/pnt_robotics/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-instagram-outline"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://pntsolutions.in/" target="_blank">
                      {" "}
                      <i class="ion-link" style={{ color: "orange" }}></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a href="https://youtu.be/YHZ9F-ZBNH8" target="_blank">
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 down-images">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/tech-talk-2.jpg"
                    alt="sample83"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Nithya Duraisamy</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Women In FOSS </b>
                  </h4>
                  <p class="tech-para">
                    Assistant Consultant at Tata Consultancy Services Limited |
                    Ex Associate Cognizant Technology Solutions
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/nithya-duraisamy-45284250/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCXsisJBABS2n2rQjR_rbJEg/videos"
                      target="_blank"
                    >
                      {" "}
                      <i
                        class="ion-social-youtube"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.facebook.com/nithya.duraisamy.7"
                      target="_blank"
                    >
                      {" "}
                      <i
                        class="ion-social-facebook"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a href="https://youtu.be/eTgyTyVp4BU" target="_blank">
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 down-images">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/tech-talk-3.jpg"
                    alt="sample83"
                  />
                </div>
                <figcaption class="ei">
                  <h3 class="tech-h3">Kuppulakshmi Krishnamoorthy</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Emotional Intelligence is Important as AI </b>
                  </h4>
                  <p class="tech-para">
                    Global Head—Zoho for Startups at Zoho Corporation | Trainer
                    Datamatics Global Services
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/kuppukrish/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://www.instagram.com/kuppoo/" target="_blank">
                      {" "}
                      <i
                        class="ion-social-instagram-outline"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.facebook.com/kklakshmi"
                      target="_blank"
                    >
                      {" "}
                      <i
                        class="ion-social-facebook"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://twitter.com/Kuppulakshmi" target="_blank">
                      {" "}
                      <i
                        class="ion-social-twitter"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=srJZ61_5-aA"
                      target="_blank"
                    >
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
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
          <div
            style={{ paddingTop: "5%", textAlign: "-webkit-center" }}
            class="row"
          >
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/tech-talk-4.jpg"
                    alt="sample47"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Gagandeep Reehal</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Autonomous Cars</b>
                  </h4>
                  <p class="tech-para">
                  Co-Founder & CEO, Minus Zero | Building Self Driving Cars in India | Former Advisor & AI Researcher | TEDxPatiala Host 2022
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/gagandeepreehal/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://minuszero.in/"
                      target="_blank"
                    >
                      {" "}
                      <i
                        class="ion-link" style={{ color: "orange" }}
                      ></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a href="https://www.youtube.com/watch?v=tGUSL4r_Dbc" target="_blank">
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/tech-talk-5.jpg"
                    alt="sample83"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Harsh kashyap</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Machine Learning</b>
                  </h4>
                  <p class="tech-para">
                  Sr. Machine Learning Scientist at Path Robotics | He did his Master's from Northeastern University, Boston in Electrical Engineering
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/hkashyap"
                      target="_blank"
                    >
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
                    <a
                      href="https://www.youtube.com/watch?v=MfqPO0Djafc"
                      target="_blank"
                    >
                      <button class="raise">Watch Now</button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <figure class="snip1515">
                <div data-aos="zoom-in" class="profile-image">
                  <img
                    style={{ height: "16rem" }}
                    src="assets/images/tech-talk-6.jpg"
                    alt="sample83"
                  />
                </div>
                <figcaption>
                  <h3 class="tech-h3">Koyal Bhartia
</h3>
                  <h4 style={{ color: "orange", fontFamily: "Roboto" }}>
                    <b>Women in Robotics</b>
                  </h4>
                  <p class="tech-para">
                  Robotics Engineer at ArcBest technologies | Autonomous Mobile Robot | Member - Women in AI and Robotics | Robotics Graduate from UMD
                  </p>
                  <div data-aos="fade-up" class="icons">
                    <a
                      href="https://www.linkedin.com/in/koyalbhartia/"
                      target="_blank"
                    >
                      <i
                        class="ion-social-linkedin"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a
                      href="https://github.com/koyalbhartia"
                      target="_blank"
                    >
                      <i
                        class="ion-social-instagram-outline"
                        style={{ color: "orange" }}
                      ></i>
                    </a>
                    <a href="https://koyalbhartia.github.io" target="_blank">
                      {" "}
                      <i class="ion-link" style={{ color: "orange" }}></i>
                    </a>
                  </div>
                  <div class="buttons">
                    <a href="https://www.youtube.com/watch?v=2Qr6bDl6y_0" target="_blank">
                      <button
                        class="raise"
                        style={{ paddingLeft: "50px", paddingRight: "50px" }}
                      >
                        Watch Now
                      </button>
                    </a>
                    {/* <button class="raise">Play Now Now Now Now</button> */}
                  </div>
                </figcaption>
              </figure>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Services;
