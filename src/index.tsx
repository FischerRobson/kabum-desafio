import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeProvider } from './hooks/ThemeContext'
import { AuthProvider } from './hooks/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

