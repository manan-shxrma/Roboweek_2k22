import React from "react"
import {navItems,socialMedia,} from '../js/navFootData';
import '../../src/App.css'
import '../css/outline.scss'
import {  useParams } from "react-router-dom";
import postcontent from "./compdetaildata"
import "../css/compdetail.css"
import '../css/outline.scss'


 let instructions="";
 let instructions2="";
 let instructions3="";
 let instructions4="";
 let instructions5="";
 let title="";
 let prerequisites="";
 let prizes="";
 let judging1="";
 let judging2="";
 let judging3="";
 let image="";
 let submission1="";
 let submission2="";
 let srcDoc="";
 let srcReg="";
 function Outline()  {
 
    let params = useParams();
    console.log(postcontent[0])
    console.log(params)
    console.log(postcontent[0].name)
    let arraylen= postcontent.length;
    for(let i = 0 ; i < arraylen; i++) {
       if(postcontent[i].name===params.id)
       { instructions=postcontent[i].instructions;
        instructions2=postcontent[i].instructions2;
        instructions3=postcontent[i].instructions3;
        instructions4=postcontent[i].instructions4;
        instructions5=postcontent[i].instructions5;
          title=postcontent[i].title;
          prerequisites=postcontent[i].prerequisites;
          prizes=postcontent[i].prizes;
          judging1=postcontent[i].judging1;
          judging2=postcontent[i].judging2;
          judging3=postcontent[i].judging3;
          image=postcontent[i].image;
          submission1=postcontent[i].submission1;
          submission2=postcontent[i].submission2;
          srcDoc=postcontent[i].srcDoc;
          srcReg=postcontent[i].srcReg
        }
    
    else{
        console.log("mismatch")
        }
    }


    
    
    
        return(<>
        
        
        
        <nav class="posts-nav navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{"backgroundColor": "#011B2C"}}>
                        
        <a class="navbar-brand" href="/#home">
        <img src="../assets/images/logo-2.png" style={{width :"100%"}} width="30" height="30" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/#home"> &larr; Back to Home <span class="sr-only">(current)</span></a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="/#services">Events</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link" href="/#contact">Contact</a>
            </li> */}
            </ul>
        </div>
        </nav>







{/* start */}


                {/* <div class="compsection">
        <div class="container">
            <div class="content-section">
                <div class="title">
                    <h1>{title}</h1><br />
                </div>
                <div className="comp-sec-det">
            
            <div class="card" style={{"width": "18rem"}}>
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text"><button  class="cta"> <span class="shadow"></span> <span class="edge"></span><span class="front text">    <a target="_blank" href={srcDoc}> Documentation</a></span></button></p>
                            <p class="card-text"><button  class="cta"> <span class="shadow"></span> <span class="edge"></span><span class="front text"><a target="_blank" href={srcReg}> Register here! </a></span></button></p>
                        </div>
                        </div>
                <div class="content">
                    <ul>
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-book-reader" aria-hidden="true"></i> Instructions</h5>
                        <p>{instructions}<br />{instructions2}<br />{instructions3}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"12px",paddingTop:"3px"}} class="fa fa-file-import" aria-hidden="true"></i>Submission</h5>
                        <p>{submission1}<br />{submission2}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-gavel" aria-hidden="true"></i>Judging criteria</h5>
                        <p>{judging1}<br />{judging2}<br />{judging3}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-desktop" aria-hidden="true"></i>Prerequisites</h5>
                        <p>{prerequisites}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"16px",paddingTop:"3px"}} class="fa fa-award" aria-hidden="true"></i>Prizes</h5>
                        <p>{prizes}</p>
               </li><br />
               
                </ul>  
                    
                </div>
                </div>
            </div>
            
        </div>
        </div>



end */}

{/* new card start */}
<div class="container mt-5" style={{paddingTop: '60px'}}>
  <div class="row">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main" >
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        {/* <div class="blog-card__head">
          <span class="date__box">
           {title}
          </span>
        </div> */}
        <div class="blog-card__info">
        <img src={image} class="card-img-top" height={'400px'} alt="..." />
          <h1 class="work">{title}</h1>
          <br></br>
          <div class="content">
                    <ul>
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-book-reader" aria-hidden="true"></i> Instructions</h5>
                        <p className="compet-name2">{instructions}<br />{instructions2}<br />{instructions3}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"12px",paddingTop:"3px"}} class="fa fa-file-import" aria-hidden="true"></i>Submission</h5>
                        <p className="compet-name2">{submission1}<br />{submission2}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-gavel" aria-hidden="true"></i>Judging criteria</h5>
                        <p className="compet-name2">{judging1}<br />{judging2}<br />{judging3}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"8px",paddingTop:"3px"}} class="fa fa-desktop" aria-hidden="true"></i>Prerequisites</h5>
                        <p className="compet-name2">{prerequisites}</p>
               </li><br />
               <li> <h5 className="compet-name"><i style={{paddingRight:"16px",paddingTop:"3px"}} class="fa fa-award" aria-hidden="true"></i>Prizes</h5>
                        <p className="compet-name2">{prizes}</p>
               </li><br />
               
                </ul>  
                    
                </div>
          <br></br>
          <div class="col-md-6">
            <a target="_blank" href={srcDoc} class="btn btn--with-icon" style={{marginRight: '16px', marginBottom: '16px'}}><i class="btn-icon fa fa-long-arrow-right"></i> Documentation</a>
            <a target="_blank" href={srcReg} class="btn btn--with-icon" style={{marginRight: '16px', marginBottom: '16px'}}><i class="btn-icon fa fa-long-arrow-right"></i> Register here! </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

