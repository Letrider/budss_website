import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App.jsx';

createRoot(document.getElementById('letrider')).render(
     <StrictMode>
          <App />
     </StrictMode>
);