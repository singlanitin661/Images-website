import './App.css';
import NavBar from './NavBar'; 
import Carousel from './Carousel';
import Footer from './Footer';
import Cards from './Cards';
import About from './About';
// import Nav from './Nav';
// import 'semantic-ui-css/semantic.min.css'
// import Contact from './Contact';
// import Form from './Form'
import MovieData from './Members';
function App() {
  return (
      <div>
        <MovieData/>
      </div>
    // <div  style={{width:"100%",padding:"0",margin:"0"}}>
    //   {/* <div>      
    //   <Nav/>
    //   </div> */}
    //   <NavBar/>
    //   <Carousel/>
    //   <Cards name="recruitment"/>
    //   <About/>
    //   <Footer/>
    //   {/* <Contact/> */}
    //   {/* <Form/> */}
    // </div>

  );
}

export default App;
