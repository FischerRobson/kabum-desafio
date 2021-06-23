
import React from "react";
import { Switch, Route } from "react-router-dom";
import Clientes from "../pages/Clientes";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Clientes} />
      {/* <Route path="/list/:type" exact component={List} /> */}
    </Switch>
  </Layout>
);

export default AppRoutes;