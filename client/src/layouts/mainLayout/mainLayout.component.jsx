import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/header.component";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-scree flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
