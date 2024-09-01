import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const Album = () => {
    const [albumd, setalbumd] = useState([]);

    const handlefetchalbum = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums');
        let data = await response.json();
        setalbumd(data)
        console.log(data)
    }

    useEffect(() => {
        handlefetchalbum();
    }, [])

    return (<>

        {
            albumd.map((data, idx) => {
               return <Link to={`/photos/${data.id}`} key={idx}><p>{data.title}</p></Link>
            })
        }

    </>)
}

export default Album;