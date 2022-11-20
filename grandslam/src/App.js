import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import ClubPage from './ClubPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/clubpage" element={<ClubPage />}></Route>
        </Routes>
      </Router>
    </>

  );
}

