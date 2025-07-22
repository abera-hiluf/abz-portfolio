/** @jsxImportSource react */
import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <BSNavbar
      expand="lg"
      className={`${styles.navbar} ${darkMode ? styles.darkMode : ""}`}
      sticky="top"
    >
      <Container>
        <BSNavbar.Brand href="#home" className={styles.brand}>
          Abera
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarNav" />
        <BSNavbar.Collapse id="navbarNav" className={styles.collapse}>
          <Nav className={styles.nav}>
            <Nav.Link
              href="#home"
              className={`${styles.navLink} ${styles.active}`}
              active
            >
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link href="#expertise" className={styles.navLink}>
              Expertise
            </Nav.Link>
            <Nav.Link href="#projects" className={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.navLink}>
              Contact
            </Nav.Link>
            <Nav.Item>
              <button
                onClick={toggleDarkMode}
                className={styles.toggleButton}
                aria-label="Toggle dark mode"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </Nav.Item>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
