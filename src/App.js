import React from "react"
import Topsection from "./Components/topsection"
import Aboutsection from "./Components/aboutsection";
import Services from "./Components/services"
import Freequote from "./Components/Freequote";
import Portfolio from "./Components/portfolio";
import Blog from "./Components/blog"
import Contact from "./Components/contactus"
import Footer from "./Components/footer1"
import Navbar from "./Components/navbar"
import './App.css';




function App(){
  return(<div>
{/* ======= */}
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
