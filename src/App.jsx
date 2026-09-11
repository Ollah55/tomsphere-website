import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Home from "./pages/Home"
import Programs from "./pages/Programs"
import About from "./pages/About"
import Products from "./pages/Products"
import Cybersecurity from "./pages/programs/Cybersecurity"
import Frontend from "./pages/programs/Frontend"
import Backend from "./pages/programs/Backend"
import Fullstack from "./pages/programs/Fullstack"
import UIUX from "./pages/programs/UIUX"
import DataAnalytics from "./pages/programs/DataAnalytics"
import BackToTop from "./components/BackToTop";

function ScrollOnNavigation() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  return null
}

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true
  });
}, []);
  return (
    <BrowserRouter>
      <ScrollOnNavigation />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/cybersecurity" element={<Cybersecurity />} />
        <Route path="/programs/frontend" element={<Frontend />} />
        <Route path="/programs/backend" element={<Backend />} />
        <Route path="/programs/fullstack" element={<Fullstack />} />
        <Route path="/programs/uiux" element={<UIUX />} />
        <Route path="/programs/data-analytics" element={<DataAnalytics />} />
        <Route path="/services" element={<Services />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
