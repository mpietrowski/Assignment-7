// Import React
import React, { StrictMode } from 'react';
// Starts the app
import { createRoot } from 'react-dom/client';

// Main app file
import App from './App.jsx';

// Default styles from the project
import './style.css';

// This is what puts the app on the page
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)