import userReducer from "./user-reducer";
import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer
})

