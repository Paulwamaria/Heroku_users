import {combineReducers} from "redux";
import userReducer from "./index";



const mainReducers = combineReducers({
    User:userReducer,
   
})


export default mainReducers;