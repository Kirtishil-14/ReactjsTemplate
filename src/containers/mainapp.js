import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { WithNavBar, WithSideBar, WithBottomTab } from "../layouts/index,";

// pages
import Home from "../pages/home";
import Team from "../pages/team";
import Work from "../pages/work";

const MainApp = (props) => {
  const Location = useLocation();

  return (
    <WithSideBar>
      <div className="container-fluid main-app-container">
        <Routes>
          <Route
            path={"/"}
            element={<Navigate replace to={`${Location.pathname}/home`} />}
          />
          <Route path={`home/*`} element={<Home />} />
          <Route path={`team/*`} element={<Team />} />
          <Route path={`work/*`} element={<Work />} />
        </Routes>
      </div>
    </WithSideBar>
  );
};

export default MainApp;
