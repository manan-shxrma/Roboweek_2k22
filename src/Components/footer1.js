import React from "react"

function Footer(){
    return(<>
       <footer className="py-5 bg-style">
       <div class="container">
  <div class="row">
    <div class="col-lg-4 col-xl-5 col-md-12 col-sm-12 col-12">
   <p className="size-foot-txt">Let’s Create Something</p>
     <p className="text-center size-rob">Robotics Society</p>
     <p className="size-foot-txt">  NIT Hamirpur </p>
    </div>
    <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-6">
     <p className="con-info text-center">Contact Info</p>
     <p className="con-site text-center mt-4"><a href="https://robosocnith.com/">Robotics Website</a></p>
     <p className="con-site text-center"><a href="mailto: robonith@gmail.com">robonith@gmail.com</a></p>
    </div>
    <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-6">
    <p className="add-field text-center ">OUR WORKSTATION</p>
    <p className="add text-center ">NIT Hamirpur, Himachal Pradesh 177005</p>
    </div>
  </div>
  <div class="row ">
    <div class="col col-lg-2 col-xl-2 col-md-3 col-sm-3 col-xs-3">
      <img src="assets/images/robosoc.png" class="float-start img-fluid" alt="Robotics Society" />
    </div>
    <div class="col">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</div>

<div class="d-flex justify-content-between py-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><iframe class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></iframe></li>
        <li class="ms-3"><iframe class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></iframe></li>
        <li class="ms-3"><iframe class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></iframe></li>
      </ul>
    </div>
  </footer>
      </>)
}

export default Footer;