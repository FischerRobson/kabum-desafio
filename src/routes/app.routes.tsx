
import React from "react";
import { Switch, Route } from "react-router-dom";
import Clientes from "../pages/Clientes";
import Layout from "../components/Layout";
import Users from "../pages/Users/Users";
import CreateUser from "../pages/Users/CreateUser";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Clientes} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/new" exact component={CreateUser} />
    </Switch>
  </Layout>
);

export default AppRoutes;