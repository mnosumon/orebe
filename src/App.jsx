import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from './layout/RouteLayout';
import Home from '../src/pages/home/Home'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Home/>} />
        <Route path='/about' element={<Home/>} />
        <Route path='/journal' element={<Home/>} />
        <Route path='/contact' element={<Home/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App