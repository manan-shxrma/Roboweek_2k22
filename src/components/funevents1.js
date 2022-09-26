import React from "react";
import "../css/funevents.css";
import { Link } from "react-router-dom";
import "../css/base.css";
import AOS from "aos";
AOS.init();

function Services() {
  return (
    <>
      <div id="services" className="container mainbodyoffuneve">
          <div className="row">
            
                               {/* <------------------Roboweek 3.0   events-------------------------> */}
            <div
              data-aos="fade-right"
              className="section-heading"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{ paddingTop: "10%" }}
            >
              <h6>Upcoming Competitions</h6>
              <h4>
                What <em>Roboweek 3.0 will</em> provide{" "}
              </h4>
              <div className="line-dec"></div>
            </div>

            
            <div
              style={{ paddingBottom: "5%" }}
              class="col-md-6 col-lg-6 left-card regatta"
            >
              <div
                data-aos="fade-right"
                class="profile-card-4 profile-card-background7 text-center "
              >
                <img
                  alt=""
                  style={{ height: "27vh" }}
                  src="assets/images/coming-soon.png"
                  class="img img-responsive"
                />
                <div
                  style={{ backgroundColor: "#eceef1", paddingBottom: "4vh" }}
                  class="profile-content"
                >
                  <div class="profile-name">Program-o-magus</div>
                  <span class="tag12 " style={{ marginLeft: "2.8vw" }}>
                    Coding
                  </span>
                  <div className="hate">
                    <b>TECH EVENT</b>
                  </div>
                  <div class="profile-description mb-2">
                    A coding event for 1st and second year with simple code in
                    any programing language
                  </div>
                  {/* <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a> */}
                  {/* <Link to="/post/regatta" class="bn5">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              style={{ paddingBottom: "5%" }}
              class="col-md-6 col-lg-6 npm right-card tinkerit"
            >
              <div
                data-aos="fade-left"
                class="profile-card-4 profile-card-background8 text-center "
              >
                <img
                  alt=""
                  style={{ height: "27vh" }}
                  src="assets/images/coming-soon.png"
                  class="img img-responsive"
                />
                <div
                  style={{ backgroundColor: "#eceef1", paddingBottom: "4vh" }}
                  class="profile-content"
                >
                  <div class="profile-name">Code-Her</div>
                  <span class="tag12 " style={{ marginLeft: "2.8vw" }}>
                    Coding
                  </span>
                  <div className="hate">
                    <b>TECH EVENT</b>
                  </div>
                  <div class="profile-description mb-2">
                    A coding event for 1st and second year girls to promote
                    diversity
                  </div>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s"
                    class="bn5"
                    target="_blank"
                    style={{ backgroundColor: "black" }}
                  >
                    Results
                  </a>
                  <Link to="/post/tinkerit" class="bn5">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 left-card">
              <div
                data-aos="fade-right"
                class="profile-card-4 profile-card-background9 text-center "
              >
                <img
                  style={{ height: "27vh" }}
                  alt=""
                  src="assets/images/coming-soon.png"
                  class="img img-responsive"
                />
                <div
                  style={{ backgroundColor: "#eceef1", paddingBottom: "4vh" }}
                  class="profile-content"
                >
                  <div class="profile-name">LINE FOLLOWER</div>
                  <span class="tag12 " style={{ marginLeft: "-0.3vw" }}>
                    Arduino
                  </span>
                  <div className="hate">
                    <b>TECH EVENT</b>
                  </div>
                  <div class="profile-description mb-2">
                    A bot has to follow a specific line .Event based on workshop
                  </div>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s"
                    class="bn5"
                    target="_blank"
                    style={{ backgroundColor: "black" }}
                  >
                    Results
                  </a>
                  <Link to="/post/clipped" class="bn5">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 right-card">
              <div
                data-aos="fade-up"
                class="profile-card-4 profile-card-background10 text-center "
              >
                <img
                  style={{ height: "27vh" }}
                  alt=""
                  src="assets/images/coming-soon.png"
                  class="img img-responsive"
                />
                <div
                  style={{ backgroundColor: "#eceef1", paddingBottom: "4vh" }}
                  class="profile-content"
                >
                  <div class="profile-name">ROBO-RACE</div>
                  <span class="tag12 " style={{ marginLeft: "1.4vw" }}>
                    Arduino
                  </span>
                  <div className="hate">
                    <b>TECH EVENT</b>
                  </div>
                  <div class="profile-description mb-2">
                    A virtual treasure hunt- let the mystery saga unfold.
                  </div>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s"
                    class="bn5"
                    style={{ backgroundColor: "black" }}
                  >
                    Results
                  </a>
                  <Link to="/post/arcanum" class="bn5">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div
                data-aos="fade-left"
                class="profile-card-4 profile-card-background11 text-center "
              >
                <img
                  style={{ height: "27vh" }}
                  alt=""
                  src="assets/images/coming-soon.png"
                  class="img img-responsive"
                />
                <div
                  style={{ backgroundColor: "#eceef1",paddingBottom: "4vh" }}
                  class="profile-content"
                >
                  <div class="profile-name">PICK AND PLACE</div>
                  <span class="tag12 " style={{ marginLeft: "1.4vw" }}>
                    Arduino
                  </span>
                  <div className="hate">
                    <b>TECH EVENT</b>
                  </div>
                  <div class="profile-description mb-2">
                    Different color balls to be given and each bot has to pick a
                    particular color ball and place it in a box.
                  </div>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s"
                    class="bn5"
                    style={{ backgroundColor: "black" }}
                  >
                    Results
                  </a>
                  <Link to="/post/squiz" class="bn5">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Services;
