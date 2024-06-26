import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/About";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";

import "./index.css";
import "./i18n.js";

function App() {
  return (
  <div className="overflow-x-hidden min-h-dvh dark:bg-darkblue">
   <Router>
    <Navbar />
    <Routes>
     <Route path="/about" element={<About />} />
     <Route path="/form" element={<JobApp />} />
     <Route path="/login" element={<LogIn />} />
     <Route path="/signup" element={<SignUp />} />
     <Route exact path="/" element={<Home />} />
    </Routes>
   </Router>
   <Footer />
  </div>
 );
};

export default App;