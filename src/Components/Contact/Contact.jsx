import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(""); // ✅ status message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmissionStatus("❌ Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        "my_gmail_service",
        "template_0n9kq2h",
        formData,
        "3nsZHUoA7Xb5ZAisI"
      )
      .then(
        () => {
          setSubmissionStatus("✅ Thank you! Your message has been submitted.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setSubmissionStatus(
            "❌ Oops! Something went wrong. Try again later."
          );
        }
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h5 className={styles.subtitle}>Connect with Me</h5>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.description}>
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please fill out the form below.
        </p>

        {/* ✅ Show submission message */}
        {submissionStatus && (
          <div className={styles.statusMessage}>{submissionStatus}</div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Submit Now ➡️
          </button>
        </form>

        <div className={styles.ctaBoxAlt}>
          <h2 className={styles.ctaHeadingAlt}>
            Let’s Build, Learn, and Grow Together 🌱
          </h2>
          <p className={styles.ctaTextAlt}>
            Whether it's a meaningful collaboration, a tech idea, or just a
            friendly connection , I'm open! Let’s connect and create something
            impactful.
          </p>
          <a href="#contact" className={styles.ctaButtonAlt}>
            🚀 Reach Out Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
