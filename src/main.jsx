import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';
import ActivitiesProvider from './context/ActivitiesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivitiesProvider>
      <App />
    </ActivitiesProvider>
  </React.StrictMode>
);
