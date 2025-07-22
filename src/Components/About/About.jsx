/** @jsxImportSource react */
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section} data-aos="fade-up">
      <div className={styles.container}>
        <h5 className={styles.subtitle}>Introduction</h5>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="/src/assets/photo_2025-06-28_22-46-00.jpg"
              alt="Abera"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              <strong>Hello! I'm Abera,</strong> a passionate{" "}
              <span className={styles.highlight}>Full Stack Developer</span>{" "}
              with expertise in <strong>modern web technologies.</strong> With a
              strong foundation in both frontend and backend development, I
              build scalable, user-centered applications that solve real-world
              problems.
            </p>
            <p className={styles.paragraph}>
              My approach combines technical excellence with creative
              problem-solving to deliver solutions that exceed expectations. I
              thrive in collaborative environments and am constantly expanding
              my knowledge to stay at the forefront of web development.
            </p>

            <div className={styles.skills}>
              <div className={styles.skillBox}>✅ Communication</div>
              <div className={styles.skillBox}>✅ Critical Thinking</div>
              <div className={styles.skillBox}>✅ Problem Solving</div>
              <div className={styles.skillBox}>✅ Team Collaboration</div>
            </div>

            <div className={styles.education}>
              <h3 className={styles.educationTitle}>
                My Education and Certificates
              </h3>
              <div className={styles.educationGrid}>
                <div className={styles.educationCard}>
                  <span className={styles.educationIcon}>🎓</span>
                  <h5 className={styles.cardTitle}>
                    Bachelor of Computer Engineering (AI & Machine Learning)
                  </h5>
                  <p>Anna University, India</p>
                  <small>Starting August 2025</small>
                </div>

                <div className={styles.educationCard}>
                  <span className={styles.educationIcon}>🎓</span>
                  <h5 className={styles.cardTitle}>
                    Bachelor of Information Science and Technology
                  </h5>
                  <p>Addis Ababa University, Ethiopia</p>
                  <small>Completed 2 Years (2023–2025)</small>
                </div>

                <div className={styles.educationCard}>
                  <span className={styles.educationIcon}>🎓</span>
                  <h5 className={styles.cardTitle}>
                    Full Stack Web Development (MERN)
                  </h5>
                  <p>Evangadi Networks, Maryland, USA</p>
                  <small>December 2024 – June 2025</small>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
