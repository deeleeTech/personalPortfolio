import React, { useState, useEffect } from 'react';
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
import Projects from './ROUTES/Projects';
import About from './ROUTES/About';
import Resume from './ROUTES/Resume';
//++++++++++++++++++++++++++++++++++
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import useAuth from './useAuth';
import './App.css';
import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';


export default function App() {

  const screenWidth = window.screen.width;

  return (
    <div className='App'>
        <div style={{ width: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 1, maxWidth: screenWidth }}>{ screenWidth > 450 ? <NavBar /> : <MobileNavBar /> }</div>
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            } 
          />
          <Route
            path="/Home"
            element={
                <Home />
            } 
          />
          {/* <Route
              path="/episodes"
              element={
                <RequireAuth>
                  <Episodes />
                </RequireAuth>
              }
            /> */}
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
    </div>
  );
}


