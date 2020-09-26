import React from "react";

const PostItem = ({ post }) => {
    const { postedBy, title, description, image } = post;
    return (
        <div className="card home-card">
            <h5>{postedBy?.name}</h5>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-content">
                <i className="material-icons" style={{ color: 'red' }}>favorite</i>
                <h6>{title}</h6>
                <p>{description}</p>
                <input type="text" placeholder="add a comment" />
            </div>
        </div>
    );
};

export default (PostItem);
