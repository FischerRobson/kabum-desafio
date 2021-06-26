import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateUser from "../pages/SignIn/CreateNewUser";
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/new-user" exact component={CreateUser} />
  </Switch>
);

export default AuthRoutes;
