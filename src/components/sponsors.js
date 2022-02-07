import React from "react"
import {registerItems,timelineItems,prizeItems,GoldSponsors,PlatformPartners,Sponsors, CommunityPartners,FAQs,EduPartners} from '../js/sponsersdata'
import "../css/sponsers.scss"
import "../css/base.css"
import AOS from 'aos';
AOS.init();

function portfolio(){
    return(<><section id="sponsors">
                        {/* <div id="portfolio" className="our-portfolio section"> */}
                  <div  className="container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div data-aos="fade-up" className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                          <h6>Sponsors</h6>
                          <h4>Check out the sponsors for <em>Roboweek</em></h4>  
                        </div>
                      </div>
                    </div>
                    <section className="sponsors-section">
                  <div className="body-content sponsors-conatiner">

                  <div className="community">
                           
                           <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                             
                             <h4 style={{color:"#0277BD"}}>Education Partners</h4>  
                           </div>
                                       <br />
                                      
                                           <div className="row row-img grid" style={{"justify-content": "center"}}>
                                               {EduPartners.map((item, index) => {
                                               return (
                                                   <div data-aos="fade-up" className="col-md-4 col-sm-6 img-div">
                                                       <a href={item.sponsorLink} target="_blank">
                                                           <img className="sponsor-img" src={item.sponsorImg} />
                                                       </a>
                                                   </div>                                                
                                               )
                                               })}
                                           </div>
                                       
                                   </div>



                                        
                      {/* 
                        <div className="community">
                           
                        <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                          
                          <h4 style={{color:"#DAA520"}}>Gold Sponsers</h4>  
                        </div>
                                    <br />
                                   
                                        <div className="row row-img grid" style={{"justify-content": "center"}}>
                                            {GoldSponsors.map((item, index) => {
                                            return (
                                                <div className="col-md-4 col-sm-6 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    
                                </div>
                     */}
                                {/* <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div> */}

                           

                            {/* <h3>Sponsors</h3>
                            <div className="row row-img grid mb-4">
                                {Sponsors.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            {/* <h3>Community Partners</h3>
                            <div className="row row-img grid mb-4">
                                {CommunityPartners.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            {/* <div className="btn-container p-4" style={{ "text-align": "center" }}>
                            <br />
                            <a
                                href="https://drive.google.com/file/d/1po-yevUP5dweJiNdvuiEhsi_IyKlOub8/view?usp=sharing"
                                target="_blank"
                                className="btn btn-info btn-lg" rel="noreferrer" 
                                >Sponsor Us
                            </a>
                            </div> */}
                       
                     </div>
                </section>
    </div></section>
{/*  </div> */}
    </>)
}

export default portfolio