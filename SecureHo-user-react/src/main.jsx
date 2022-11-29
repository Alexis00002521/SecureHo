import React from 'react'

/*new  add*/
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './home/home';
import Login from './login/login';
import Register from './register/register';
import Admin from './admin/admin';
import Resident from './resident/resident';
import Sec_OP from './admin/seccion/seccion_op';
import Recently from './side-menu/recently/recently';
import Favorites from './side-menu/favorites/favorites';
import FavoritesAdmin from './admin/seccion/side-menu/favorites/favorites';
import RecentlyAdmin from './admin/seccion/side-menu/recently/recently';
import FavoritesResident from './resident/side-menu/favorites/favorites';
import RecentlyResident from './resident/side-menu/recently/recently';
import Database from './admin/seccion/database/database';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login/> 
  },
  {
    path:"/register",
    element: <Register/> 
  },
  {
    path:"/login/admin",
    element: <Admin/> 
  },
  {
    path:"/login/resident",
    element: <Resident/> 
  },
  {
    path:"/login/admin/seccion",
    element: <Sec_OP/> 
  },
  {
    path:"/favorites",
    element: <Favorites/> 
  },
  {
    path:"/favorites/admin",
    element: <FavoritesAdmin/> 
  },
  {
    path:"/favorites/resident",
    element: <FavoritesResident/> 
  },
  {
    path:"/recently",
    element: <Recently/> 
  },
  {
    path:"/recently/admin",
    element: <RecentlyAdmin/> 
  },
  {
    path:"/recently/resident",
    element: <RecentlyResident/> 
  },
  {
    path:"/login/admin/seccion/database",
    element: <Database/> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
