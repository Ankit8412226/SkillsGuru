import './App.css';
import Header from './assets/components/Header.jsx';
import Hero from "./assets/components/hero.jsx";
import Nav from "./assets/components/nav.jsx";
import About from './pages/About.jsx';
import BrouseCourses from './pages/Browsecourses.jsx';
import Exam_prep from './pages/Exam_prep.jsx';
import SuhFeatures from "./pages/Features.jsx";
import Footer from './pages/Footer.jsx';
import StatusSection from './pages/StatusSection.jsx';

function App() {


  return (
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

        <Exam_prep />
          <Footer />
      </div>

    </>
  )
}

export default App;
