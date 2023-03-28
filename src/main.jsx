import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BrainTumor from './components/BrainTumor';
import Alzheimer from './components/Alzheimer';

const appRouter = createBrowserRouter([
  {
    path: "/BrainTumor",
    element: <BrainTumor />
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Alzheimer",
    element: <Alzheimer />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </RouterProvider>
)
