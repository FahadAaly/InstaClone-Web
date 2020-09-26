import { GET_ALL_POSTS } from "../constants/action-types";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_POSTS) {
    return  {
      ...state,
      posts: action.payload,
    };
  } 
  return state;
}

export default postReducer;
