import { useEffect } from "react";
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Hero from "./assets/components/hero.jsx";
import InternshipBanner from "./assets/components/InternshipBanner.jsx";
import Nav from "./assets/components/nav.jsx";
import About from "./pages/About.jsx";
import BestMentor from "./pages/BestMentors.jsx";
import BrouseCourses from "./pages/Browsecourses.jsx";
import Certification from "./pages/Certification.jsx";
import Exam_prep from "./pages/Exam_prep.jsx";
import SuhFeatures from "./pages/Features.jsx";
import Footer from "./pages/Footer.jsx";
import StatusSection from "./pages/StatusSection.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import FloatingActions from "./assets/components/FloatingAction.jsx";
import AdmissionForm from "./pages/AdmissionForm.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import CourseDescriptionPage from "./pages/CourseDescriptionPage.jsx";
import CoursesPage from "./pages/Courses.jsx";
import Explore_event from "./pages/Explore_event.jsx";
import Explore_Learn_more from "./pages/Explore_Learn_more.jsx";
import Instructors from "./pages/Instructors.jsx";
import InternshipForm from "./pages/InternshipForm.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import New_sesion from "./pages/New_sesion.jsx";
import Profile from "./pages/Profile.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SkillGuruDashboard from "./pages/SkillGuruDashboard";
import TestimonialSection from "./pages/TestimonialSection.jsx";
import VerifyCertificatePage from "./pages/VerifyCertificatePage.jsx";
import VerifyEmail from "./pages/verifyEmail.jsx";
import CourseDetailPage from "./pages/CourseDetailPage.jsx";
import AssignmentSubmitPage from "./pages/AssignmentSubmitPage.jsx";


// Scroll to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ✅ ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// ✅ Layout controller for hiding Nav/Footer on specific pages
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Nav />}

      <main className="flex-grow">{children}</main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Layout>
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
                  <section className="w-full"><InternshipBanner /></section>


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

          {/* ✅ Protected Dashboard with nested routes (no Nav/Footer) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="min-h-screen">
                  <Outlet />
                </div>
              </ProtectedRoute>
            }
          >
            <Route index element={<SkillGuruDashboard />} />
            <Route path="course" element={<CoursesPage />} />
            <Route path="course/:courseId" element={<CourseDetailPage />} />
            <Route path="assignment/:assignmentId" element={<AssignmentSubmitPage />} />
            <Route path="cart/course" element={<CoursesPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="/browsecourses" element={<BrouseCourses />} />

          <Route
            path="/learnmore"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <LearnMore />
              </div>
            }
          />

          <Route
            path="/explore-learn-more"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <Explore_Learn_more />
              </div>
            }
          />

          <Route
            path="/best-mentors"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <BestMentor />
              </div>
            }
          />

          <Route
            path="/certification"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <Certification />
              </div>
            }
          />

          <Route
            path="/admission"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <AdmissionForm />
              </div>
            }
          />
          <Route
            path="/internship"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <InternshipForm />
              </div>
            }
          />
          {/* <Route
            path="/internship"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <InternshipBanner />
              </div>
            }
          /> */}

          <Route
            path="/exam-prep"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <Exam_prep />
              </div>
            }
          />

          {/* Auth Pages */}
          <Route
            path="/login"
            element={
              <div className="pt-20 pb-8 flex items-center justify-center">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="pt-20 pb-8 flex items-center justify-center">
                <Register />
              </div>
            }
          />
          <Route
            path="/verify-email"
            element={
              <div className="mt-10 pt-20 pb-8 flex items-center justify-center">
                <VerifyEmail />
              </div>
            }
          />
          <Route
            path="/verify-certificate"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <VerifyCertificatePage />
              </div>
            }
          />
          {/* Legacy cart route: redirect to dashboard/cart */}
          <Route path="/cart" element={<Navigate to="/dashboard/cart" replace />} />
          <Route
            path="/checkout"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <CheckoutPage />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen">
                <Profile />
              </div>
            }
          />
          <Route
            path="/Course-DescriptionPage/:id"
            element={
              <div className="mt-10 pt-20 pb-8 flex items-center justify-center">
                <CourseDescriptionPage />
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
