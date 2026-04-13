import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <CTA />
              <LegalSection />
            </>
          }
        />

        {/* ✅ LEGAL ROUTES (REUSING SAME COMPONENT) */}
        <Route path="/terms" element={<LegalSection />} />
        <Route path="/privacy" element={<LegalSection />} />

        {/* ✅ OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;