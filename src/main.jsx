import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
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
import image6 from './assets/6.png';
import image7 from './assets/7.jpg';
import image8 from './assets/8.jpg';
import image4 from './assets/4.jpg';
import History from './components/History';


function Layout() {
  const location = useLocation();
  // console.log(location)
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  let image;
  if (location.pathname === '/') {
    image = image6;
  }
  else if (location.pathname === '/Braintumor') {
    image = image8;
  }
  else if (location.pathname === '/Alzheimer') {
    image = image7;
  }
  else {
    image = image8;
  }

  return (
    <div id='page' style={{ backgroundImage: `url(${image})`, height: 'auto', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <NavBar loginWithPopup={loginWithPopup} logout={logout} isAuthenticated={isAuthenticated} user={user} />
      <div style={{ height: '70%', width: 'auto' }}>
        <Outlet />
      </div>
      <Footer />
      {/* <Footer bgColor={location.pathname === '/' ? 'transparent' : 'black'} /> */}
    </div>
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
      },
      {
        path: "/history",
        element: <History />
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
