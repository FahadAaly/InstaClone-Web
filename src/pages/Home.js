import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as postActions from "../actions/postActions";
import PostItem from "../components/PostItem";

const Home = ({ actions, posts }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    actions.getAllPosts();
  }, []);

  useEffect(() => {
    setData(posts)
  }, [posts]);

  return (
    <div className="home">
      {data?.map((post, i) => <PostItem post={post} key={i} />)}
    </div>
  );
};

const mapStateToProps = (props) => ({
  posts: props.postReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(postActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
