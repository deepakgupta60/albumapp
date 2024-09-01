import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Photos =()=>{
    const [photo, setphoto]=useState([])
    const {id}=useParams();

    const handlephoto =async()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/photos');
        let data = await response.json();
        let filtered=data.filter((photo)=>photo.albumId===Number(id));        
        setphoto(filtered)
        console.log(filtered.length)
    }

    useEffect(()=>{
        handlephoto();
    },[])
    return(
        <>
test done
        {
            photo.map((data, idx)=>{
                return <img key={idx} height={30} src={data.thumbnailUrl}/>
            })
        }
        </>
    )
}

export default Photos