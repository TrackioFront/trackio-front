import { combineReducers } from "redux";
import userReducer from "../slices/userSlice"

const rootReducers = combineReducers({
     user: userReducer
});

export default rootReducers