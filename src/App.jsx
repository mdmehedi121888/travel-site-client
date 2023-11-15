import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="mx-auto app min-h-[100vh] w-full	">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Header></Header>
    </div>
  );
};

export default App;
