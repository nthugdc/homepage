import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Home from "./components/home/Home";
import MainNavbar from "./components/MainNavbar";
import OnePost from "./components/OnePost";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:slug" element={<OnePost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;