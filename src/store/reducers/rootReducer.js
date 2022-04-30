import {combineReducers} from "redux";
import pointsReducer from "./points";
import requestReducer from "./requests";
import {appReducer} from "./app";

export default combineReducers({
    requestReducer,
    pointsReducer,
    appReducer
})