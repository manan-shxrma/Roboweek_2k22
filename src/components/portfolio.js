import React from "react"

function portfolio(){
    return(<>
        <div id="portfolio" className="our-portfolio section">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
          <h6>Our Portofolio</h6>
          <h4>See Our Recent <em>Projects</em></h4>
          <div className="line-dec"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
    <div className="row">
      <div className="col-lg-12">
        <div className="loop owl-carousel">
          <div className="item">
            <a href="/">
              <div className="portfolio-item">
              <div className="thumb">
                <img src="assets/images/portfolio-01.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
            </a>  
          </div>
          <div className="item">
            <a href="/">
              <div className="portfolio-item">
              <div className="thumb">
                <img src="assets/images/portfolio-01.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
            </a>  
          </div>
          <div className="item">
            <a href="/">
              <div className="portfolio-item">
              <div className="thumb">
                <img src="assets/images/portfolio-02.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
            </a>  
          </div>
          <div className="item">
            <a href="/">
              <div className="portfolio-item">
              <div className="thumb">
                <img src="assets/images/portfolio-03.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
            </a>  
          </div>
          <div className="item">
            <a href="/">
              <div className="portfolio-item">
              <div className="thumb">
                <img src="assets/images/portfolio-04.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
            </a>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>)
}

export default portfolio