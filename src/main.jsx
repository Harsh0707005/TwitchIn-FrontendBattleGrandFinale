import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import SideBar from './components/sidebar/SideBar.jsx'
import SearchResult from './components/search/SearchResult.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import ProgressBar from './components/progressbar/ProgressBar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar /> <div className='flex flex-row'> <SideBar /> <SearchResult /> </div> </>
  },
  {
    path: "/search",
    element: <> <ProgressBar/> <Navbar /> <div className='flex flex-row'> <SideBar /> <SearchResult /> </div> </>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
