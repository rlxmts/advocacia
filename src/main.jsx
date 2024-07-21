import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuMobileProvider } from './context/MenuMobileContext.jsx';
import App from './App.jsx';
import { EstiloGlobal } from './assets/EstiloGlobal/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
      <MenuMobileProvider>
        <App />
      </MenuMobileProvider>
  </React.StrictMode>,
)
