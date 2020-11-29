import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../actions/postActions";
import PostItem from "../components/PostItem";

const Home = ({ actions, posts, user }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        actions.getAllPosts();
    }, []);

    useEffect(() => {
        setData(posts);
    }, [posts]);

    const onHandleLikeDislike = (id, likeByUser) => {
        if (likeByUser) {
            actions.unlikePost(id);
        } else {
            actions.likePost(id);
        }
    };

    const makeComment = (text, postId) => {
        actions.makeComment(text, postId);
    };

    const onHandleDeletePost = (postId) => {
        actions.deletePost(postId);
    };

    return (
        <div className="home">
            {data?.map((post, i) => (
                <PostItem
                    user={user}
                    post={post}
                    key={i}
                    onHandleLikeDislike={onHandleLikeDislike}
                    makeComment={makeComment}
                    onHandleDeletePost={onHandleDeletePost}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (props) => ({
    posts: props.postReducer.posts,
    user: props.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
