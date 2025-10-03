import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Hero from "./assets/components/hero.jsx";
import Nav from "./assets/components/nav.jsx";
import About from "./pages/About.jsx";
import BrouseCourses from "./pages/Browsecourses.jsx";
import Exam_prep from "./pages/Exam_prep.jsx";
import SuhFeatures from "./pages/Features.jsx";
import BestMentor from "./pages/BestMentors.jsx";  
import Certification from "./pages/Certification.jsx";  // ✅ Added Certification page
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
import CoursesPage from "./pages/Courses.jsx";
import LearnMore from "./pages/LearnMore.jsx"; 

function App() {
  const [scrollY, setScrollY] = useState(0);

  const [isLoaded, setIsLoaded] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
    return hasLoadedBefore === "true";
  });

  const [showInitialLoading, setShowInitialLoading] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
    return hasLoadedBefore !== "true";
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsInitialized(true);

    if (!showInitialLoading) {
      setIsLoaded(true);
      return;
    }

    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      sessionStorage.setItem("hasLoadedBefore", "true");
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, [showInitialLoading]);

  if (!isInitialized || (!isLoaded && showInitialLoading)) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Nav />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <div className="w-full">
                    <section className="w-full"><Hero /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><About /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><BrouseCourses /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><StatusSection /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><SuhFeatures /></section>
                    <section className="w-full"><New_sesion /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><Exam_prep /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><TestimonialSection /></section>
                    <section className="w-full py-8 sm:py-12 lg:py-16"><Explore_event /></section>
                    <section className="w-full"><Instructors /></section>
                  </div>
                  <FloatingActions />
                </>
              }
            />

            {/* Courses Page */}
            <Route
              path="/courses"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <CoursesPage />
                </div>
              }
            />

            {/* Learn More Page */}
            <Route
              path="/learnmore"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <LearnMore />
                </div>
              }
            />

            {/* ✅ Best Mentors Page */}
            <Route
              path="/best-mentors"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <BestMentor />
                </div>
              }
            />

            {/* ✅ Certification Page */}
            <Route
              path="/certification"
              element={
                <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                  <Certification />
                </div>
              }
            />

            {/* Auth Pages */}
            <Route
              path="/login"
              element={
                <div className="mt-10 pt-20 pb-8 flex items-center justify-center">
                  <Login />
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div className="mt-10 pt-20 pb-8 flex items-center justify-center">
                  <Register />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
