import React from "react"
function Footer(){
    return(<>
       <footer className="py-5 bg-style">
       <div class="container">
  <div class="row d-flex justify-content-xl-evenly justify-content-lg-evenly">
    <div class="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12 ">
   <p className="size-foot-txt">Let’s Create Something</p>
     <p className="text-center size-rob"><strong>Robotics Society</strong></p>
     <p className="size-foot-txt">  NIT Hamirpur </p>
    </div>
    <div class="col-lg-2 col-xl-2 col-sm-3 col-12 col-md-6 mb-4">
      <img src="assets/images/robosoc.png" class="float-start img-fluid" alt="Robotics Society" />
    </div>
  </div>
  <div class="row py-4">
   
    <div class="col-12 text-center col-xl-10 col-lg-10 col-md-12 col-sm-12">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12 col-12 m-4">
    <ul>
    <li className="d-flex con-info justify-content-start ml-4">Contact Info</li>
    <li className="d-flex con-site justify-content-start ml-4"><a href="https://robosocnith.com/">Robotics Website</a></li>
    <li className="d-flex con-site justify-content-start ml-4"><a href="mailto: robonith@gmail.com">robonith@gmail.com</a></li> 
    </ul>
    </div>
    <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12 m-4 ">
    <ul>
    <li className="d-flex justify-content-start ml-4 con-info">OUR WORKSTATION</li>
    <li className="d-flex justify-content-start ml-4 con-site">NIT Hamirpur,</li>
    <li className="d-flex justify-content-start ml-4 con-site">Hamirpur, Himachal Pradesh</li> 
    <li className="d-flex justify-content-start ml-4 con-site">177005</li>
    </ul> </div>
  </div>
</div>

<div class="d-flex justify-content-center align-items-center border-top">
      <div className="align-self-center">Made with &hearts;!!!</div>
    </div>
  </footer>
      </>)
}

export default Footer;