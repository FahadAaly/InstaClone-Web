import {
    GET_ALL_POSTS,
    GET_MY_POSTS,
    POST_LIKE_SUCCESS,
    POST_UNLIKE_SUCCESS,
    CREATE_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS,
    DELETE_POST_SUCCESS,
} from "../constants/action-types";

const initialState = {
    posts: [],
    userPosts: [],
};

const postReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_POSTS) {
        return {
            ...state,
            posts: action.payload,
        };
    }
    if (action.type === GET_MY_POSTS) {
        return {
            ...state,
            userPosts: action.payload,
        };
    }
    if (action.type === POST_LIKE_SUCCESS) {
        const newPosts = [...state.posts];
        const index = newPosts.findIndex(
            (post) => post._id == action.payload._id
        );
        if (index > -1) {
            newPosts[index] = action.payload;
        } else {
            return newPosts;
        }
        return {
            ...state,
            posts: newPosts,
        };
    }
    if (action.type === POST_UNLIKE_SUCCESS) {
        const newPosts = [...state.posts];
        const index = newPosts.findIndex(
            (post) => post._id == action.payload._id
        );
        if (index > -1) {
            newPosts[index] = action.payload;
        } else {
            return newPosts;
        }
        return {
            ...state,
            posts: newPosts,
        };
    }
    if (action.type === CREATE_COMMENT_SUCCESS) {
        const newPosts = [...state.posts];
        const index = newPosts.findIndex(
            (post) => post._id == action.payload._id
        );
        if (index > -1) {
            newPosts[index] = action.payload;
        } else {
            return newPosts;
        }
        return {
            ...state,
            posts: newPosts,
        };
    }
    if (action.type === DELETE_COMMENT_SUCCESS) {
        const newPosts = [...state.posts];
        const index = newPosts.findIndex(
            (post) => post._id == action.payload._id
        );
        if (index > -1) {
            newPosts[index] = action.payload;
        } else {
            return newPosts;
        }
        return {
            ...state,
            posts: newPosts,
        };
    }
    if (action.type === DELETE_POST_SUCCESS) {
      const newPosts = [...state.posts];
      const index = newPosts.findIndex(
          (post) => post._id == action.payload._id
      );
      if (index > -1) {
          newPosts.splice(index, 1);
      } else {
          return newPosts;
      }
      return {
          ...state,
          posts: newPosts,
      };
  }
    

    return state;
};

export default postReducer;
