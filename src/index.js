import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { configureClient } from './api/client';
import storage from './utils/storage';
import App from './components/App';
import './index.css';

// Read auth from storage
const auth = storage.get('auth') || {};

// Configure api client
configureClient(auth);

ReactDOM.render(
  <BrowserRouter>
    <App
      onLogin={auth => {
        storage.set('auth', auth);
      }}
      onLogout={() => {
        storage.remove('auth');
      }}
      loggedUserId={auth.id}
    />
  </BrowserRouter>,
  document.getElementById('root'),
);
