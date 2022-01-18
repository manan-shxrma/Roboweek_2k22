import React from "react"
import Topsection from "./components/topsection"
import Aboutsection from "./components/aboutsection";
import Services from "./components/services"
import Freequote from "./components/Freequote";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog"
import Contact from "./components/contactus"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import './App.css';



function App(){
  return(<div><div id="js-preloader" className="js-preloader">
  <div className="preloader-inner">
    <span className="dot"></span>
    <div className="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</div>
          <Navbar />
          <Topsection />
          <Aboutsection />
          <Services />
          <Freequote />
          <Portfolio />
          <Blog />  
          <Contact />
          <Footer />
</div>)
}

export default App;
