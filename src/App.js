import React, {useEffect, useRef, useState} from "react";
import FCuser from "./FCuser";
import Album from "./Album";
import { Routes,Route } from "react-router-dom";
import Photos from "./Photos";
import ApiCall from "./ApiCall";


const App = ()=>{
  
  // const [show, setShow]=useState(true);
  // const inputRef = useRef(null)
  // const [inputt, setinputt]=useState();
  // useEffect(()=>
  // {
  //   inputRef?.current?.focus()
  // },[])
  return(
    <>

{/* <Routes>
  <Route path="/" element={<Album/>}/>
  <Route path="/photos/:id" element={<Photos/>}/>
</Routes> */}

<ApiCall/>
    {/* <Album/> */}

    {/* <input type="text" ref={inputRef} /> */}
{/* <button onClick={()=>setShow(!show)}>Hide and show</button>
{
  show?<FCuser/>:null
} */}
  
    </>
  )
}

export default App;