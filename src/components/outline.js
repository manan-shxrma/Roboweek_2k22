import React from "react"
import Topsection from "./topsection"
import Aboutsection from "./aboutsection";
import Freequote from "./Timeline";
import {navItems,socialMedia,} from '../js/navFootData';
import Sponsors from "./sponsors";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Blog from "./blog"
import Contact from "./contactus"
import Competitions from "./competitions"
import Funevents from "./funevents"
import Techtalks from "./techtalks"
import Faq from "./Faq";
import '../../src/App.css'
import $ from "jquery"
import '../css/outline.scss'

class Outline extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
        // let currentPage = document.getElementById("page-name").textContent.toLowerCase();
        // this.setState({ page: currentPage });
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render(){
       
        return(<> 
                    <div className = "main-nav">
                    <nav id="nav__nav" >
                    
                        {this.state.width <= 1100 ?
                        <>
                        
                        
                        
                        <div id="addNavLogo"></div>
                                          
                        <button style={{float:"right",marginTop:"3%"}}  className="navbar-toggler nav-scrolled toggler-example" type="button" data-toggle="collapse"
                         data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="hamburger-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                        <div style={{paddingTop:"20%"}} className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <ul className="navbar-nav mr-auto">
                                {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item"><a className="nav-link" href={item.url}>{item.title}</a></li>
                                )
                                })}  
                            </ul>
                        </div>
                        </>
                        :
                        <>
                        <div id="addNavLogo"></div>
                        <div className="nav-comps">
                            <ul>
                                {navItems.map((item, index) => {
                                    return (<>
                                        <li key={index} className={ item.title.toLowerCase() === this.state.page && "nav-active" }><a href={item.url}>{item.title}</a></li>
                               </> )
                                })}
                            </ul>
                        </div>
                        </>
                        }
                    </nav>
                </div>
                    
                    <Topsection />
                    <Aboutsection />
                    <Competitions />
                    <Techtalks />
                    <Funevents />
                    <Freequote />
                    <Sponsors />
                    <Blog />  
                    <Contact />
                    <Faq />
                    
                               

                {/* footer */}
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
                                        <img src={"assets/images/robosoc.png"}   alt="logo" className="logo-footer" /></a>
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
                                        
                                        <img  alt=""  src={"assets/images/logo-2.png"} style={{ "width": "162px",paddingRight:"5%",paddingTop:"7%"}}></img>
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
            </>
         );
    }
}
 
export default Outline;