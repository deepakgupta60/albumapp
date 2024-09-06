import { useEffect, useState } from "react";

const A =({updateUsers})=>{
  
    // let [data, setData]=useState();
    // const handleApi=(getApiA)=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => getApiA(json))
    // }
  
    // getApiA(data)

    const fetchData =async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await response.json();
        updateUsers(data)
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    // console.log(data)
   
    return(
        <>
        
        </>
    )
}

export default A;