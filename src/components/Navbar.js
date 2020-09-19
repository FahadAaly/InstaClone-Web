import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const NavBar = ({isLoggedIn}) => {
  console.log(isLoggedIn, 'login');
  const [ isLogged, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    if(isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const renderLinks = () => {
    if (isLogged) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/create">Create Post</Link>
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

export default connect(mapStateToProps)(NavBar);
