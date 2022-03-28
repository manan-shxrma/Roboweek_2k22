import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/base.css";
import "../js/topsection.js";
import "../css/topsec.css";
import Illustration from "./illustration";
import Funevents from "./funevents";

AOS.init();
function Topsection() {
  function activateLasers() {
    window.location.href = "https://www.youtube.com/watch?v=xNgQ6MJkbcc";
  }
  function activateLasers1() {
    window.location.href = "https://discord.com/invite/vHz3tyjyke";
  }
  return (
    <>
      <section id="home" class="background">
        <div class="hover">
          <div data-aos="fade-right" className="headingdiv">
            <h1 class="hero-title">RoboWeek 2.0</h1>
            <h5 className="underhero">Let's build the future</h5>
            <button onClick={activateLasers} id="bottone15">
              <i
                style={{ paddingTop: "1%", paddingRight: "3%" }}
                class="fas fa-play"
              />{" "}
              &nbsp;<b>Watch</b>
            </button>
            <button
              style={{ marginLeft: "3%" }}
              onClick={activateLasers1}
              id="bottone15"
            >
              <i
                style={{ paddingTop: "1%", paddingRight: "3%" }}
                className="fab fa-discord"
              />{" "}
              &nbsp;<b>Discord</b>
            </button>
            <div id="timer">
              <a href="#services">
                <span className="event-start">Event Ended !</span>
                <h5 className="underhero">See &nbsp; You &nbsp; Next &nbsp; Year &nbsp; <i class="fa fa-hand-peace fa-2" aria-hidden="true"></i></h5>
                
              </a>
              {/* <span id="days"></span>days
  <span id="hours"></span>hours
  <span id="minutes"></span>minutes
  <span id="seconds"></span>seconds */}
            </div>
          </div>
          <Illustration />
        </div>
      </section>
    </>
  );
}

export default Topsection;
