import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Expertise from "./Components/Expertise/Expertise.jsx";
import Projects from "./Components/Project/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import styles from "./App.module.css";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  return (
    <div className={styles.app}>
      <Navbar darkMode={theme === "dark"} toggleDarkMode={toggleTheme} />
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