<section class="detail-page">
  <div class="container mt-5">
    
  </div>
</section>
{/* new card done */}

        {/* footer */}
        <footer>
                    <section id="contact">
                        <a href="/" name="contact"></a>
                        <div className="footer-content" style={{}}>
                            <div class="footer-top">
                                <button className="back-to-top" type="button" onClick={() => {window.location.href = "#"}}>
                                    Back to the top <i class="fa fa-angle-up"></i>
                                </button>
                            </div>
                            <div className="footer-mid">
                                <div className="f-content">

                                    <div className="f-contact col-md-6" style={{paddingLeft:"15%"}}>

                                        <div className="f-nav">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/#about">About Us</a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://robosocnith.com/current_members.html">Our Team</a></li>
                                                <li><a href="/#sponsors">Sponsors</a></li>
                                            </ul>
                                            <ul className="f-nav-ul">
                                                <li><a href="https://discord.com/invite/vHz3tyjyke">Discord</a></li>
                                                <li><a href="/#timeline">Timeline</a></li>
                                                <li><a href="mailto:robonith@gmail.com ">Help</a></li>
                                            </ul>
                                        </div>
                                        <div className="footer-copyright-info" style={{padding: "10px 75px 0 0", marginTop: "auto", color: "#e7e8e9"}}>
                                            <div className="footer-copyright-right" >
                                            Copyright © 2022 Robotics Society, NIT Hamirpur.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="f-logo" style={{display: "flex", width: "30%", marginRight:"40%"}}> <a style={{width: "100%", marginTop: "auto"}} href="https://robosocnith.com/">
                                        <img src={"../assets/images/robosoc.png" }  alt="logo" className="logo-footer" /></a>
                                        {/* <img src={"assets/images/logo-2.png"}  alt="logo" className="logo-footer" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom" style={{background: "#fff" , marginLeft : "auto", marginRight: "auto", maxWidth: "960px", padding: "0 0", width: "100%", background:" rgb(238, 238, 238)"}}>
                            <div >
                            <div className="row" style={{ maxWidth: "100vw", padding: "20px 0 5px", display: "flex", justifyContent: "space-between",}}>
                                <div className="col-lg-8 col-md-8 col-sm-12 f-bottom" style={{display: "flex", paddingTop: "5px"}}>
                                    <div className="f-bottom-left" class={{fontSize: "14px", /* margin-bottom: 0.5rem; */ fontFamily: 'Poppins', color: "rgba(0, 0, 0, 0.85)", fontWeight: "400"}}>
                                        

                                        <img  alt=""  src={"../assets/images/logo-2.png"} style={{ width: "162px",padding:"0 0 0 0"}}></img>

                                        {/* <p>Robotics Society</p> */}
                                    </div>
                                    <div className="f-bottom-right downpara" style={{paddingRight:"15%"}}>
                                        <p style={{ textAlign:"right"}}>
                                            Made with ❤️ by humans
                                            {/* <a className="yellow-text underline" href="https://scriptindia.org" rel="noreferrer"  target="_blank"> Robosocnith</a> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 f-media" style={{textAlign:"right"}}>
                                    <p>
                                        {socialMedia.map((item, index) => {
                                        return (
                                            <a href={item.socialLink} style={{marginLeft:"30px"}} target="_blank" rel="noreferrer" >
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
