import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => {
  const educationList = [
    {
      title: "Bachelor of Computer Engineering (AI & ML)",
      institution: "Anna University, India",
      duration: "Starting August 2025",
      status: "STARTING AUGUST 2025",
      icon: "🎓",
      description: "Deepening knowledge in advanced mathematics, neural networks, machine learning architectures, and deep learning engineering workflows.",
    },
    {
      title: "Bachelor of Information Science & Tech",
      institution: "Addis Ababa University, Ethiopia",
      duration: "2023 – 2025",
      status: "COMPLETED 2 YEARS",
      icon: "🖥️",
      description: "Studied fundamental programming paradigms, data structures, database design, operating systems, and network communication basics.",
    },
    {
      title: "Full Stack Web Development (MERN)",
      institution: "Evangadi Networks, Maryland, USA",
      duration: "December 2024 – June 2025",
      status: "COMPLETED",
      icon: "💻",
      description: "Enrolled in an intensive, project-driven training covering MongoDB, Express.js, React.js, Node.js, version control, and app deployment.",
    },
    {
      title: "Algorithms & Machine Learning Fundamentals",
      institution: "Self-Directed / Specializations",
      duration: "Ongoing",
      status: "ONGOING",
      icon: "🧠",
      description: "Focusing on data structures, design patterns, predictive modeling, data scraping pipelines, and solving complex algorithmic challenges.",
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
