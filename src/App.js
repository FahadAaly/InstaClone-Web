import React from "react";
import NavBar from "../src/components/Navbar";
import "./App.css";
import Home from "../src/components/screens/Home";
import Profile from "../src/components/screens/Profile";
import Login from "../src/components/screens/Login";
import SignUp from "../src/components/screens/Signup";
import CreatePost from "../src/components/screens/CreatePost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store/index";
import { setCurrentUser } from "./actions/userActions";
import jwt_decode from "jwt-decode";

const Routing = () => {
if (localStorage.getItem("token")) {
  const decoded = jwt_decode(localStorage.getItem("token"));
  store.dispatch(setCurrentUser(decoded));
}
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
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
