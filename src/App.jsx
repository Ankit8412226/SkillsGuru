import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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

import FloatingActions from "./assets/components/FloatingAction.jsx";
import Loading from "./assets/components/loading.jsx";
import Explore_event from "./pages/Explore_event.jsx";
import Instructors from "./pages/Instructors.jsx";
import New_sesion from "./pages/New_sesion.jsx";
import TestimonialSection from "./pages/TestimonialSection.jsx";

function App() {
  const [scrollY, setScrollY] = useState(0);

  // Initialize states to prevent white flash
  const [isLoaded, setIsLoaded] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    return hasLoadedBefore === 'true';
  });

  const [showInitialLoading, setShowInitialLoading] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    return hasLoadedBefore !== 'true';
  });

  // Add a state to ensure smooth transition
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mark as initialized immediately
    setIsInitialized(true);

    // Only run loading logic if this is the first time
    if (!showInitialLoading) {
      setIsLoaded(true);
      return;
    }

    // Always show loading for 3 seconds on first visit
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      sessionStorage.setItem('hasLoadedBefore', 'true');
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, [showInitialLoading]);

  // Show loading if not initialized or if it's first time and not loaded
  if (!isInitialized || (!isLoaded && showInitialLoading)) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Nav />

        {/* Main content area that grows to fill space */}
        <main className="flex-grow">
          <Routes>
            {/* Main Website */}
            <Route
              path="/"
              element={
                <>
                  {/* Main Content Sections */}
                  <div className="w-full">
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
                  </div>
                  <FloatingActions/>
                </>
              }
            />

            {/* Authentication Pages */}
            <Route
              path="/login"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <Login />
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <Register />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer - always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
