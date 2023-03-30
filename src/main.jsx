import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BrainTumor from './components/BrainTumor';
import Alzheimer from './components/Alzheimer';
import SignIn from './components/SignIn';
import { CarouselItem, Navbar } from 'react-bootstrap';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/BrainTumor",
      element: <BrainTumor />
    },
    {
      path: "/Alzheimer",
      element: <Alzheimer />
    },
    {
      path: "/SignIn",
      element: <SignIn />
    }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout />
)
