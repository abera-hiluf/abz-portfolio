// /** @jsxImportSource react */
// import React from "react";
// import styles from "./Project.module.css";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Full-stack Forum Application",
//       description: [
//         "The Evangadi Forum App is a full-stack Student Q&A Platform designed to foster knowledge sharing and engagement among students.",
//         "The front end is built with React.js, CSS, and Bootstrap, providing a modern, intuitive, and responsive user experience. The back end leverages Node.js and Express to efficiently handle server-side logic, while MySQL ensures structured management of user data, questions, and discussions.",
//         "With a clean interface and seamless navigation, the platform empowers students to ask questions, share insights, and collaborate effectively.",
//       ],
//       image: "/src/assets/forum.png",
//       liveLink: "https://evanagadiforum.aberahiluf.com/",
//       githubLink: "https://github.com/abera-hiluf/evanadi-_forum-front-end",
//     },
//     {
//       title: "Amazon Clone",
//       description: [
//         "The Amazon Clone is a front-end replica of Amazon's e-commerce platform, featuring shopping cart functionality.",
//         "The front end is built with React.js and CSS, offering a responsive and user-friendly interface. Redux is used for state management to handle dynamic data like the shopping cart.",
//         "Firebase is integrated for secure user authentication and order management. The backend is deployed on Render and handles user data and purchase logic.",
//       ],
//       image: "/src/assets/amazon.png",
//       liveLink: "https://amazonfront-end-deployed.netlify.app/",
//       githubLink: "https://github.com/abera-hiluf/amazon-clone",
//     },
//     {
//       title: "Netflix Clone",
//       description: [
//         "The Netflix Clone is a full-stack movie streaming platform inspired by Netflix. Built with React.js and styled with CSS, it offers a responsive and immersive user interface.",
//         "The application integrates with the TMDB API to dynamically fetch and display movie content, while Firebase handles authentication and backend services.",
//         "Additionally, YouTube API integration enables seamless movie trailer playback, enhancing the user experience.",
//       ],
//       image: "/src/assets/Netflix.png",
//       liveLink: "https://neflix1.netlify.app/",
//       githubLink: "https://github.com/abera-hiluf/Netflix-clone-project",
//     },
//     {
//       title: "Apple Clone",
//       description: [
//         "The Apple Clone project is a modern frontend website inspired by Apple's official homepage. Developed with HTML, CSS, and JavaScript, it replicates Apple's sleek design and smooth animations.",
//         "This project demonstrates responsive layouts, engaging hover effects, and clean visual components that adapt seamlessly across devices.",
//         "It serves as a showcase of advanced frontend skills and attention to design detail.",
//       ],
//       image: "/src/assets/apple.png",
//       liveLink: "https://shiny-cheesecake-119b53.netlify.app/",
//       githubLink: "https://github.com/abera-hiluf/apple-clone-project",
//     },
//   ];

//   return (
//     <section id="projects" className={styles.section}>
//       <div className={styles.container}>
//         <h5 className={styles.subtitle}>My Works</h5>
//         <h2 className={styles.title}>Projects</h2>
//         <div className={styles.grid}>
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               className={`${styles.project} ${
//                 index % 2 === 0 ? styles.left : styles.right
//               }`}
//               data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//             >
//               <div className={styles.imageContainer}>
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className={styles.image}
//                   />
//                 </a>
//               </div>
//               <div className={styles.content}>
//                 <h3 className={styles.projectTitle}>{project.title}</h3>
//                 {project.description.map((para, i) => (
//                   <p key={i} className={styles.description}>
//                     {para}
//                   </p>
//                 ))}
//                 <div className={styles.buttons}>
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${styles.buttonLive} ${
//                       project.title.includes("Netflix")
//                         ? styles.danger
//                         : project.title.includes("Apple")
//                         ? styles.dark
//                         : ""
//                     }`}
//                   >
//                     {project.title.includes("Apple")
//                       ? "🍏"
//                       : project.title.includes("Netflix")
//                       ? "🎬"
//                       : "🌐"}{" "}
//                     View Live
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.buttonGithub}
//                   >
//                     🐙 GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

/** @jsxImportSource react */
import React from 'react';
import styles from './Project.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Full-stack Forum Application",
      image: "/src/assets/forum.png",
      description: [
        "✅ Full-stack Student Q&A Platform fostering knowledge sharing.",
        "✅ Front end with React.js, CSS, and Bootstrap for a modern UI.",
        "✅ Back end with Node.js, Express, and MySQL for data management.",
        "✅ Clean interface for asking questions and collaborating.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "CSS",
        "Bootstrap",
      ],
      liveLink: "https://evanagadiforum.aberahiluf.com/",
      githubLink: "https://github.com/abera-hiluf/evanadi-_forum-front-end",
    },
    {
      title: "Amazon Clone",
      image: "/src/assets/amazon.png",
      description: [
        "✅ Front-end replica of Amazon with shopping cart functionality.",
        "✅ Built with React.js, CSS, and Redux for state management.",
        "✅ Firebase for authentication and order management.",
        "✅ Backend deployed on Render for user data and purchases.",
      ],
      technologies: ["React.js", "CSS", "Redux", "Firebase", "Render"],
      liveLink: "https://amazonfront-end-deployed.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/amazon-clone",
    },
    {
      title: "Netflix Clone",
      image: "/src/assets/Netflix.png",
      description: [
        "✅ Full-stack movie streaming platform inspired by Netflix.",
        "✅ React.js and CSS for a responsive, immersive UI.",
        "✅ TMDB API for movie content and Firebase for authentication.",
        "✅ YouTube API for seamless trailer playback.",
      ],
      technologies: ["React.js", "CSS", "TMDB API", "Firebase", "YouTube API"],
      liveLink: "https://neflix1.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/Netflix-clone-project",
    },
    {
      title: "Apple Clone",
      image: "/src/assets/apple.png",
      description: [
        "✅ Modern frontend website inspired by Apple’s homepage.",
        "✅ Developed with HTML, CSS, and JavaScript for sleek design.",
        "✅ Features responsive layouts and smooth animations.",
        "✅ Showcases advanced frontend skills and design detail.",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://shiny-cheesecake-119b53.netlify.app/",
      githubLink: "https://github.com/abera-hiluf/apple-clone-project",
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h5 className={styles.subtitle}>My Works</h5>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.project} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className={styles.imageContainer}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className={styles.image} />
                </a>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.description.map((para, i) => (
                  <p key={i} className={styles.description}>
                    {para}
                  </p>
                ))}
                <div className={styles.buttons}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.buttonLive} ${
                      project.title.includes('Netflix') ? styles.danger : project.title.includes('Apple') ? styles.dark : ''
                    }`}
                  >
                    {project.title.includes('Apple')
                      ? '🍏'
                      : project.title.includes('Netflix')
                      ? '🎬'
                      : '🌐'}{' '}
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonGithub}
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
              <div className={styles.technologies}>
                <h3 className={styles.techTitle}>Technologies</h3>
                <ul className={styles.techList}>
                  {project.technologies.map((tech, i) => (
                    <li key={i} className={styles.techItem}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;