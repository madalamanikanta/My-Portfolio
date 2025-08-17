import React from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <About />
          <Projects />
          <Contact />
        </motion.main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
