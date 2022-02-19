import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
//AUTH ROUTES =====
import Login from './ROUTES/Login';
//++++++++++++++++++++++++++++++++++
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import useAuth from './useAuth';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './ROUTES/Projects';
import About from './ROUTES/About';
import Resume from './ROUTES/Resume';

import testPDF from './__images/sample.pdf'
import MobileNavBar from './components/MobileNavBar';





export default function App() {

  const screenWidth = window.screen.width;

  return (
    <div className='App'>
        <div style={{ width: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 1 }}>{ screenWidth > 400 ? <NavBar /> : <MobileNavBar /> }</div>
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
          <Route path="/Resume" element={<Resume pdfDoc={testPDF} />} />
        </Routes>
    </div>
  );
}

function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true
    ? children
    : <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />;
}

