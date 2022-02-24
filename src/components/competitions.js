import React from "react"
import "../css/competitions.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Services(){

  function activateLasers(){
    window.location.href = "https://dare2compete.com/workshop/django-ml-roboweek-20-national-institute-of-technology-nit-hamirpur-267510";
  }
  function activateLasers1(){
    window.location.href = "https://discord.com/invite/vHz3tyjyke";
  }



    return(<><div id="services" className="services competitionsecback section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading  wow fadeInDown" style={{marginBottom:"10px"}} data-wow-duration="1s" data-wow-delay="0.5s">
            <h6>Workshops</h6>
            <h4>What Roboweek <em>Provides</em></h4>
            <div className="line-dec"></div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu">
                    <div  className="first-thumb active">
                      
                      <div className="thumb" style={{marginTop: "5px"}}>
                        <span className="icon"><img src="assets/images/service-icon-02.png" className="icon-img" alt="" /></span>
                        ML with Django
                      </div>
                    </div>
                    {/* <div>
                      <div className="thumb">                 
                        <span className="icon"><img src="assets/images/service-icon-02.png" alt="" /></span>
                        Turtle Regatta
                      </div>
                    </div> */}
                    
                    
                  </div>
                </div> 
                <div className="col-lg-12 main-box">
                  <ul className="nacc">
                    <li className="active">
                      <div className="sub-box">
                        <div style={{marginLeft :"8px"}} className="thumb">
                          <div className="row">
                          {/* <div className="col-lg-6 align-self-center right">
                              <div className="right-image">
                                <img  className="img-responsive django-img" src="assets/images/Machine learning.png" alt="" />
                              </div>
                            </div> */}
                            <div className="col-lg-12 align-self-center">
                              <div className="left-text">
                              <img  className="img-responsive django-img col-lg-6" src="assets/images/Machine learning.png" alt="" />
                                <h4 style={{height:"150px"}}>Machine Learning with Django</h4>
                                <p>Have you ever wondered how MACHINE LEARNING helps robots sustain productivity by allowing them to engage dynamically and avoid obstacles?
                                 Any approach capable of simulating human intelligence contains ML. It shows how data can be used in new ways..</p>
                                <div className="ticks-list"><span><i className="fa fa-check"></i> Hands on project</span><span><i className="fa fa-check"></i> algorithm models</span> 
                                  <span><i className="fa fa-check"></i> Python Libraries Used in ML algorithm</span>  </div>
                                  <button onClick={activateLasers} id="bottone5"> <i style={{paddingRight:"2px",paddingTop:"3px"}} class="fa fa-award" aria-hidden="true"></i> Register</button>
                                  <button onClick={activateLasers1} style={{}} id="bottone-5"> <i style={{paddingRight:"2px",paddingTop:"3px"}} class="fa fa-play" aria-hidden="true"></i> Play</button>
                                          {/* <button style={{marginLeft:"10%"}} class="cybr-btn">
                                            Buttons<span aria-hidden>_</span>
                                            <span aria-hidden class="cybr-btn__glitch">Buttons_</span>
                                            
                                          </button> */}
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div>
                        <div style={{marginLeft :"8px"}} className="thumb">
                          <div className="row">
                            <div className="col-lg-6 align-self-center">
                              <div className="left-text">
                                <h4>Healthy Food &amp; Life</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                  dover lipsum lorem and the others.</p>
                                <div className="ticks-list"><span><i className="fa fa-check"></i> Optimized Template</span> <span><i className="fa fa-check"></i> Data Info</span> <span><i className="fa fa-check"></i> SEO Analysis</span>
                                  <span><i className="fa fa-check"></i> Data Info</span> <span><i className="fa fa-check"></i> SEO Analysis</span> </div>
                                  <button id="bottone5"><i style={{paddingRight:"2px",paddingTop:"3px"}}  class="fa fa-award" aria-hidden="true"></i> Register</button>
                                         
                              </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                              <div className="right-image">
                                <img src="assets/images/services-image-02.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    
                   
                  </ul>
                </div>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></>)
}

export default Services