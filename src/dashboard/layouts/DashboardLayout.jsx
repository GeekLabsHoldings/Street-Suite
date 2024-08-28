import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/sidemenu/SideMenu";
import { Helmet } from "react-helmet-async";
import AlertsContextProvider from "../_context/alretsContext";

const DashboardLayout = () => {
  return (
    <div>
      <AlertsContextProvider>
        <Helmet>
          <title>Dashboard | Street Suite</title>
          <meta
            name="description"
            content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
          />
        </Helmet>
        <SideMenu />

        <div className="dashboard-wrapper">
          {/* all children pages will be show here */}
          <Outlet />
        </div>
      </AlertsContextProvider>
    </div>
  );
};

export default DashboardLayout;
