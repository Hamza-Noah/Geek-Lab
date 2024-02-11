import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import routers from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <RouterProvider router={routers}/>
      </React.StrictMode>
)
