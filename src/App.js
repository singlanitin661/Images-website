import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Carousel from "./Components/Navbar/Carousel";
import Cards from "./Cards";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Members from "./Components/Member/Members";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
          <Route exact path="/" element={<div> <Nav /><Carousel /><Cards/><About/><Footer/> </div>}/>
          <Route exact path="/contact" element={<div> <Nav /><Contact/> </div>}/>
          <Route exact path="/members" element={<div> <Nav /><Members/> </div>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
