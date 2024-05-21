import { useState } from 'react'
// import logo from './assets/logo.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar'
import SearchResult from './components/search/SearchResult'

function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-row'>
        <SideBar />
        <SearchResult/>
      </div>
    </>
  )
}

export default App
