import { useState } from "react";
import A from "./component/A";
import B from "./component/B";

const App = ()=>{
  
  let [val, setVal]=useState();
  let [text, setText]=useState();

  const getValue = (valueA,text)=>{
    setVal(valueA)
    setText(text)
  }
  return(
    <>
    <A getValue={getValue}/>
    <B val={val} text={text} />

    </>
  )
}
export default App;



// import React, {useEffect, useRef, useState} from "react";
// import FCuser from "./FCuser";
// import Album from "./Album";
// import { Routes,Route } from "react-router-dom";
// import Photos from "./Photos";
// import ApiCall from "./ApiCall";


// const App = ()=>{
  
//   const [todo, setTodos]=useState([]);
//   const [val, setVal]=useState('');
//   // const [show, setShow]=useState(true);
//   // const inputRef = useRef(null)
//   // const [inputt, setinputt]=useState();
//   // useEffect(()=>
//   // {
//   //   inputRef?.current?.focus()
//   // },[])

//   const handleClick=()=>{
//     setTodos([val,...todo])
//   }
//   return(
//     <>

//     <div className="App">


//     <input onChange={(e)=>setVal(e.target.value)} placeholder="enter a value"/>
//     <button onClick={handleClick}>Submit</button>
//     </div>

// {
//   todo.map((data,idx)=>{
//     return <p key={data}>{data}</p>
//   })
// }


// {/* <Routes>
//   <Route path="/" element={<Album/>}/>
//   <Route path="/photos/:id" element={<Photos/>}/>
// </Routes> */}

// {/* <ApiCall/> */}
//     {/* <Album/> */}

//     {/* <input type="text" ref={inputRef} /> */}
// {/* <button onClick={()=>setShow(!show)}>Hide and show</button>
// {
//   show?<FCuser/>:null
// } */}
  
//     </>
//   )
// }

// export default App;