import React, { useEffect, useState } from "react";
import Outline from "./components/outline";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compdetail from "./components/compdetail"
import axios from 'axios';
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
text-align:center;
 background-color:#081b24;
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [items, setItems] = useState([])
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const getItems =  async () =>{
      const result = await axios (
        `https://lucid-pasteur-40c28b.netlify.app/` 
        // `http://localhost:3000/` 
        //change this url when using localhost to http://localhost:3000/
        )
      console.log(result.data)

      setItems(result.data)//sets the data to appear 
      setLoading(false) //stop loading when data is fetched
    }
    getItems()

  }, [])
 
  return (<>
    

      {
        loading ?
        <ScaleLoader color={'#eceef1'} loading={loading} css={override} size={150} />
        :
        <BrowserRouter>
        <Routes>
        <Route  exact path="/" element={<Outline />} />
        <Route  path="/post/:id" element={<Compdetail />} />
        </Routes>
      </BrowserRouter>
      }
       
</>
  );
}

export default App;
