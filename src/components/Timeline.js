import React from "react"
import "../css/timeline.css"
import "../js/timeline.js"
import "../css/base.css"
import AOS from 'aos';
AOS.init();

function Timeline(){
  

     
        return(<><section id="timeline">
       
    <div  className="container mainbodyoftimeline mb-4" >
     <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
          <h6>Timeline</h6>
          <h4>How <em>Roboweek 3.0 will </em> work</h4>
          <div className="line-dec"></div>
        </div>
    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <h2 > Timeline will be available soon.</h2>
    </div>
        

        
      
       

        
</div>


    
</section>

</>)
}

export default Timeline

