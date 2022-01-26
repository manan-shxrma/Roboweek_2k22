import React,{useState, useEffect} from "react"
import Outline from "./components/outline"
import './App.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
const override = css`
  
  margin: 0 auto;
  border-color: red;
  text-align: center;
  background-color: #081b24;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  `;
function App(){
  const [loading, setLoading]=useState(false);
  useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false)
  }, 9000);
    }
  , []);
  return(
  <>
          
  <div>
    {
      loading ?
      <ScaleLoader color={'#9B9B9B'} loading={loading} css={override} size={30} />
      :
          <Outline />
    }

</div>
</>)
}

export default App;
