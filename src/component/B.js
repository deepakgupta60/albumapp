import { useEffect } from "react";

const B= ({updateComment})=>{
    
    const fetchComment=async()=>{
        const respone = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await respone.json();
        updateComment(data);
    }
    

    useEffect(()=>{
        fetchComment()
    },[])
    return(<>
    
    </>)
}

export default B;