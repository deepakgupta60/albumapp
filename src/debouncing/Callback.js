import React,{ Fragment, useCallback, useState } from "react";

const ListCounter=React.memo(({counter, handleCounterIncrement})=>{
    return(<>
    {counter.map((count, index)=>{
        return(<Fragment key={index}>
                <button onClick={()=>{handleCounterIncrement(index)}}>Counter {index+1}</button>
                <p>{index+1} -{count} </p>
        </Fragment>)
    })}
    </>)
})

const Callback=()=>{
    const [counter, setCounter]=useState([0,0,0,0]);
    
    const handleCounterIncrement=(index)=>{
        setCounter((prevValue)=>{
            const newCounter =[...prevValue];
            newCounter[index]++;
            return newCounter
        })
    } // if this is empty means it will run only once..
    return(<>
    <ListCounter counter={counter} handleCounterIncrement={handleCounterIncrement}/>

    </>)
}

export default Callback;

// import { Fragment, useCallback, useState } from "react";

// const ListCounter=({counter, handleCounterIncrement})=>{
//     return(<>
//     {counter.map((count, index)=>{
//         return(<Fragment key={index}>
//                 <button onClick={()=>{handleCounterIncrement(index)}}>Counter {index+1}</button>
//                 <p>{index+1} -{count} </p>
//         </Fragment>)
//     })}
//     </>)
// }

// const Callback=()=>{
//     const [counter, setCounter]=useState([0,0,0,0]);
    
//     const handleCounterIncrement=(index)=>{
//         setCounter((prevValue)=>{
//             const newCounter =[...prevValue];
//             newCounter[index]++;
//             return newCounter
//         })
//     } // if this is empty means it will run only once..
//     return(<>
//     <ListCounter counter={counter} handleCounterIncrement={handleCounterIncrement}/>

//     </>)
// }

// export default Callback;


// this is create a performance issue because of multiple renderes.
// memoize -- store the entire function in memory..
// memoization of function is callback


// use call back > concept you memoize the entire function in the memory
// one more re rendering happen, it will take it from the memory, multiple, 

// in use effect dependency 


// One more thing, whenever using useCallback, make sure you are using useMemo -- check whether their prop change or not..

// React.memo() -> what is the job of this.. memoizis the component, what do you mean by that, when in change happen in counter prop, and handleincrement prop, there is always change the counter.
// Technically > memoization the entire content inside the mmeory.. 
// useCallback - is a hook which memoization of concept..s
// saving the entire function defination..>>> saving the cost, whether it's change or not..


// Material UI > don't need to learn, how to use the documentations.
// albums create the previous class. 