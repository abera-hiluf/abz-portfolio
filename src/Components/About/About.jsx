import React from "react";
import styles from "./About.module.css";
import profilePhoto from "../../assets/abera.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content */}
          <div className={styles.leftContent} data-aos="fade-right">
            <span className="section-subtitle">Who I Am</span>
            <h2 className="section-main-title">About Me</h2>
            
            <p className={styles.text}>
              I am a Full Stack Developer specializing in building scalable, performant, and user-centered web applications. I am trained through the Evangadi Network bootcamp AI powered full stack application program, with expertise in the MERN stack (MongoDB, Express, React, Node.js).
            </p>
            
            <p className={styles.text}>
              My learning journey bridges Anna University (Computer Engineering with AI/ML specialisation)
              and hands-on full stack engineering. I thrive in team environments, focusing on writing clean
              maintainable code, and constantly expanding my technological horizons.
            </p>

            <h3 className={styles.workTitle}>What I Work On</h3>
            <ul className={styles.workList}>
              <li className={styles.workListItem}>
                <span className={styles.workBullet}></span>
                Full-Stack Web Development (MERN Stack)
              </li>
              <li className={styles.workListItem}>
                <span className={styles.workBullet}></span>
                API Design & Scalable Integration
              </li>
              <li className={styles.workListItem}>
                <span className={styles.workBullet}></span>
                Integrating AI into Web & Cloud Applications
              </li>
              <li className={styles.workListItem}>
                <span className={styles.workBullet}></span>
                AI & Machine Learning Powered Intelligent Products
              </li>
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className={styles.rightImage} data-aos="fade-left">
            <div className={styles.imageFrame}>
              <img
                src={profilePhoto}
                alt="Abera Hiluf"
                className={styles.profileImg}
              />
              <div className={styles.accentBorder}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
