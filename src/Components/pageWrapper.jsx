/** @jsxImportSource react */
import { motion } from "framer-motion";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children, darkMode }) => {
  return (
    <motion.div
      className={`${styles.wrapper} ${darkMode ? styles.dark : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
