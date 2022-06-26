import React, { useState } from "react";
import "./App.css";
import Papa from "papaparse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Carousel from "./Components/Navbar/Carousel";
import Cards from "./Cards";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Members from "./Components/Member/Members";

function App() {
  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRu37q17dyDB4lHh4ROwI8RAVuZ256IkAvoOefeEf9FLM5kpUNTyvZmxuT0nJS_tZtWQog9HgtIRHHw/pub?gid=0&single=true&output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const movie = Array.from(data);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                {" "}
                <Nav />
                <Carousel />
                <Cards />
                <About />
                <Footer />{" "}
              </div>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <div>
                {" "}
                <Nav />
                <Contact />{" "}
              </div>
            }
          />
          <Route
            exact
            path="/members"
            element={
              <div>
                {" "}
                <Nav />
                <Members movies={movie} />{" "}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
