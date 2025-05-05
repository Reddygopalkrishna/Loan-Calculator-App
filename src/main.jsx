import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';  
import CurrencyContextProvider from "./context/CurrencyContext.jsx";

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>  
        <CurrencyContextProvider>
          <App />
        </CurrencyContextProvider>
       
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
