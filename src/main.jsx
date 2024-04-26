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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allSpots',
        element: <AllSpots></AllSpots>,
        loader: () => fetch('http://localhost:5000/spots')
      },
      {
        path: '/allSpots/:id',
        element: <DetailCard></DetailCard>,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: '/addSpots',
        element: <AddSpot></AddSpot>
      },
      {
        path: '/myAdd',
        element: <MyAdd></MyAdd>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
