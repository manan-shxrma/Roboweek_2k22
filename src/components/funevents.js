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
		<div style={{paddingBottom:"5%"}} class="col-md-6 col-lg-4 left-card">
    
    <div  data-aos="fade-right" class="profile-card-4 profile-card-background1 text-center event1"><img style={{height:"27vh"}} alt="" src="assets/images/trash-bot.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">TRASH BOT</div>
        <span class="tag12 ">Technical Creativity</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">
            Design and build a robot out of trash materials. </div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" className="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/trashbot" className="bn5">Details</Link> 
        </div>
    </div>
</div>
<div class="col-md-6 col-lg-4 right-card">
    
    <div data-aos="fade-up" class="profile-card-4 profile-card-background2 text-center event2"><img style={{height:"27vh",width:"100%"}} alt="" src="assets/images/code-nari.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}}  class="profile-content">
        
            <div class="profile-name">CODE NAARI </div>
        <span class="tag12 " style={{marginLeft:"0.5vw"}}>Coding contest</span>  
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">Compete against different female across the country to solve problems.
</div>
            { <a href="https://docs.google.com/spreadsheets/d/1pJd1dJByj6odybDORBXSHrj0YynmNlkTWTeIwzM1YNk/edit#gid=0" class="bn5" style={{backgroundColor: "black"}}>Results</a> }
            <Link to="/post/codenaari" class="bn5">Details</Link>
        </div>
    </div>
</div>
<div class="col-md-6 col-lg-4 left-card">
    
    <div data-aos="fade-left" class="profile-card-4 profile-card-background3 text-center event3"><img style={{height:"27vh"}} alt="" src="assets/images/callisto.jpg" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">CALLISTO
                
            </div>
        <span class="tag12 ">Technical Writing</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description">The technical writing competition where your words play on your behalf.


</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/callisto" class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-6 col-lg-4 right-card">
    
    <div data-aos="fade-right" class="profile-card-4 profile-card-background4 text-center event4"><img style={{height:"27vh"}} alt="" src="assets/images/hunt-nova.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">HUNT NOVA
                
            </div>
        <span class="tag12 " style={{marginLeft:"1.3vw"}}>Deduction</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Play with your logic to crack the components and build a working prototype on TinkerCad.
</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/huntnova" class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-6 col-lg-4 left-card">
    
    <div data-aos="fade-up" class="profile-card-4 profile-card-background5 text-center event5"><img style={{height:"27vh"}} alt="" src="assets/images/code-play.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">CODE PLAY
                
            </div>
        <span class="tag12 " style={{marginLeft:"1.8vw"}}>Coding</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Compete with many coders from around the country.</div>
            <a href="https://docs.google.com/spreadsheets/d/1txfWB5mVyjgBDkwc1O_FrUffU-r0Up21BWoTbC6-q8o/edit?usp=sharing" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a>
            <Link to="/post/codeplay" class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-md-6 col-lg-4 right-card">
    
    <div data-aos="fade-left" class="profile-card-4 profile-card-background6 text-center event6"><img style={{height:"27vh"}} alt="" src="assets/images/design-wars.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">DESIGN WARS
                
            </div>
        <span class="tag12 " style={{marginLeft:"0.76vw"}}>Mech. Design</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Design Wars 2.0  aims to inspire learning through a real-world scenario. </div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/designwars" class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-6 col-lg-6 left-card regatta">
    
    <div data-aos="fade-right" class="profile-card-4 profile-card-background7 text-center event7"><img alt="" style={{height:"27vh"}} src="assets/images/REGATTA.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">REGATTA 2.0
            
            </div>
        <span class="tag12 " style={{marginLeft:"2.8vw"}}>ROS</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Solve the problem statements using ROS NOETIC, ROS MELODIC or constructsim(online).</div>
            {/* <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a> */}
            <Link to="/post/regatta" class="bn5">Details</Link>
        </div>
    </div></div>
    <div style={{paddingBottom:"5%"}} class="col-md-6 col-lg-6 npm right-card tinkerit">
    
    <div data-aos="fade-left" class="profile-card-4 profile-card-background8 text-center event8"><img alt="" style={{height:"27vh"}} src="assets/images/Tinker_It.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">TINKER IT
            
            </div>
        <span class="tag12 " style={{marginLeft:"2.8vw"}}>Technical</span>
            <div className="hate"><b>TECH EVENT</b></div>
            <div class="profile-description mb-2">Solve IOT challenge statements on TinkerCAD.</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/tinkerit" class="bn5">Details</Link>
        </div>
        </div>
    </div>
    <div class="col-md-6 col-lg-4 left-card">
    
    <div data-aos="fade-right" class="profile-card-4 profile-card-background9 text-center fun-event1"><img style={{height:"27vh"}} alt="" src="assets/images/clipped.jpg" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">#CLIPPED
            
            </div>
        <span class="tag12 " style={{marginLeft:"-0.3vw"}}>Graphical Designing</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">Enable you to put your creative and editing skills at one place
</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" target="_blank" style={{backgroundColor: "black"}}>Results</a><Link to="/post/clipped" class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-lg-4 col-md-6 right-card">
    
    <div data-aos="fade-up" class="profile-card-4 profile-card-background10 text-center fun-event2"><img style={{height:"27vh"}} alt="" src="assets/images/Arcanum.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">
                ARCANUM
            </div>
        <span class="tag12 " style={{marginLeft:"1.4vw"}}>Deduction</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">A virtual treasure hunt- let the mystery saga unfold.</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" style={{backgroundColor: "black"}}>Results</a><Link to="/post/arcanum" class="bn5">Details</Link>
        </div>
    </div></div>
    <div class="col-lg-4 col-md-12">
    
    <div data-aos="fade-left" class="profile-card-4 profile-card-background11 text-center fun-event3"><img style={{height:"27vh"}} alt="" src="assets/images/squiz.png" class="img img-responsive" />
        <div style={{backgroundColor:"#eceef1", paddingBottom:"4vh"}} class="profile-content">
            <div class="profile-name">
                SQUIZ GAME
            </div>
        <span class="tag12 " style={{marginLeft:"1.4vw"}}>Deduction</span>
            <div className="hate"><b>FUN EVENT</b></div>
            <div class="profile-description mb-2">Quiz for 1st and 2nd year in the domain of robotics and technology</div>
            <a href="https://www.youtube.com/watch?v=Zfwx6y5UY04&t=391s" class="bn5" style={{backgroundColor: "black"}}>Results</a><Link to="/post/squiz" class="bn5">Details</Link>
        </div>
    </div></div>
    

</div>
</div>
	</div>










    </>)
}

export default Services
