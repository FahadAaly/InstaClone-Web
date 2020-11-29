import React from "react";

const PostItem = ({
    post,
    onHandleLikeDislike,
    makeComment,
    onHandleDeletePost,
    user,
}) => {
    const {
        postedBy,
        title,
        description,
        image,
        likeByUser,
        likesCount,
        comments,
    } = post;

    const likeStyle = { color: likeByUser ? "red" : "#black" };
    const likeIcon = likeByUser ? "favorite" : "favorite_border";

    const onSubmit = (e) => {
        e.preventDefault();
        makeComment(e.target[0].value, post._id);
    };

    const renderComments = () => {
        return (
            comments?.length > 0 &&
            comments.map((comment, i) => {
                return (
                    <h6 key={i}>
                        <span style={{ fontWeight: "bold" }}>
                            {comment.postedBy.name}
                        </span>
                        {comment.text}
                    </h6>
                );
            })
        );
    };

    return (
        <div className="card home-card">
            <h5>
                {postedBy?.name}
                {user?._id === postedBy?._id && (
                    <i
                        style={{ float: "right" }}
                        className="material-icons"
                        onClick={() => onHandleDeletePost(post._id)}
                    >
                        delete
                    </i>
                )}
            </h5>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-content">
                <i
                    className="material-icons"
                    style={likeStyle}
                    onClick={() => onHandleLikeDislike(post._id, likeByUser)}
                >
                    {likeIcon}
                </i>
                <h6>{likesCount} likes</h6>
                <h6>{title}</h6>
                <p>{description}</p>
                {renderComments()}
                <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" placeholder="add a comment" />
                </form>
            </div>
        </div>
    );
};

export default PostItem;
