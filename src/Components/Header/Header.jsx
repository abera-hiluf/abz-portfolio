import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import profilePhoto from "../../assets/linkedln.jpg";

const Header = () => {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!wrapperRef.current || !headerRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1) as the wrapper passes through the viewport sticky region
      let progress = 0;
      if (rect.height > windowHeight) {
        progress = Math.min(1, Math.max(0, -rect.top / (rect.height - windowHeight)));
      }

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Fallback simple scrolling transforms for mobile (where sticky is disabled)
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const headerHeight = headerRef.current.offsetHeight || windowHeight;
        const mobileProgress = Math.min(1, Math.max(0, scrollTop / headerHeight));

        if (bgRef.current) {
          bgRef.current.style.transform = `scale3d(${1 + mobileProgress * 0.08}, ${1 + mobileProgress * 0.08}, 1)`;
        }
        if (containerRef.current) {
          const translateY = scrollTop * 0.2;
          const opacity = Math.max(0, 1 - mobileProgress * 1.3);
          containerRef.current.style.transform = `translate3d(0, -${translateY}px, 0)`;
          containerRef.current.style.opacity = opacity.toString();
        }
        if (scrollDownRef.current) {
          const scrollDownOpacity = Math.max(0, 1 - mobileProgress * 3.5);
          scrollDownRef.current.style.opacity = scrollDownOpacity.toString();
          scrollDownRef.current.style.transform = `translate3d(-50%, ${scrollTop * 0.4}px, 0)`;
        }
      } else {
        // High-end Apple-style sticky scroll zoom, parallax, and fade for desktop

        // 1. Background Zoom: scale 1 to 1.15
        if (bgRef.current) {
          bgRef.current.style.transform = `scale3d(${1 + progress * 0.15}, ${1 + progress * 0.15}, 1)`;
        }

        // 2. Foreground Parallax and Fade out: translate up by 150px, fade out completely by 0.65 progress
        if (containerRef.current) {
          const translateY = progress * 150;
          const opacity = Math.max(0, 1 - progress * 1.5);
          containerRef.current.style.transform = `translate3d(0, -${translateY}px, 0) scale(${1 - progress * 0.04})`;
          containerRef.current.style.opacity = opacity.toString();
        }

        // 3. Scroll Down Indicator fades immediately and moves down
        if (scrollDownRef.current) {
          const scrollDownOpacity = Math.max(0, 1 - progress * 4.5);
          scrollDownRef.current.style.opacity = scrollDownOpacity.toString();
          scrollDownRef.current.style.transform = `translate3d(-50%, ${progress * 100}px, 0)`;
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

    const onResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Set initial layout
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapperRef} id="home" className={styles.heroScrollWrapper}>
      <header ref={headerRef} className={styles.header}>
        <div ref={bgRef} className={styles.headerBg}></div>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.heroGrid} data-aos="fade-up">
            {/* Left Column - Main Details */}
            <div className={styles.heroLeft}>
              <div className={styles.badgeWrapper}>
                <span className={styles.statusDot}></span>
                <span className={styles.welcomeTag}>FULL STACK & AI/ML DEVELOPER</span>
              </div>

              <h1 className={styles.title}>
                Hi, I'm <span className={styles.nameText}>Abera Hiluf</span>
              </h1>

              <h2 className={styles.rolesText}>
                Full Stack Developer & <span className={styles.highlight}>AI/ML Engineer</span>
              </h2>

              <p className={styles.heroDescription}>
                Building scalable, high-performance MERN stack web applications and integrating intelligent AI/ML solutions to deliver modern digital experiences.
              </p>

              <div className={styles.ctaGroup}>
                <a href="#projects" className={styles.btnPrimary}>
                  Explore Projects <span className={styles.arrow}>→</span>
                </a>
                <a href="#contact" className={styles.btnSecondary}>
                  Get In Touch
                </a>
              </div>

              {/* Core Tech Stack Bar */}
              <div className={styles.techBar}>
                <span className={styles.techBarTitle}>Core Stack & AI Tools:</span>
                <div className={styles.techPillList}>
                  <span className={styles.techPill}>React.js</span>
                  <span className={styles.techPill}>Node.js</span>
                  <span className={styles.techPill}>PostgreSQL</span>
                  <span className={styles.techPill}>Python</span>
                  <span className={styles.techPill}>FastAPI</span>
                  <span className={styles.techPill}>LangChain</span>
                  <span className={styles.techPill}>RAG</span>
                  <span className={styles.techPill}>LLMs</span>
                </div>
              </div>
            </div>

            {/* Right Column - Developer Profile Card */}
            <div className={styles.heroRight}>
              <div className={`${styles.heroCard} glass-panel`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderLeft}>
                    <div className={styles.profileAvatarWrapper}>
                      <img
                        src={profilePhoto}
                        alt="Abera Hiluf"
                        className={styles.profileAvatar}
                      />
                      <span className={styles.avatarStatusDot}></span>
                    </div>
                    <div className={styles.cardHeaderInfo}>
                      <h3 className={styles.cardDeveloperName}>Abera Hiluf</h3>
                      <span className={styles.cardTitleSub}>Full Stack & AI/ML Engineer</span>
                    </div>
                  </div>
                  <span className={styles.availabilityBadge}>Open to Work</span>
                </div>

                <div className={styles.quoteBox}>
                  <p className={styles.quoteText}>
                    "Turning complex code into clean, scalable, and high-impact digital solutions."
                  </p>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>9+</span>
                    <span className={styles.statLabel}>Projects Built</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>MERN</span>
                    <span className={styles.statLabel}>Stack Focus</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>AI / ML</span>
                    <span className={styles.statLabel}>Specialization</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a href="#about" className={styles.cardLink}>
                    Learn More About Me <span className={styles.linkArrow}>→</span>
                  </a>
                </div>
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
      </header >
    </div >
  );
};

export default Header;
