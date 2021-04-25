import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../actions/postActions";
import { useParams } from "react-router-dom";

const UserProfile = ({ actions, userPosts, user }) => {
    const [data, setData] = useState([]);
    const {userId} = useParams();

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        className="profile-image"
                    />
                </div>
                <div>
                    <h4>{user.name}</h4>
                    <div className="profile-posts">
                        <h6>40 Post</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>
                    </div>
                </div>
            </div>
            <div className="profile-gallery">
                {data?.map((v, i) => (
                    <img key={i} src={v.image} className="item" />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (props) => ({
    userPosts: props.postReducer.userPosts,
    user: props.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
