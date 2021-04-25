import { LOGIN_SUCCESS, LOGUT_SUCCESS } from "../constants/action-types";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    return  {
      ...state,
      user: action.payload,
      isLoggedIn: true,
      isLoading: false,
    };
  }
  if(action.type === LOGUT_SUCCESS) {
    return {
      ...state,
      isLoggedIn: false,
    }
  } 
  return state;
}

export default userReducer;
