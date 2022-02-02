import React from "react"
import "../css/funevents.css"
import {Link} from "react-router-dom"

function Services(){
    return(<><div className="container mainbodyoffuneve">
    
    <div
      className="section-heading wow fadeInLeft"
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
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/trash-bot.jpeg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">TRASH BOT</div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">
            Design and build a robot out of trash materials. </div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event1`} class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-nari.jpeg" class="img img-responsive" />
        <div class="profile-content">
                
           
            <div class="profile-name">CODE NAARI </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">Compete against different female across the country to solve problems.
</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event2`} class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/callisto.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">CALLISTO
                
            </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">The technical writing competition where your words play on your behalf.


</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event3`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/hunt-nova.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">HUNT NOVA
                
            </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">Play with your logic to crack the components and build a working prototype on TinkerCad.
</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event4`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-play.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">CODE PLAY
                
            </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">Compete with many coders from around the country.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event7`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/design-wars.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">DESIGN WARS
                
            </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">-Design Wars 2.0  aims to inspire learning through a real-world scenario. </div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event8`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div class="profile-card-4 text-center"><img alt="" style={{height:"27vh"}} src="assets/images/REGATTA.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">REGATTA 2.0
               
            </div>
            <div><b>TECH EVENT</b></div>
            <div class="profile-description">Solve the problem statements  using ROS NOETIC, ROS MELODIC or constructsim(online).</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event9`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/clipped.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">#CLIPPED
              
            </div>
            <div><b>FUN EVENT</b></div>
            <div class="profile-description">Enable you to put your creative and editing skills at one place
</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event5`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/Arcanum.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">
               ARCANUM
            </div>
            <div><b>FUN EVENT</b></div>
            <div class="profile-description">A virtual treasure hunt- let the mystery saga unfold.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event6`} class="bn5">Details</Link>
        </div>
    </div></div>

</div>
</div>
	</div>










    </>)
}

export default Services