

/** @jsxImportSource react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

AOS.init({
  duration: 600, // Default animation duration
  once: true,   // Animation triggers only once
  offset: 120,  // Offset (in px) from the top of the element
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);