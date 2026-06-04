import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';
import { applyTheme } from './data/applyTheme';
import { appBase } from './data/asset';

applyTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={appBase()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
