import { Box, Card, Grid2 } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

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

<Grid2 container spacing={"2"}>


        {
            albumd.map((data, idx) => {
               return (
               <Fragment key={data.id}>
                <Grid2 item xs={6} md={8}>
                
<Card variant="outlined"  sx={{padding:"10px"}} >{data.title}
                <Link href={"/photos"}>  <p>{data.title}</p> </Link>
                </Card>
                </Grid2>
               </Fragment>)
            })
        }
</Grid2>
    </>)
}

export default Album;