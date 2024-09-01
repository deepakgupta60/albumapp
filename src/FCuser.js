import React,{useEffect, useState} from "react"

const FCuser =()=>{
  
  const [count, setcount]=useState(0);
  useEffect(()=>{
    console.log("use effect called")
    return()=>{
        console.log("use component unmount, leaving a component");
    }
},[count])
  
  return(
    <>
    
  <button onClick={()=>setcount((prev)=>prev+1)}>Counting value:  {count}</button>
    </>
  )
}
export default FCuser;