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
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
