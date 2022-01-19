import React from "react"
import Topsection from "./components/topsection"
import Aboutsection from "./components/aboutsection";
import Services from "./components/services"
import Freequote from "./components/Freequote";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog"
import Contact from "./components/contactus"
import Navbar from "./components/navbar"
import './App.css';

function App(){
  return(<div>

          <Navbar />
          <Topsection />
          <Aboutsection />
          <Services />
          <Freequote />
          <Portfolio />
          <Blog />  
          <Contact />
         

</div>)
}

export default App;
