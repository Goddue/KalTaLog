import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Catalog } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <header><a>Корзина</a></header>
    <Catalog />
  </React.StrictMode>
);

reportWebVitals();
