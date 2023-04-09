import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BrainTumor from './components/BrainTumor';
import Alzheimer from './components/Alzheimer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PredictionBT from './components/PredictionBT';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
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
      },
      {
        path: "/SignUp",
        element: <SignUp />
      },
      {
        path: "/BrainTumor/predict",
        element: <PredictionBT />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>,
  </RouterProvider>
)