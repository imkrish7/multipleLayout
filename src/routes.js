import React from "react";
import DefaultLayout from "./Layouts/ProtectedLayout";

import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";

const routes = [
  { path: "/", exact: true, name: "Default", component: DefaultLayout },
  { path: "/dashboard", exact: true, name: "Default", component: Dashboard },
  { path: "/profile", exact: true, name: "Default", component: Profile }
];

export default routes;
