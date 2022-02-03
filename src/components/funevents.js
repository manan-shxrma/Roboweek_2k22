import React from "react"
import "../css/funevents.css"
import {Link} from "react-router-dom"
import "../css/base.css"
import AOS from 'aos';
AOS.init();


function Services(){
    
    return(<><div id="services" className="container mainbodyoffuneve">
    
    <div data-aos="fade-right"
      className="section-heading"
      data-wow-duration="1s"
      data-wow-delay="0.3s" style={{paddingTop:"10%"}}
    >
      <h6>Competitions</h6>
      <h4>
        What <em>Roboweek</em> provides{" "}
      </h4>
      <div className="line-dec"></div>
    </div>

                
                
  <div style={{paddingTop:"8%"}}>

  <div className="row">
		<div class="col-md-4">
    
    <div  data-aos="fade-right" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/trash-bot.jpeg" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">TRASH BOT</div>
        <span class="tag12 ">Technical Creativity</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">
            Design and build a robot out of trash materials. </div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event1`} className="bn5">Details</Link> 
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div data-aos="fade-up" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-nari.jpeg" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}}  class="profile-content">
           
            <div class="profile-name">CODE NAARI </div>
        <span class="tag12 " style={{marginLeft:"0.5vw"}}>Coding contest</span>  
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">Compete against different female across the country to solve problems.
</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event2`} class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div data-aos="fade-left" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/callisto.jpg" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">CALLISTO
                
            </div>
        <span class="tag12 ">Technical Writing</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">The technical writing competition where your words play on your behalf.


</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event3`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div data-aos="fade-right" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/hunt-nova.jpg" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">HUNT NOVA
                
            </div>
        <span class="tag12 " style={{marginLeft:"1.3vw"}}>Deduction</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Play with your logic to crack the components and build a working prototype on TinkerCad.
</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event4`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div data-aos="fade-up" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-play.png" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">CODE PLAY
                
            </div>
        <span class="tag12 " style={{marginLeft:"1.8vw"}}>Coding</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Compete with many coders from around the country.</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event7`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div data-aos="fade-left" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/design-wars.png" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">DESIGN WARS
                
            </div>
        <span class="tag12 " style={{marginLeft:"0.76vw"}}>Mech. Design</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">-Design Wars 2.0  aims to inspire learning through a real-world scenario. </div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event8`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div data-aos="fade-right" class="profile-card-4 text-center"><img alt="" style={{height:"27vh"}} src="assets/images/REGATTA.png" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(255,182,193)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">REGATTA 2.0
               
            </div>
        <span class="tag12 " style={{marginLeft:"2.8vw"}}>ROS</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Solve the problem statements using ROS NOETIC, ROS MELODIC or constructsim(online).</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event9`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div data-aos="fade-up" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/clipped.jpg" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(230, 255, 110)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">#CLIPPED
              
            </div>
        <span class="tag12 " style={{marginLeft:"-0.3vw"}}>Graphical Designing</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">Enable you to put your creative and editing skills at one place
</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event5`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div data-aos="fade-left" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/Arcanum.png" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(230, 255, 110)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">
               ARCANUM
            </div>
        <span class="tag12 " style={{marginLeft:"1.4vw"}}>Deduction</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">A virtual treasure hunt- let the mystery saga unfold.</div>
            <a href="/#services" class="bn6 disabled">Register</a><Link to={`/post/event6`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div data-aos="fade-left" class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/squiz.png" class="img img-responsive" />
        <div style={{backgroundColor:"rgb(230, 255, 110)", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">
               SQUIZ GAME
            </div>
        <span class="tag12 " style={{marginLeft:"1.4vw"}}>Deduction</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">Quiz for 1st and 2nd year in the domain of robotics and technology</div>
            <a href="/#home" class="bn5">Register</a><Link to="/#home" class="bn5">Details</Link>
        </div>
    </div></div>

</div>
</div>
	</div>










    </>)
}

export default Services