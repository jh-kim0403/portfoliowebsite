import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from "./components/Preloader";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>

      <Preloader load={load} />
      <div className="app-wrapper">
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
