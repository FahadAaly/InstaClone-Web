import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { request } from "../http-helper";

const SignUp = () => {
  const formData = {
    name: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(formData);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    request("/signup", "post", state).then((res) => {
      const {error, message} = res;
      if (error) {
        M.toast({ html: error, classes: "red darken-3" });
      } else {
        M.toast({ html: message, classes: "green darken-3" });
        history.push("/login");
      }
    });
  };

  return (
    <div className="login">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={state.name}
          onChange={handleChange}
        />
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
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <h5>
          <Link to="/login">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
