import React from "react";
import NavBar from "../src/components/Navbar";
import "./App.css";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/Signup";
import CreatePost from "../src/pages/CreatePost";
import UserProfile from "../src/pages/UserProfile";

import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store/index";
import {getUserData } from "./actions/userActions";

const Routing = () => {
  const history = useHistory();
  if (localStorage.getItem("token")) {
    store.dispatch(getUserData());
  } else {
    history.push('/login');
  }
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute path="/user/:userId" component={UserProfile} />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <PrivateRoute exact path="/create" component={CreatePost} />
    </Switch>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
