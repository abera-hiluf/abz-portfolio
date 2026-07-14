import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

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
          setSubmissionStatus("❌ Oops! Something went wrong. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className={`${styles.section} section-padding`}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-main-title">Let's Connect & Collaborate</h2>
        </div>

        <div className={styles.grid}>
          {/* Left Column - Contact Info Details */}
          <div className={styles.infoColumn} data-aos="fade-right">
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Location</h4>
                <p className={styles.infoValue}>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Email</h4>
                <p className={styles.infoValue}>
                  <a href="mailto:abera.hiluf.t@gmail.com">abera.hiluf.t@gmail.com</a>
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fab fa-telegram-plane"></i>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>Telegram</h4>
                <p className={styles.infoValue}>
                  <a href="https://t.me/abzgreat1" target="_blank" rel="noopener noreferrer">@abzgreat1</a>
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoLabel}>LinkedIn</h4>
                <p className={styles.infoValue}>
                  <a href="https://www.linkedin.com/in/abera-teshale-41a3a929b/" target="_blank" rel="noopener noreferrer">
                    abera-teshale-41a3a929b
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className={styles.formColumn} data-aos="fade-left">
            {submissionStatus && (
              <div className={styles.statusMessage}>{submissionStatus}</div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
