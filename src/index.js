import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import SecTask from './SecTask';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <br />
    <span>Seconed Task</span>
    <SecTask />
  </StrictMode>
);
