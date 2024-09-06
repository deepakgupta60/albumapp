import { useEffect, useState } from "react"

const Debounce =()=>{
    const [data, setData]=useState([])
    const handleFetchVideo=async()=>{
        try{
            const response = await fetch('https://content-xflix-backend.azurewebsites.net/v1/videos');
            const data = await response.json();
            setData(data)
            // console.log("Testing data: ",data)
        }catch(err)
        {
            console.log("Error: ",err)
        }
    }
    

    console.log(data)
    useEffect(()=>{
        handleFetchVideo();
    },[])

    return(
        <>

        </>
    )
}

export default Debounce