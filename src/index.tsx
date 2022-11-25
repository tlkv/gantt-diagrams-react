import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (!root) {
  throw Error('React root element is not defined.');
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
