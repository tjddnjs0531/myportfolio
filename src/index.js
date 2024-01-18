import React from 'react';
import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { RouterInfo } from './RouterInfo';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const RouterObject = createBrowserRouter(RouterInfo)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
