import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Basic scroll to section based on route
    const path = location.pathname;
    let elementId = null;

    if (path === '/services') elementId = 'services';
    else if (path === '/portfolio') elementId = 'portfolio';
    else if (path === '/pricing') elementId = 'pricing';
    else if (path === '/contact') elementId = 'contact';
    else if (path === '/') window.scrollTo(0, 0);

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        // slight delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
