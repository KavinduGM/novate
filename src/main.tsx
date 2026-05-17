import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';
import { applyTheme } from './config/applyTheme';

applyTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        (typeof window !== 'undefined' &&
          (window as { __BASE_URL__?: string }).__BASE_URL__) ||
        import.meta.env.BASE_URL
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
