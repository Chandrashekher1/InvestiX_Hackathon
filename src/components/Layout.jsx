import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header"; 
import Footer from "./Footer"; 

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow p-6 bg-gray-100">
          <Outlet /> 
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
