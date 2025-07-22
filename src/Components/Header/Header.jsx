/** @jsxImportSource react */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="home" className={styles.header}>
      <div className={styles.overlay}>
        <img
          src="/src/assets/abu,pic.jpg"
          alt="Abera"
          className={styles.profilePhoto}
        />
        <div className={styles.text}>
          <h1 className={styles.title} data-aos="fade-up">
            Hi, I'm <span className={styles.highlight}>Abera</span> 👋
          </h1>
          <p className={styles.lead}>
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                1000,
                "AI/Machine Learning Enthusiast",
                1000,
                "Creative Problem Solver",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className={styles.typing}
            />
            based in Ethiopia,
            <br />
            <strong>React, Node.js, MySQL, MongoDB</strong>, and more.
            <br />
            My focus is on building scalable digital products that provide real
            impact.
          </p>
          <div
            className={styles.buttons}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="#contact" className={styles.buttonContact}>
              <h5 style={{ fontWeight: "bold" }}>Contact Me</h5>
            </a>
            <a
              href="../../../src/assets/Abera Hiluf - Resume.pdf"
              download
              className={styles.buttonResume}
            >
              <h5 style={{ fontWeight: "bold" }}>Download Resume 📄</h5>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
