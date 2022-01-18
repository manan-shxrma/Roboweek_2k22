import React from "react"

function navbar(){
    return(<><div className="pre-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-8 col-7">
          <ul className="info">
            <li><a href="/"><i className="fa fa-envelope"></i>digimedia@company.com</a></li>
            <li><a href="/"><i className="fa fa-phone"></i>010-020-0340</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-4 col-5">
          <ul className="social-media">
            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
            <li><a href="/"><i className="fa fa-behance"></i></a></li>
            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
            <li><a href="/"><i className="fa fa-dribbble"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            
            <a href="index.html" className="logo">
              <img src="assets/images/robo black.png" style={{width:"30%"}} alt="" />
            </a>
            
            <ul className="nav">
              <li className="scroll-to-section"><a href="/top" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="/about">About</a></li>
              <li className="scroll-to-section"><a href="/services">Events</a></li>
              <li className="scroll-to-section"><a href="/portfolio">Timeline</a></li>
              <li className="scroll-to-section"><a href="/blog">Prizes</a></li>
              <li className="scroll-to-section"><a href="/contact">Sponsors</a></li> 
              <li className="scroll-to-section"><div className="border-first-button"><a href="/contact">Register</a></div></li> 
            </ul>        
            <a href="/" className='menu-trigger'>
                <span>Menu</span>
            </a>
            
          </nav>
        </div>
      </div>
    </div>
  </header></>)
}

export default navbar