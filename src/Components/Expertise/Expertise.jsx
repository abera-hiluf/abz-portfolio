/** @jsxImportSource react */
import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => {
  const services = [
    {
      name: "Responsive Web Design",
      icon: "💻",
      description:
        "I craft seamless, visually appealing layouts that adapt across desktop, tablet, and mobile for optimal UX.",
    },
    {
      name: "Client Satisfaction",
      icon: "👍⭐⭐⭐",
      description:
        "I prioritize communication, clean code, and high-quality deliverables to exceed expectations and build trust.",
    },
    {
      name: "Delivery on Time",
      icon: "⏱️✅",
      description:
        "I ensure timely delivery with strong planning, proactive problem-solving, and clear milestone tracking.",
    },
    {
      name: "Availability",
      icon: "🕒",
      description:
        "Always ready to support and collaborate across different time zones with full availability.",
    },
    {
      name: "API Development",
      icon: "🔌",
      description:
        "Skilled in building RESTful APIs and integrating third-party services for full-stack projects.",
    },
    {
      name: "Web Development",
      icon: "🌐",
      description:
        "Capable of managing both front-end and back-end development simultaneously for efficient delivery.",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Firebase",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
  ];

  return (
    
    <section id="expertise" className={styles.section}>
      <div className={styles.container}>
        <h5 className={styles.subtitle}>What I Offer</h5>
        <h2 className={styles.title}>My Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.name}
              className={styles.serviceCard}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <span className={styles.serviceIcon}>{service.icon}</span>
              <h5 className={styles.serviceTitle}>{service.name}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection} data-aos="fade-up">
          <h3 className={styles.skillsSubtitle}>Technical Expertise</h3>
          <h2 className={styles.skillsTitle}>My Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skillPill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
