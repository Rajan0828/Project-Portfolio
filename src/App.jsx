import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function App() {
  // Animations //
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },

    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  };

  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setisLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <Navbar animations={animations} />
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <Hero animations={animations} />
        <Projects animations={animations} />
        <Contact animations={animations} />

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2025 Rajan Macaraig. All rights reserved.</p>
        </motion.footer>
      </div>
    </>
  );
}

export default App;
