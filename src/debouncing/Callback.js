import React,{useState, Fragment} from "react"
const ListOfCounters=({counter, handleIncrementCounter})=>{
    return(
        <>
        {
        counter.map((count, index)=>{
            return (
                <Fragment key={index}>
                    <button onClick={()=>handleIncrementCounter(index)}> Counter {index+1}</button>
                    <p>Counter {index+1}-{count} </p>
                </Fragment>
            )
        })
        }
        </>
    )
}

const Callback = () => {
    const [counter, setCounter] = useState([0, 0, 0]);
    
    const handleIncrementCounter=(index)=>{
        setCounter((prevValue)=>{
            const newCounter = [...prevValue];
            newCounter[index]++;
            return newCounter;
        })
    }
    return (
        <>
            <ListOfCounters counter={counter} handleIncrementCounter={handleIncrementCounter} />
        </>
    )
}

export default Callback;