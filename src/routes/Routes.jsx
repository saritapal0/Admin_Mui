import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import FullLayout from "../layouts/Sidebar/FullLayout";
import Dashboard from "../components/Dashboard/Dashboard";


import Notfound from "../components/NotFound/Notfound";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<FullLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default routes;
