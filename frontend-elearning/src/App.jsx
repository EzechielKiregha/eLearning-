import './App.css';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Navbar from './components/navbar';
import Edit from './components/Edit';
import Delete from './components/Delete';

import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const navWidth = 220;
  return (

    <>
      <MainNavbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
      
    </>




    // <div className="App">
    //   <Navbar
    //     drawerWidth={ navWidth }
    //     content = {
    //       <Routes>
    //         <Route path='' element={ <Home/> }/>
    //         <Route path='/about' element={ <About/> }/>
    //         <Route path='/create' element={ <Create/> }/>
    //         <Route path='/edit/:id' element={ <Edit/> }/>
    //         <Route path='/delete/:id' element={ <Delete/> }/>

    //       </Routes>
    //     }  
        
    //   />
      

    // </div>
  );
}

export default App;
