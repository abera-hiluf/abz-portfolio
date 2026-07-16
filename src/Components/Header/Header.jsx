import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!headerRef.current) return;
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const headerHeight = headerRef.current.offsetHeight;

      // Only perform animations when the header is visible in viewport
      if (scrollTop <= headerHeight + 50) {
        const progress = Math.min(1, Math.max(0, scrollTop / headerHeight));

        // 1. Scale background: 1 to 1.08
        if (bgRef.current) {
          bgRef.current.style.transform = `scale3d(${1 + progress * 0.08}, ${1 + progress * 0.08}, 1)`;
        }

        // 2. Parallax container: translate upward (0.25 of scroll) & fade container: 1 to 0 (completely faded at progress = 0.75)
        if (containerRef.current) {
          const translateY = scrollTop * 0.25;
          const opacity = Math.max(0, 1 - progress * 1.35);
          containerRef.current.style.transform = `translate3d(0, -${translateY}px, 0)`;
          containerRef.current.style.opacity = opacity.toString();
        }

        // 3. Fade and move scroll down indicator faster
        if (scrollDownRef.current) {
          const scrollDownOpacity = Math.max(0, 1 - progress * 3.5);
          scrollDownRef.current.style.opacity = scrollDownOpacity.toString();
          scrollDownRef.current.style.transform = `translate3d(-50%, ${scrollTop * 0.4}px, 0)`;
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
    // Run once on mount to set initial styles
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header ref={headerRef} id="home" className={styles.header}>
      <div ref={bgRef} className={styles.headerBg}></div>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.heroGrid} data-aos="fade-up">
          {/* Left Column - Main Details */}
          <div className={styles.heroLeft}>
            <span className={styles.welcomeTag}>WELCOME TO MY WORLD</span>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.nameText}>ABERA HILUF</span>
            </h1>
            <h2 className={styles.rolesText}>
              Full Stack Developer &<br />
              <span className={styles.highlight}>AI / Machine Learning</span> Student
            </h2>

            <div className={styles.ctaGroup}>
              <a href="#projects" className={styles.btnPrimary}>
                View My Work <span className={styles.arrow}>→</span>
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Decorative Quote Card */}
          <div className={styles.heroRight}>
            <div className={`${styles.quoteCard} glass-panel`}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.quoteText}>
                Turning complex code into clean, scalable digital solutions.
              </p>
              <div className={styles.quoteAuthor}>— Abera Hiluf</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollDownRef} className={styles.scrollDown}>
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
