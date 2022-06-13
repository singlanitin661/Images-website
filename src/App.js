import './App.css';
import NavBar from './NavBar'; 
import Carousel from './Carousel';
import Footer from './Footer';
import Cards from './Cards';
import About from './About';
function App() {
  return (
    <div  style={{width:"100%",padding:"0",margin:"0"}}>
      <NavBar/>
      <Carousel/>
      <Cards/>
      <About/>
      <Footer/>
    </div>

  );
}

export default App;
