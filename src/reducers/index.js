import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import successMessageReducer from "./successReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  errorReducer: errorReducer,
  successMessageReducer: successMessageReducer,
});

export default rootReducer;
