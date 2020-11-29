import { GET_ALL_POSTS, GET_MY_POSTS, POST_LIKE_SUCCESS, POST_UNLIKE_SUCCESS, MAKE_COMMENT_SUCCESS, SUCCESS_MESSAGE } from "../constants/action-types";
import { request } from "../http-helper";

export const getAllPosts = () => {
    return (dispatch) => {
        return request("/allpost", "get", "", true).then((res) => {
            const { data } = res;
            dispatch({ type: GET_ALL_POSTS, payload: data });
        });
    };
};

export const getMyPosts = () => {
    return (dispatch) => {
        return request("/mypost", "get", "", true).then((res) => {
            dispatch({ type: GET_MY_POSTS, payload: res.data });
        });
    };
};

export const likePost = (id) => {
    const body = {
        postId: id,
    }
    return (dispatch) => {
        return request("/like", "put", body, true).then((res) => {
            dispatch({ type: POST_LIKE_SUCCESS, payload: res.data });
        });
    };
}
export const unlikePost = (id) => {
    const body = {
        postId: id,
    }
    return (dispatch) => {
        return request("/unlike", "put", body, true).then((res) => {
            dispatch({ type: POST_UNLIKE_SUCCESS, payload: res.data });
        });
    };
}

export const makeComment = (text, postId) => {
    const body = {
        text: text,
        postId: postId,
    }
    return (dispatch) => {
        return request("/comment", "put", body, true).then((res) => {
            dispatch({ type: SUCCESS_MESSAGE, payload: res.message });
            dispatch({ type: MAKE_COMMENT_SUCCESS, payload: res.data });
        });
    };
}

export const deletePost = (postId) => {
    const body = {
        postId: postId,
    }
    return (dispatch) => {
        return request(`/deletepost/${postId}`, "delete", "", true).then((res) => {
            // dispatch({ type: SUCCESS_MESSAGE, payload: res.message });
            // dispatch({ type: MAKE_COMMENT_SUCCESS, payload: res.data });
            console.log('res', res);
        });
    };
}


