import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
