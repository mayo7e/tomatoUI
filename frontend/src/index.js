import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth0ProviderWithNavigate from "./auth0-provider-with-navigate.js"
import './index.css';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
       <Auth0ProviderWithNavigate>
          <App />
       </Auth0ProviderWithNavigate>
      </Router>
  </React.StrictMode>
);

