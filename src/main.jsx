import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './Layout.css'
import BrainTumor from './components/BrainTumor';
import Alzheimer from './components/Alzheimer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PredictionBT from './components/PredictionBT';
import { Auth0Provider } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react'


function Layout() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  return (
    <>
      <NavBar loginWithPopup={loginWithPopup} logout={logout} isAuthenticated={isAuthenticated} user={user} />
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
  <React.StrictMode>
    <Auth0Provider
      domain="braintumor-alzheimer-app.us.auth0.com"
      clientId="HDPOQaLAM2BT664CPwYFX2njynVyWl9g"
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: "openid profile email",
        audience: "https://bt-api.com"
      }}
      responseType="code"
    >
      <RouterProvider router={appRouter}>
        <Layout />
      </RouterProvider>
    </Auth0Provider>
  </React.StrictMode>

)
