import { useState } from 'react'
import './App.css'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element=<Layout/> >
        <Route path='/' element=<Home/> />
        <Route path='/about' element=<About/> />
        <Route path='/book/:bookId' element=<Book/> />
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
