import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Background scrolled toggle
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple Scroll Spy for Active Section
      const sections = ["home", "about", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // offset for nav height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="#home" className={styles.brand}>
            <span>Abera Hiluf</span>
          </a>
        </div>

        {/* Desktop & Tablet Navigation */}
        <nav className={`${styles.navigation} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${activeSection === "home" ? styles.navItemActive : ""}`}>
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className={`${styles.navItem} ${activeSection === "about" ? styles.navItemActive : ""}`}>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className={`${styles.navItem} ${activeSection === "education" ? styles.navItemActive : ""}`}>
              <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
            </li>
            <li className={`${styles.navItem} ${activeSection === "projects" ? styles.navItemActive : ""}`}>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li className={`${styles.navItem} ${activeSection === "contact" ? styles.navItemActive : ""}`}>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
            <li className={styles.navItem}>
              <button
                onClick={toggleDarkMode}
                className={styles.themeToggle}
                aria-label="Toggle theme"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>

        {/* Hamburger Toggle */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
