import { useState } from 'react'
import './App.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element=<Layout/> >
        <Route path='' element=<Home/> />
        <Route path='cart' element=<Cart/> />
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
