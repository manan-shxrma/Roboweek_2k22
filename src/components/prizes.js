import React from "react"
import "../css/prizes.css"
import AOS from 'aos';

// Import Swiper styles


AOS.init();



function prizes(){
    return(<> 
                <section class="prizes"><div className="container">
                <div className="row">
    <div className="col-lg-5">
      <div data-aos="fade-right" className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
        <h6>Prizes</h6>
        <h4 style={{color:"white"}}>schwagy & sassy<em> Roboweek</em></h4>
        <div class="line-dec"></div> 
      </div>
    </div>
  </div></div>



  <div id="demo" class="carousel slide" data-ride="carousel">
   <div class="carousel-inner">

     {/* <-------------Hunt nova-----------> */}
     <div class="carousel-item active">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Hunt Nova</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
      <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>
  {/* <-------------Regatta 2.0-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Regatta 2.0</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>

  {/* <-------------Callisto-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Callisto</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32"}} class='pricing-deco'>
      {/* <img className="medalImg" alt="medal1"  src="assets/images/medal_3.svg"/> */}
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520",height:"50%"}} class='pricing-deco'>
      {/* <img className="medalImg" alt="medal1"  src="assets/images/medal_1.svg"/> */}
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9" }} class='pricing-deco'>
      {/* <img className="medalImg" alt="medal1"  src="assets/images/medal_2.svg"/> */}
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
     </div> 
    </div>
  </div>

     {/* <-------------Trash Bot-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Trash Bot</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>

    {/* <-------------Tinker it-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Tinker It</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>

   {/* <-------------Design wars 2.0-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Design Wars 2.0</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>

   {/* <-------------Code Naari-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Code Naari</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>


   {/* <-------------Code Play-----------> */}
  <div class="carousel-item">
   
         <h3 style={{color:"#fff", textAlign:"center",fontSize:"4rem"}}>Code Play</h3>
   <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="third-prize">
      <h2>2nd Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>3 months free hosting.</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520", paddingBottom:"200px"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
        <div class="first-prize">
      <h2>Winners</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"80px"}}>
        <li class='pricing-feature'>Free D2C Pro membership worth Rs. 999, giving them free access to high quality courses</li>
        <li class='pricing-feature'>12 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul></div>
      </div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9", paddingBottom:"200px" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div class="second-prize">
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list' style={{paddingLeft:"20px", paddingRight:"20px"}}>
        <li class='pricing-feature'>Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each</li>
        <li class='pricing-feature'>6 months free hosting</li>
        <li class='pricing-feature'>Async online mock interviews with unlimited practice</li>
      </ul>
      </div>
     </div> 
    </div>
  </div>


    
  {/* <div class="carousel-item" style={{display:"none"}}>
  <h3 style={{color:"#fff", textAlign:"center"}}>Code Naari</h3>
  <div style={{paddingTop:"3%"}} class='pricing pricing-palden'>
    <div  class='pricing-item'>
      <div style={{background:"#CD7F32"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/3rd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <h2>second-prize Runners Up</h2>
      <ul class='pricing-feature-list'>
        <li class='pricing-feature'>1 GB of space</li>
        <li class='pricing-feature'>Support at $25/hour</li>
        <li class='pricing-feature'>Limited cloud access</li>
      </ul>
      
    </div>
    <div class='pricing-item pricing__item--featured'>
      <div style={{background:"#DAA520",height:"50%"}} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/1st.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='10px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <div>
      <h2>Winners</h2>
      <ul class='pricing-feature-list'>
        <li class='pricing-feature'>5 GB of space</li>
        <li class='pricing-feature'>Support at $5/hour</li>
        <li class='pricing-feature'>Full cloud access</li>
      </ul></div>
      
    </div>
    <div class='pricing-item'>
      <div style={{background:"#A9A9A9" }} class='pricing-deco'>
      <img className="medalImg" alt="medal1"  src="assets/images/2nd.svg"/>
        <svg class='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
      </div>
      <h2>Runners Up</h2>
      <ul class='pricing-feature-list'>
        <li class='pricing-feature'>10 GB of space</li>
        <li class='pricing-feature'>Support at $5/hour</li>
        <li class='pricing-feature'>Full cloud access</li>
      </ul>
     </div> 
    </div>
    </div> */}





</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>


  <div className="container">
                <div className="row">
    <div className="col-lg-5">
      <div data-aos="fade-right" className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
        
        <h4 style={{color:"white"}}>All participants</h4>  
      </div>
    </div>
  </div>
  <div style={{paddingLeft:"5%"}}>
    <div style={{background: "rgba(0, 0, 0, 0.5)", borderRadius:"25px",color:"#fff" ,padding:"10px"}}  className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
               
               <img style={{width:"80%", height:"80%"}} alt="none" src="assets/images/Graduation_Monochromatic.svg" />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <ul style={{padding: "10% 10%"}}>
                   <li className="allparli" >5-Year free upgrades for participants</li>
                   <li className="allparli" >Provide 10% discount coupons on all the apparels</li>
                   <li className="allparli" >Provide 10% discount coupons on all the apparels</li>
                   <li className="allparli" >1 month free hosting on Expansion,</li>
                   <li className="allparli" >25% off the first year of 1Password Families</li>
                   <li className="allparli" >Free course access on Full Coding Interview Prep Course</li>
                   <li className="allparli" >90-day extended trial promo of Balsamiq Cloud</li>
                 </ul>
      </div>
    </div>
  </div>

  


 
    
</div>
  
</section>



    </>)
}

export default prizes