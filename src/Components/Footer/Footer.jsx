/** @jsxImportSource react */
import React from "react";
import styles from "./Footer.module.css";
import { Github, Linkedin, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Abera. All rights reserved.</p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/abera-teshale-41a3a929b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/abera-hiluf/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://x.com/teshalea000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Twitter size={20} /> X (Twitter)
          </a>
          <a
            href="https://t.me/abzgreat1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Send size={20} /> Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
