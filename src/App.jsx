import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import LandingPage from './components/landingPage'
import Contact from './components/contact'
// import ForgotPassword from './components/forgotPassword'
import CreateAccount from './components/createAccount'
// import PreLoader from './components/preLoader'
import { Navigate } from "react-router-dom";
import { initializeBoafoWidget } from "boafo-accessibility-widget";



function App() {
  useEffect(() => {
    const BOAFO_API_KEY = "boafo_5678";
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  const router = createBrowserRouter([
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "/",
      element: <Navigate to="/" replace={true} />, // Redirect to Landing Page
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    // {
    //   path: "/forgotpassword",
    //   element: <ForgotPassword />,
    // },
    {
      path: "/createaccount",
      element: <CreateAccount />,
    }
    
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
