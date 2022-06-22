import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Cards from "./Cards";
import About from "./About";
import Contact from "./Contact";
import Members from "./Members";
function App() {
  return (
    // <div>
    //    <MovieData/>
    //  </div>
    // <div  style={{width:"100%",padding:"0",margin:"0"}}>
    //   {/* <div>
    //   <Nav/>
    //   </div> */}
    // <Contact/>
    // <MapSection location={location} zoomLevel={17} />
    //   {/* <Form/> */}
    // <Router>  
    //     <Routes>
    //     <Route exact path="/" element={<div> <NavBar /><Carousel /><Cards/><About/><Footer/> </div>}/>
    //     <Route exact path="/members" element={<Members/>} />
    //     <Route exact path="/contact" element={<Contact/>} />
    //     </Routes>
    // </Router>
    // <div><NavBar /><Carousel /><Cards/><About/><Footer/></div>
    <Router>
      <Routes>
        <Route path="/" element={<div> <NavBar /><Carousel /><Cards/><About/><Footer/> </div>}>
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
