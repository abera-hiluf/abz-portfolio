import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="home" className={styles.header}>
      <div className={styles.container}>
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

      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
