import { SET_USER } from "../constants/action-types";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === SET_USER) {
    return  {
      ...state,
      user: action.payload,
      isAuthenticated: true,
    };
  } 
  return state;
}

export default userReducer;
