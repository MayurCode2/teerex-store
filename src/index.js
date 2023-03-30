import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './cartContext/CardContext';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
 <CartContextProvider>
      <App />
      </CartContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
    