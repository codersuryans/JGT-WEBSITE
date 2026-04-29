import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We will add other routes if separate pages are needed, 
                but right now everything can be on the home page as sections,
                or we can have them as separate pages. The user requested:
                Pages Required: Home, Services, Portfolio, Pricing, Contact. */}
            <Route path="/services" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/pricing" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
