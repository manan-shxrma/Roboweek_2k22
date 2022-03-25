import React from "react"
import "../css/timeline.css"
import "../js/timeline.js"
import "../css/base.css"
import AOS from 'aos';
AOS.init();

function Freequote(){
  

     
        return(<><section id="timeline">
       
    <div  className="container mainbodyoftimeline mb-4" >
     <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
          <h6>Timeline</h6>
          <h4>How <em>Roboweek</em> works</h4>
          <div className="line-dec"></div>
        </div>
        

        
      
       

        <div style={{paddingTop:"5%"}} class="container">
<div class="main-timeline">

                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-left" class="timeline" style={{color:"#adaeaf"}}>
                            <div class="icon"></div>
                            <div class="date-content date-0" >
                                <div class="date-outer">
                                    <span class="date" >
                                            <span class="month">18th March</span>
                                    <span class="year" style={{color:"#adaeaf"}}>2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row" >
                                <div class="col-6 col-md-6 grey time-content-a">
								Clipped | Statement Release
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Design Wars 2.0 | Statement Release 
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Regatta 2.0 | Statement Release 
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span> 
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section-->*/}
                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-right" class="timeline" style={{color:"#adaeaf"}}>
                            <div class="icon"></div>
                            <div class="date-content date-1">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">21st March</span>
                                    <span class="year" style={{color:"#adaeaf"}}>2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                            <div class="col-6 col-md-6 grey time-content-a">
								Opening Ceremony
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Hunt Nova | Statement Release
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span> 
                                </div>
                               
                                <div class="col-6 col-md-6 grey time-content-a">
								Tinker It | Statement Release
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Code Play
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 08:00 PM (IST)</span> 
                                </div>
                           
                               <div class="col-6 col-md-6 grey time-content-a">
								Trash Bot | Submission Opens
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 AM (IST)</span> 
                                </div>
                                {/* <div class="col-6 col-md-6 grey time-content-a">
								dssdhxgfgn
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'> 12:00 AM</span> 
                                </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-left" class="timeline" style={{color:"#adaeaf"}}>
                            <div class="icon"></div>
                            <div class="date-content date-2" >
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">22nd March</span>
                                    <span class="year" style={{color:"#adaeaf"}}>2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row" style={{paddingTop:"5%"}}>
                                <div class="col-6 col-md-6 grey time-content-a">
								Callisto | Statement Release
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 05:00 PM (IST)</span>   
                                </div>
                                
                                <div class="col-6 col-md-6 grey time-content-a">
								Tech Talk - Emotional Intelligence is Important as AI
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 07:00 PM (IST)</span> 
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-right" class="timeline" style={{color:"#adaeaf"}}>
                            <div class="icon"></div>
                            <div class="date-content date-3">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month" >23rd March</span>
                                    <span class="year" style={{color:"#adaeaf"}}>2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                                <div class="col-6 col-md-6 grey time-content-a">
								Tech Talk - Quantum Machine Learning
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 06:00 PM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Regatta 2.0 | Submission Starts
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 AM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Hunt Nova | Submission Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59AM (IST)</span> 
                                </div>
                                {/* <div class="col-6 col-md-6 grey time-content-a">
								gdsgdsg
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'> 05:00 - 08:00 PM</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Hunt Nova | Submission Ends
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'>11:59 PM</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Arcanum | Event Starts
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'>12:00 AM</span> </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Arcanum | Event Ends
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'>11:59 PM</span> 
                                </div> */}
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-left" class="timeline" style={{color:"#adaeaf"}}>
                            <div class="icon"></div>
                            <div class="date-content date-4">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">24th March</span>
                                    <span class="year" style={{color:"#adaeaf"}}>2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                                <div class="col-6 col-md-6 grey time-content-a">
								Clipped | Submission Starts
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 AM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Arcanum - Treasure Hunt
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 09:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Tech TalK - Women In Foss
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 06:30 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Tinker It | Submissions Starts
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 AM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Callisto | Submission Starts
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 AM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Regatta 2.0 | Submission Ends 
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59 PM (IST)</span> 
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-right" class="timeline">
                            <div class="icon"></div>
                            <div class="date-content date-5">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">25th March</span>
                                    <span class="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                                <div class="col-6 col-md-6 grey time-content-a">
								Code Naari
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 08:00 PM (IST)</span>   
                                </div>
                                
                               
                                <div class="col-6 col-md-6 grey time-content-a">
								Callisto | Submission Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59 PM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Trash Bot | Submission Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Tinker It | Submission Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Tech Talk - Autonomous Robots
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 07:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Clipped | Submission Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 11:59PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								FLIPR Hackathon Begins
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 09:00 PM (IST)</span> 
                                </div>
                              </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-left" class="timeline">
                            <div class="icon"></div>
                            <div class="date-content date-6">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">26th March</span>
                                    <span class="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                                <div class="col-6 col-md-6 grey time-content-a">
								Workshop - Machine Learning with django
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'>12:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Tech Talk - Cloud Computing
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 06:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Squiz Game
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 09:00 PM (IST)</span> 
                                </div>
                                {/* <div class="col-6 col-md-6 grey time-content-a">
								Clipped | Submission Starts
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'> 12:00 AM </span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Trash Bot | Submission Ends
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								<span className='dati'> 11:59 PM</span> 
                                </div> */}
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div data-aos="fade-right" class="timeline">
                            <div class="icon"></div>
                            <div class="date-content date-7">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">27th March</span>
                                    <span class="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                            <div class="row">
                            <div class="col-6 col-md-6 grey time-content-a">
								Workshop - IOT in House Automation
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 12:00 PM (IST)</span>   
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Closing Ceremony
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 09:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								Result Declaration
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'> 09:00 PM (IST)</span> 
                                </div>
                                <div class="col-6 col-md-6 grey time-content-a">
								FLIPR Hackathon Ends
                                </div>
                                <div class="col-6 col-md-4 grey time-content-a">
								<span className='dati'>08:59PM (IST)</span> 
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        

                    </div>
</div>


    
</div></section>

</>)
}

export default Freequote

