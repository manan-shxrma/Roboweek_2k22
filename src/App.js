import React from "react";
import Outline from "./components/outline";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compdetail from "./components/compdetail"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route  exact path="/" element={<Outline />} />
        <Route  path="/post/:id" element={<Compdetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
