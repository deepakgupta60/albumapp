import { Fragment, useState } from "react";

const ListCounter=({counter, handleCounterIncrement})=>{
    return(<>
    {counter.map((count, index)=>{
        return(<Fragment key={index}>
                <button onClick={()=>{handleCounterIncrement(index)}}>Counter {index+1}</button>
                <p>{index+1} -{count} </p>
        </Fragment>)
    })}
    </>)
}

const Callback=()=>{
    const [counter, setCounter]=useState([0,0,0,0]);
    
    const handleCounterIncrement=(index)=>{
        setCounter((prevValue)=>{
            const newCounter =[...prevValue];
            newCounter[index]++;
            return newCounter
        })
    }
    return(<>
    <ListCounter counter={counter} handleCounterIncrement={handleCounterIncrement}/>

    </>)
}

export default Callback;