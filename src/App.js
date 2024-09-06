import { useState } from "react";
// import Callback from "./debouncing/Callback";
// import Debounce from "./debouncing/Debounce";
// import Navbar from "./Navbar";

import Album from "./Album";
const App = ()=>{
  
  // const originalArray =[1,2,3,4,{a:3}];
  // const shallowCopy = [...originalArray]
  // originalArray[0]=20

  // console.log("Shallow copy not original one copied: ",shallowCopy);
  // console.log("Original One: ",originalArray);

  return(<>

    <Album/>
  {/* <Navbar/> */}

    {/* <Callback/> */}
    {/* <Debounce/> */}

  </>)
}

export default App;

// import { useState } from "react";
// import A from "./component/A";
// import B from "./component/B";
// import C from "./component/C";
// import D from "./component/D";
// const App = ()=>{
  
//   const [users, setusers]=useState([]);
//   const [comment, setComment]=useState([]);
//   // let [valA, setValueA]=useState([]);
  
//   // const getApiA=({apiDataA})=>{
//   //   return setValueA(apiDataA)
//   // }
  

//   function updateUsers(users)
//   {
//     setusers(users)
//   }
//   function updateComment(comment)
//   {
//     setComment(comment)
//   }
//   // console.log(users)
//   return(
//     <>
//     {/* <A getApiA={getApiA} /> */}
//     {/* <C valA={valA}/> */}

//     <A updateUsers={updateUsers} />
//     <B updateComment={updateComment} />
//     <C users={users}  comment={comment}/>
//     </>
//   )
// }
// export default App;



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