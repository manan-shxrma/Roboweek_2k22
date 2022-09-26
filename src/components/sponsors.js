import React from "react"
import {registerItems,timelineItems,prizeItems,GoldSponsors,PlatformPartners,Sponsors,CommunityPartners,Partners ,FAQs,EduPartners,SilverSponsers,BronzeSponsers} from '../js/sponsersdata'
import "../css/sponsers.scss"
import "../css/base.css"
import AOS from 'aos';
AOS.init();

function portfolio(){
    return(<><section id="sponsors" style={{paddingTop:"3em"}}>
                        {/* <div id="portfolio" className="our-portfolio section"> */}
                  <div  className="container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div data-aos="fade-right" className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                          <h6>Past Sponsors</h6>
                          <h4>Past Sponsors for <em>Roboweek</em></h4>  
                          <div className="line-dec"></div>

                        </div>
                      </div>
                    </div>
                    <section className="sponsors-section">
                  <div className="body-content sponsors-conatiner">


                      {/* <----------Gold- Sponsers------> */}

                  <div className="community">
                          
                          <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                            
                            <h4 class="sponsor-h4" style={{backgroundColor:"#A38A00",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Gold Sponsors</h4>  
                          </div>
                                      
                                     
                                        <div className="row row-img grid" style={{"justify-content": "center"}}>
                                            {GoldSponsors.map((item, index) => {
                                            return (
                                                <div data-aos="fade-up" style={{paddingTop:"7%"}} className="col-md-4 col-sm-6 img-div">
                                                    <a rel="noreferrer" href={item.sponsorLink} target="_blank">
                                                        <img alt="" className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                          </div>
                                      
                        </div>

                        {/* <----------Silver- Sponsers------> */}
                  <div className="community">
                           
                           <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                             
                             <h4 class="sponsor-h4" style={{backgroundColor:"#BCBEC0",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Silver Sponsors</h4>  
                           </div>
                                       
                                      
                                           <div className="row row-img grid" style={{"justify-content": "center"}}>
                                               {SilverSponsers.map((item, index) => {
                                               return (
                                                   <div data-aos="fade-up" style={{paddingTop:"7%"}} className="col-md-4 col-sm-6 img-div">
                                                       <a rel="noreferrer" href={item.sponsorLink} target="_blank">
                                                           <img alt="" className="sponsor-img" src={item.sponsorImg} />
                                                       </a>
                                                   </div>                                                
                                               )
                                               })}
                                           </div>
                                       
                        </div>

                        {/* <----------Bronze- Sponsers------> */}
                  <div className="community">
                           
                           <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                             
                             <h4 class="sponsor-h4" style={{backgroundColor:"#cd7f32",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Bronze Sponsers</h4>  
                           </div>
                                       
                                      
                                           <div className="row row-img grid" style={{"justify-content": "center"}}>
                                               {BronzeSponsers.map((item, index) => {
                                               return (
                                                   <div data-aos="fade-up" style={{paddingTop:"7%"}} className="col-md-4 col-sm-6 img-div">
                                                       <a rel="noreferrer" href={item.sponsorLink} target="_blank">
                                                           <img alt="" className="sponsor-img" src={item.sponsorImg} />
                                                       </a>
                                                   </div>                                                
                                               )
                                               })}
                                           </div>
                                       
                        </div>
                        </div>
                </section>
            </div>
        </section>
                    {/* <------------------------------Partners---------------> */}
                    <section id="sponsors">
                        {/* <div id="portfolio" className="our-portfolio section"> */}
                  <div  className="container">
                    <section className="sponsors-section">
                  <div className="body-content sponsors-conatiner">
                  <div className="community">
                           
                           <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                             
                             <h4 class="sponsor-h4" style={{backgroundColor:"#003058",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Partners</h4>  
                           </div>
                                       
                                      
                                           <div className="row row-img grid" style={{"justify-content": "center"}}>
                                               {Partners.map((item, index) => {
                                               return (
                                                   <div data-aos="fade-up" style={{paddingTop:"5%"}} className="col-md-4 col-sm-6 img-div">
                                                       <a rel="noreferrer" href={item.sponsorLink} target="_blank">
                                                           <img alt="" className="sponsor-img" src={item.sponsorImg} />
                                                       </a>
                                                   </div>                                                
                                               )
                                               })}
                                           </div>
                                       
                        </div>
                      
                  </div></section></div></section>



                  {/* <-----------------------------------------community partners----------------------------------> */}


                    <section id="sponsors">
                        {/* <div id="portfolio" className="our-portfolio section"> */}
                  <div  className="container">
                    <section className="sponsors-section">
                  <div className="body-content sponsors-conatiner">
                  <div className="community">
                           
                           <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                             
                             <h4 class="sponsor-h4" style={{backgroundColor:"#696969",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Community Partners</h4>  
                           </div>
                                       
                                      
                                           <div className="row row-img grid" style={{"justify-content": "center"}}>
                                               {CommunityPartners.map((item, index) => {
                                               return (
                                                   <div data-aos="fade-up" style={{paddingTop:"5%"}} className="col-md-4 col-sm-6 img-div">
                                                       <a rel="noreferrer" href={item.sponsorLink} target="_blank">
                                                           <img alt="" className="sponsor-img" src={item.sponsorImg} />
                                                       </a>
                                                   </div>                                                
                                               )
                                               })}
                                           </div>
                                       
                        </div>
                      
                  </div></section></div></section>






                    {/* <section className="sponsors-section">
                    <div className="body-content sponsors-conatiner">
                        <div style={{paddingTop:"2%"}}  className="community">
                           
                        <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                          
                          <h4 class="sponsor-h4" style={{backgroundColor:"#003058",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Partners</h4>  
                        </div>
                                    <br />
                                   
                                        <div className="row row-img grid" style={{"justify-content": "center"}}>
                                            {Partners.map((item, index) => {
                                            return (
                                                <div data-aos="fade-up" className="col-md-4 col-sm-6 img-div" style={{paddingTop:"5%"}}>
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    
                            </div>
                            <div style={{paddingTop:"2%"}}  className="community">
                           
                        <div className="section-heading " data-wow-duration="1s" data-wow-delay="0.3s">
                          
                          <h4 class="sponsor-h4" style={{backgroundColor:"#696969",color:"#fff",textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Community Partners</h4>  
                        </div>
                                    <br />
                                   
                                        <div className="row row-img grid" style={{"justify-content": "center"}}>
                                            {CommunityPartners.map((item, index) => {
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
                    </div>
                    </section> */}



                                        
                      
                        {/* <div style={{paddingTop:"8%"}}  className="community">
                           
                        <div className="section-heading " data-wow-duration="1s" data-wow-delay="0.3s">
                          
                          <h4 style={{color:"#002D62"}}>Community Partners</h4>  
                        </div>
                                    <br />
                                   
                                        <div className="row row-img grid" style={{"justify-content": "center"}}>
                                            {CommunityPartners.map((item, index) => {
                                            return (
                                                <div data-aos="fade-up" className="col-md-4 col-sm-6 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    
                                </div> */}
                    
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
{/*  </div> */}
    </>)
}

export default portfolio
