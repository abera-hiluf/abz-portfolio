/** @jsxImportSource react */
import React, { useState,useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Expertise from "./Components/Expertise/Expertise.jsx";
import Projects from "./Components/Project/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import styles from "./App.module.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <div className={darkMode ? styles.dark : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

