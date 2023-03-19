import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/Nav Bar/NavBar";
import Birthday from "../Pages/Birthday/Birthday";
import Home from "../Pages/Home/Home";

function Router() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/birthday" element={<Birthday />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
