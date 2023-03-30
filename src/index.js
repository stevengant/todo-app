import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './Context/Auth';
import SettingsProvider from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>

  </React.StrictMode>
);