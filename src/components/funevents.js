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
            <div class="profile-name">Trash Bot</div>
            <div class="profile-description">
            Use trash material, old motors, batteries, and anything to make a bot. Submission before midnight.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event1`} class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-nari.jpeg" class="img img-responsive" />
        <div class="profile-content">
                
           
            <div class="profile-name">Code Naari </div>
            <div class="profile-description">Short coding competition(3hr long) only for female participants.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event2`} class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/callisto.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">Callisto
                
            </div>
            <div class="profile-description">The participants will have to write a technical article in an interesting way. This article needs to be submitted before midnight.

</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event3`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/hunt-nova.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">Hunt Nova
                
            </div>
            <div class="profile-description">A word puzzle will be given to participants in which they have to find the hidden components and then use these components in tinker cad to create a working project and submit a video of their project. Submission needs to be done before midnight.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event4`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/clipped.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">#Clipped
              
            </div>
            <div class="profile-description">We will ask participants to create videos using stock videos, music, voice-over, Text, and their creativity on topics related to robotics which will be released before and submit before midnight.
</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event5`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/Arcanum.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">
               Arcanum
            </div>
            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event6`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/code-play.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">Code Play
                
            </div>
            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event7`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-4">
    
    <div class="profile-card-4 text-center"><img style={{height:"27vh"}} alt="" src="assets/images/design-wars.png" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">Design Wars
                
            </div>
            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event8`} class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-4">
    
    <div class="profile-card-4 text-center"><img alt="" style={{height:"27vh"}} src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive" />
        <div class="profile-content">
            <div class="profile-name">John Doe
               
            </div>
            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
            <a href="/" class="bn5">Register</a><Link to={`/post/event9`} class="bn5">Details</Link>
        </div>
    </div></div>

</div>
</div>
	</div>










    </>)
}

export default Services