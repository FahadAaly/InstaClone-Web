import React from "react";

const PostItem = ({ post, onHandleLikeDislike }) => {
    const { postedBy, title, description, image, likeByUser, likesCount } = post;
    const likeStyle = { color: likeByUser ? 'red' : '#black' };
    const likeIcon = likeByUser ? 'favorite' : 'favorite_border';

    return (
        <div className="card home-card">
            <h5>{postedBy?.name}</h5>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-content">
                <i className="material-icons"
                    style={likeStyle}
                    onClick={() => onHandleLikeDislike(post._id, likeByUser)}>
                    {likeIcon}
                </i>
                <h6>{likesCount} likes</h6>
                <h6>{title}</h6>
                <p>{description}</p>
                <input type="text" placeholder="add a comment" />
            </div>
        </div>
    );
};

export default (PostItem);
