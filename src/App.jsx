import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Booking from './components/Booking/Booking'
import Blog from './components/Blog/Blog'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' Component={Root}>
        <Route index Component={Home}></Route>
        <Route path='/booking' Component={Booking}></Route>
        <Route path='/blogs' Component={Blog}></Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
