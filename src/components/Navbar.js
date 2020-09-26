import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from "../actions/userActions";

const NavBar = ({ isLoggedIn, actions }) => {
  const [isLogged, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const onLogOut = () => {
    actions.logoutAction(history);
  }

  const renderLinks = () => {
    if (isLogged) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/create">Create Post</Link>
        </li>,
        <li>
          <button className="btn #c62828 red darken-3" onClick={onLogOut}>LogOut</button>
        </li>
      ]
    } else {
      return [
        <li>
          <Link to="/login">Login</Link>
        </li>,
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      ]
    }
  }
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
