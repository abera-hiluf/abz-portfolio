import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side */}
          <div className={styles.copyright}>
            <p>© 2026 Abera Hiluf. All rights reserved.</p>
          </div>

          {/* Right Side – Social Icons */}
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/abera-teshale-41a3a929b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/abera-hiluf/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/teshalea000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Twitter / X"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://t.me/abzgreat1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Telegram"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
