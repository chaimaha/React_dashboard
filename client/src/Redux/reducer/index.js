import { combineReducers } from "redux";
import userReducer from "./user";
import CourbeReducer from "./Courbe";
const rootReducer = combineReducers({ userReducer, CourbeReducer });
export default rootReducer;
