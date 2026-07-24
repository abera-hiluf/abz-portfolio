import React, { useState } from "react";
import styles from "./Project.module.css";

// Original project images
import forumImage from "../../assets/forum.png";
import amazonImage from "../../assets/amazon.png";
import netflixImage from "../../assets/Netflix.png";
import appleImage from "../../assets/apple.png";
import timeTrackerImage from "../../assets/timeTracker.png";

import kshsImage from "../../assets/kshs.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsList = [
    {
      title: "KAA Connect",
      categories: ["fullstack"],
      image: kshsImage,
      description: "A secure digital hub connecting KSHS alumni and students, fostering mentorship, opportunities, and community support with professional connection and messaging functionality.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "CSS"],
      liveLink: "https://kaaconnect.vercel.app/",
    },
    {
      title: "Full-Stack Q&A Forum",
      categories: ["fullstack"],
      image: forumImage,
      description: "A comprehensive student discussion platform facilitating questions, answers, and peer collaborations.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "CSS", "Bootstrap"],
      liveLink: "https://evanagadiforum.aberahiluf.com/",
      githubLink: "https://github.com/abera-hiluf/evanadi-_forum-front-end",
    },
    {
      title: "Amazon E-Commerce Clone",
      categories: ["frontend"],
      image: amazonImage,
      description: "A detailed frontend replica of Amazon including full shopping cart utilities and product listings.",
      technologies: ["React.js", "CSS", "Redux", "Firebase", "Render"],
      liveLink: "https://amazonfront-end-deployed.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/amazon-clone",
    },
    {
      title: "Netflix Stream Clone",
      categories: ["frontend"],
      image: netflixImage,
      description: "An immersive movie streaming platform replica utilizing the TMDB API for live movie synchronization.",
      technologies: ["React.js", "CSS", "TMDB API", "Firebase", "YouTube API"],
      liveLink: "https://neflix1.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/Netflix-clone-project",
    },
    {
      title: "Apple Homepage Clone",
      categories: ["frontend"],
      image: appleImage,
      description: "A clean frontend replica of Apple's flagship homepage showcasing precise layout styling and animation loops.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://shiny-cheesecake-119b53.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/apple-clone-project",
    },
    {
      title: "Task Focus Time Tracker",
      categories: ["frontend"],
      image: timeTrackerImage,
      description: "A high-performance personal productivity app with countdown triggers and alarm alerts.",
      technologies: ["React.js", "CSS", "JavaScript", "Netlify"],
      liveLink: "https://focustime-tracker-todo-listpp.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/todolist-app-frontend",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projectsList 
    : projectsList.filter(p => p.categories.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-main-title">Featured Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filters} data-aos="fade-up">
          <button 
            className={`${styles.filterBtn} ${filter === "all" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("all")}
          >
            All Work
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "fullstack" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "frontend" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "backend" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend & APIs
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "ai" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("ai")}
          >
            AI Powered Applications
          </button>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState} data-aos="fade-up">
            <div className={styles.emptyIcon}>🤖</div>
            <h3 className={styles.emptyTitle}>AI-powered projects are currently being prepared for showcase.</h3>
            <p className={styles.emptyText}>Projects integrating machine learning and intelligent application features will appear here.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`${styles.projectCard} glass-panel`}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage} 
                  />
                  <div className={styles.overlay}>
                    <div className={styles.links}>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.iconLink}
                          title="Live Demo"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.iconLink}
                          title="Source Code"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  {/* Tech Pills */}
                  <div className={styles.techPills}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.pill}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;