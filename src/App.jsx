import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LegalSection from "./components/LegalSection";

import About from "./pages/About";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import ProductSlider from './pages/productslider';
import ProductShowcase from "./pages/ProductShowcase";
import ContactBanner from "./pages/ContactBanner";
import ProductDetail from "./pages/ProductDetail";
import ScooterSlider from "./components/ScooterSlider";
import { BiBorderRadius } from "react-icons/bi";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* ✅ HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <ScooterSlider  /> 
              <Hero />
              <ProductShowcase />
              <Features />
              {/* <CTA /> */}
              <ContactBanner />
              <ProductSlider />
            </>
          }
        />

        {/* ✅ LEGAL ROUTES (REUSING SAME COMPONENT) */}
        <Route path="/terms" element={<LegalSection />} />
        <Route path="/privacy" element={<LegalSection />} />

        {/* ✅ OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;