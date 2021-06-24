
import React from "react";
import { Switch, Route } from "react-router-dom";
import ListarClientes from "../pages/ListarClientes";
import Layout from "../components/Layout";
import Users from "../pages/ListarUsers";
import CreateUser from "../pages/CreateUsers";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={ListarClientes} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/new" exact component={CreateUser} />
      <Route path="/users/:id" exact component={CreateUser} />
    </Switch>
  </Layout>
);

export default AppRoutes;