import { SET_USER } from "../constants/action-types";

const initialState = {
  user: {},
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === SET_USER) {
    return  {
      ...state,
      user: action.payload,
      isLoggedIn: true,
    };
  } 
  return state;
}

export default userReducer;
