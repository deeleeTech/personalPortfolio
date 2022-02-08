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





export default function App() {
  const propsFade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); //SPRING ANIMATION

  return (
    <div className='App'>
      <animated.div style={propsFade}>
          <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <animated.div style={propsFade}>
                <Home />
              </animated.div>
            } 
          />
          <Route
            path="/Home"
            element={
              <animated.div style={propsFade}>
                <Home />
              </animated.div>
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
      </animated.div>
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

