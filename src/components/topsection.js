import React  from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/base.css"
import "../js/topsection.js"
import "../css/topsec.css"
import Illustration from "./illustration";

AOS.init();
function Topsection(){

return(<>
  
  <section class="background">
	<div class="hover">
  <div data-aos="fade-right" className="headingdiv"> 
  <h1 class="hero-title">RoboWeek 2.0</h1>
  <h5 className="underhero">Let's build the future</h5>
 <a href="https://dare2compete.com/festival/roboweek-national-institute-of-technology-nit-hamirpur-10200"> <button id="bottone15"><i style={{paddingTop:"1%",paddingRight:"3%"}} class="fas fa-award" /> Register</button></a>
 <a href="https://discord.gg/vHz3tyjyke"> <button id="bottone15"><i style={{paddingTop:"1%",paddingRight:"3%"}} className="fab fa-discord" /> Discord</button> </a>
 <div id="timer">
  <span id="days"></span>days
  <span id="hours"></span>hours
  <span id="minutes"></span>minutes
  <span id="seconds"></span>seconds
</div>


  </div>
		<Illustration />
    
	</div>
</section>
  


 
</>
)
}

export default Topsection
