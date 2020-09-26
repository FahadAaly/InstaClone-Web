import { GET_ALL_POSTS } from "../constants/action-types";
import { request } from "../http-helper";

export const getAllPosts = () => {
    return (dispatch) => {
        return request("/allpost", "get", "", true).then((res) => {
            const { data } = res;
            dispatch({ type: GET_ALL_POSTS, payload: data });
        });
    };
};
