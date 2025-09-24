import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './assets/components/Header.jsx';
import Hero from "./assets/components/hero.jsx";
import Nav from "./assets/components/nav.jsx";
import About from './pages/About.jsx';
import BrouseCourses from './pages/Browsecourses.jsx';
import Exam_prep from './pages/Exam_prep.jsx';
import SuhFeatures from "./pages/Features.jsx";
import Footer from './pages/Footer.jsx';
import StatusSection from './pages/StatusSection.jsx';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

import New_sesion from './pages/New_sesion.jsx';
import TestimonialSection from './pages/TestimonialSection.jsx';
import Explore_event from './pages/Explore_event.jsx';
import Instructors from './pages/Instructors.jsx';


function App() {
  return (

    <Router>
      <Routes>
        {/* Main Website */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Nav />
              <Hero />
              <About />
              <BrouseCourses />
              <StatusSection />
              <SuhFeatures />
              <Exam_prep />
              <Footer />
            </div>
          }
        />
        
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );

    <>
      {/* <p className='text-orange-700'>Training And Placement</p> */}

      <div>
        <Header />
        <Nav />
        <Hero />
        <About />
        <BrouseCourses />
        <StatusSection />
        <SuhFeatures/>
        <New_sesion />
        <Exam_prep />
        <TestimonialSection />
        <Explore_event />
        <Instructors />
        <Footer />
      </div>

    </>
  )

}

export default App;
