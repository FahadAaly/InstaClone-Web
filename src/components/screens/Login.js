import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as Actions from "../../actions/userActions";

const Login = ({actions, isLoggedIn}) => {

  const formData = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(formData);
  const history = useHistory();

  useEffect(() => {
    if(isLoggedIn) {
      history.push('/');
    }
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const hanldeSubmit = () => {
    actions.loginUser(state, history);
  };

  return (
    <div className="login">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        <button
          className="btn waves-effect waves-light blue lighten-2"
          onClick={hanldeSubmit}
        >
          Login
        </button>
        <h5>
          <Link to="/signup">Dont have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => ({
  isLoggedIn: props.userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
