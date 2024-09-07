import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../store/action";



const CounterOne=()=>{
   const count = useSelector((state)=>state.counterReducer.count);     // use selector is hook to read a data from a hook, 
   const dispatch = useDispatch();
   
   
   const handleIncrement = ()=>{
    dispatch(incrementCount())
   }
   
   const handleDecrement=()=>{
    dispatch(decrementCount())
   } 
   return(
        <>
        <div>

            <button onClick={handleIncrement}>
                +
            </button>
            <span>{count}</span>
            <button onClick={handleDecrement}>
                -
            </button>
        </div>
        </>
    )
}

export default CounterOne;