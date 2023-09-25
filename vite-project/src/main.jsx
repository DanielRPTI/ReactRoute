import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1 - config router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./routes/home.jsx";
import Contact from "./routes/contact.jsx";
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

//const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Home />,
//  },
//  {
//    path:"contact",
//    element: <Contact />,
//  }
//])
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Error Page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"contact",
        element: <Contact />,
      },
      // 5 - nested routes - id unic or dinamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />
      },
      // 7 - navigate  para paginas não existentes 
      {
        path: "oldcontact", 
        element: <Navigate to ="/contact"/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
