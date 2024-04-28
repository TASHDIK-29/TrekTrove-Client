import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import AllSpots from './pages/allPosts/AllSpots';
import AddSpot from './pages/addSpot/AddSpot';
import MyAdd from './pages/myAdd/MyAdd';
import Home from './pages/home/Home';
import DetailCard from './pages/details/DetailCard';
import AuthProvider from './auth/AuthProvider';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrivateRoute from './private/PrivateRoute';
import UpdatePage from './pages/update/UpdatePage';
import CountryDetails from './pages/countryDetail/CountryDetails';
import Error from './pages/err/Error';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-rho-nine.vercel.app/spots')
      },
      {
        path: '/allSpots',
        element: <AllSpots></AllSpots>,
        loader: () => fetch('https://assignment-10-server-rho-nine.vercel.app/spots')
      },
      {
        path: '/allSpots/:id',
        element: <PrivateRoute><DetailCard></DetailCard></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-rho-nine.vercel.app/spots/${params.id}`)
      },
      {
        path: '/addSpots',
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: '/myAdd/:email',
        element: <PrivateRoute><MyAdd></MyAdd></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-rho-nine.vercel.app/spots/${params.id}`)
      },
      {
        path: '/country/:country',
        element: <CountryDetails></CountryDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
