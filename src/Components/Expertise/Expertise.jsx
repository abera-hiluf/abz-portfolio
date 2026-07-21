import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => {
  const educationList = [
    {
      title: "Anna University, India",
      institution: "Computer Engineering (AI & ML)",
      duration: "2025 – ongoing",
      status: "2025 - ONGOING",
      icon: "🎓",
      description: "Deepening knowledge in advanced mathematics, neural networks, machine learning architectures, and deep learning engineering workflows.",
    },
    {
      title: "Addis Ababa University, Ethiopia",
      institution: "Information Science & Tech",
      duration: "2023 – 2025",
      status: "2023 - 2025",
      icon: "🖥️",
      description: "Studied fundamental programming paradigms, data structures, database design, operating systems, and network communication basics.",
    },
    {
      title: "AI Powered Full Stack Development",
      institution: "Evangadi Network Bootcamp",
      duration: "December 2024 – ongoing",
      status: "DECEMBER 2024 - ONGOING",
      icon: "💻",
      description: "Enrolled in an intensive, project-driven bootcamp covering MongoDB, Express.js, React.js, Node.js, AI integration, version control, and app deployment.",
    },
    {
      title: "Data Structure and Algorithm",
      institution: "Self-Directed / Specializations",
      duration: "Ongoing",
      status: "ONGOING",
      icon: "🧠",
      description: "Focusing on data structures, algorithmic design patterns, computational complexity, problem-solving, and clean code principles.",
    },
  ];

  return (
    <section id="education" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        {/* SECTION TITLE */}
        <div className={styles.header} data-aos="fade-up">
          <span className="section-subtitle">Learning Journey</span>
          <h2 className="section-main-title">Education & Trainings</h2>
        </div>

        <div className={styles.grid}>
          {educationList.map((item, index) => (
            <div 
              key={item.title} 
              className={`${styles.card} glass-panel`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.iconBox}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={styles.badge}>{item.status}</span>
                </div>
                <h5 className={styles.institution}>
                  {item.institution} <span className={styles.duration}>• {item.duration}</span>
                </h5>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
