import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import ArticlesPage from "./components/articles/ArticlesPage";
import EventsPage from "./components/events/EventsPage";
import GamesPage from "./components/games/GamesPage";
import HomePage from "./components/home/HomePage";
import MainNavbar from "./components/MainNavbar";
import OnePost from "./components/OnePost";
// app.ss
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/articles" element={<ArticlesPage/>}/>
        <Route path="/articles/:slug" element={<OnePost />} />
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/games" element={<GamesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;