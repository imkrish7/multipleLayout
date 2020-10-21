import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import ProtectLayout from "./Layouts/ProtectedLayout";
function AppRouter({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    />
  );
}

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <AppRouter
          path="/login"
          exact
          layout={DefaultLayout}
          component={Login}
        />
        <AppRouter
          path="/signup"
          exact
          layout={DefaultLayout}
          component={Signup}
        />
        <PrivateRoute path="/" component={ProtectLayout} />
      </Switch>
    </Router>
  );
}
