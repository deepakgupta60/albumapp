import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer";

const rootReducer=combineReducers({
    counterReducer,

    // combine all the reducer in one file, 
})

export const store =createStore(rootReducer)