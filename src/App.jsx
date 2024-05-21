import { useState } from 'react'
// import logo from './assets/logo.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar'
import SearchResult from './components/search/SearchResult'

function App() {

  return (
    <>
      <Navbar/>
      <SideBar/>
      <SearchResult/>
    </>
  )
}

export default App
