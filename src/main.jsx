import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';

import { store } from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <Auth0Provider
    domain="dev-cfbhc3xspzj45w85.us.auth0.com"
    clientId="HEOYCw9ZAxfn0PJcGLJGcMlkS04fPT8a"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
      </Auth0Provider>
  </Provider>
   
 
)
