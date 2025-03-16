import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header"; 
import Footer from "./Footer"; 

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-6 bg-gray-100">
          <Outlet /> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
