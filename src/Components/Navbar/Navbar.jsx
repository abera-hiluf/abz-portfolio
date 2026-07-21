import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navBgRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // 1. Scrolled state toggle for padding and shadow shifts
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Parallax background translation (background moves at a slower rate)
      if (navBgRef.current) {
        const offset = Math.min(20, scrollTop * 0.1);
        navBgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      // 3. Scroll progress bar fill (0% to 100%)
      if (progressBarRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      // 4. Simple Scroll Spy for Active Section
      const sections = ["home", "about", "education", "projects", "contact"];
      const scrollPosition = scrollTop + 120; // offset for nav height

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

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial run
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div ref={navBgRef} className={styles.navBg}></div>
      <div ref={progressBarRef} className={styles.progressBar}></div>
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
