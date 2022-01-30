import React from "react"
import {navItems,socialMedia,} from '../js/navFootData';
import '../../src/App.css'
import '../css/outline.scss'
import {  useParams } from "react-router-dom";
import postcontent from "./compdetaildata"
import "../css/compdetail.css"


 let instructions="";
 let title="";
 let prerequisites="";
 let prizes="";
 let judging="";
 let image="";
 let submission="";
 
 function Outline()  {
 
    let params = useParams();
    console.log(postcontent[0])
    console.log(params)
    console.log(postcontent[0].name)
    let arraylen= postcontent.length;
    for(let i = 0 ; i < arraylen; i++) {
       if(postcontent[i].name===params.id)
       { instructions=postcontent[i].instructions;
          title=postcontent[i].title;
          prerequisites=postcontent[i].prerequisites;
          prizes=postcontent[i].prizes;
          judging=postcontent[i].judging;
          image=postcontent[i].image;
          submission=postcontent[i].submission;
        }
    
    else{
        console.log("mismatch")
        }
    }


    
    
       
        return(<>
        
        
        
        <nav class="posts-nav navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{"backgroundColor": "#011B2C"}}>
                        
        <a class="navbar-brand" href="/#home">
        <img src="../assets/images/logo-2.png" width="30" height="30" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#about">Events</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link" href="/#contact">Contact</a>
            </li>
            </ul>
        </div>
        </nav>










                <div class="compsection">
        <div class="container">
            <div class="content-section">
                <div class="title">
                    <h1>{title}</h1><br />
                </div>
                <div class="content"><ul>
               <li><i class="fa fa-book-reader" aria-hidden="true"></i>  <h5 className="compet-name">Instructions</h5>
                        <p>{instructions}</p>
               </li><br />
               <li><i class="fa fa-file-import" aria-hidden="true"></i> <h5 className="compet-name">Submission</h5>
                        <p>{submission}</p>
               </li><br />
               <li><i class="fa fa-gavel" aria-hidden="true"></i> <h5 className="compet-name">Judging criteria</h5>
                        <p>{judging}</p>
               </li><br />
               <li><i class="fa fa-desktop" aria-hidden="true"></i> <h5 className="compet-name">Prerequisites</h5>
                        <p>{prerequisites}</p>
               </li><br />
               <li><i class="fa fa-award" aria-hidden="true"></i> <h5 className="compet-name">Prizes</h5>
                        <p>{prizes}</p>
               </li><br />
                </ul>  
                    
                </div>
            </div>
            
        </div>
        </div>
        <footer>
                    <section id="contact">
                        <a href="/" name="contact"></a>
                        <div className="footer-content">
                            <div class="footer-top">
                                <button className="back-to-top" type="button" onClick={() => {window.location.href = "#"}}>
                                    Back to the top <i class="fa fa-angle-up"></i>
                                </button>
                            </div>
                            <div className="footer-mid">
                                <div className="f-content">
                                    <div className="f-contact">
                                        <div className="f-nav">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/#about">About Us</a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://robosocnith.com/current_members.html">Our Team</a></li>
                                                <li><a href="/#sponsors">Sponsors</a></li>
                                            </ul>
                                            <ul className="f-nav-ul">
                                                <li><a href="https://robosocnith.com/projects.html">Projects</a></li>
                                                <li><a href="/#timeline">Timeline</a></li>
                                                <li><a href="mailto:robonith@gmail.com ">Help</a></li>
                                            </ul>
                                        </div>
                                        <div className="footer-copyright-info">
                                            <div className="footer-copyright-right">
                                            Copyright © 2022 Robotics Society, NIT Hamirpur.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="f-logo"> <a href="https://robosocnith.com/">
                                        <img src={"../assets/images/robosoc.png" }  alt="logo" className="logo-footer" /></a>
                                        {/* <img src={"assets/images/logo-2.png"}  alt="logo" className="logo-footer" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 f-bottom">
                                    <div className="f-bottom-left">
                                        
                                        <img  alt=""  src={"../assets/images/logo-2.png"} style={{ "width": "162px",paddingRight:"5%",paddingTop:"7%"}}></img>
                                        {/* <p>Robotics Society</p> */}
                                    </div>
                                    <div className="f-bottom-right downpara">
                                        <p>
                                            Made with ❤️ by humans
                                            {/* <a className="yellow-text underline" href="https://scriptindia.org" rel="noreferrer"  target="_blank"> Robosocnith</a> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 f-media">
                                    <p>
                                        {socialMedia.map((item, index) => {
                                        return (
                                            <a href={item.socialLink} target="_blank" rel="noreferrer" >
                                                <i className={item.socialIcon}></i>
                                            </a>
                                        )
                                        })}
                                    </p>
                                </div>
                              </div>
                          </div>   
                        </div>
                    </section>
                </footer>


    
   </>)
    }



export default Outline;