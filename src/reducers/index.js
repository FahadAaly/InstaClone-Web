import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import successMessageReducer from "./successReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  postReducer: postReducer,
  errorReducer: errorReducer,
  successMessageReducer: successMessageReducer,
});

export default rootReducer;
