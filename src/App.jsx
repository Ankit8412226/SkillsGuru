import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./assets/components/Header.jsx";
import Hero from "./assets/components/hero.jsx";
import Nav from "./assets/components/nav.jsx";
import About from "./pages/About.jsx";
import BrouseCourses from "./pages/Browsecourses.jsx";
import Exam_prep from "./pages/Exam_prep.jsx";
import SuhFeatures from "./pages/Features.jsx";
import Footer from "./pages/Footer.jsx";
import StatusSection from "./pages/StatusSection.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import Explore_event from "./pages/Explore_event.jsx";
import Instructors from "./pages/Instructors.jsx";
import New_sesion from "./pages/New_sesion.jsx";
import TestimonialSection from "./pages/TestimonialSection.jsx";
import Loading from "./assets/components/loading.jsx";
import FloatingActions from "./assets/components/FloatingAction.jsx";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // (window as any).scrollToSection = scrollToSection;
    const timer = setTimeout(() => setIsLoaded(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              {/* Header and Navigation */}
              <Header />
              <Nav />

              {/* Main Content Sections */}
              <main className="w-full">
                {/* Hero Section */}
                <section className="w-full">
                  <Hero />
                </section>

                {/* About Section */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <About />
                </section>

                {/* Browse Courses */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <BrouseCourses />
                </section>

                {/* Status Section */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <StatusSection />
                </section>

                {/* Features */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <SuhFeatures />
                </section>

                {/* New Session */}
                <section className="w-full">
                  <New_sesion />
                </section>

                {/* Exam Prep */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <Exam_prep />
                </section>

                {/* Testimonial */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <TestimonialSection />
                </section>

                {/* Explore Event */}
                <section className="w-full py-8 sm:py-12 lg:py-16">
                  <Explore_event />
                </section>

                {/* Instructors */}
                <section className="w-full">
                  <Instructors />
                </section>
              </main>
              <FloatingActions/>

              {/* Footer */}
              <Footer />
            </div>
          }
        />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
