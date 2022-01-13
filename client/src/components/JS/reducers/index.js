import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  userReducer : userReducer,
  productReducer  : productReducer,
});

export default rootReducer;
