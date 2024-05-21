import React, { useState } from 'react'
import './style.css'
import Logo from '../../assets/Logo'
import SearchIcon from '../../assets/SearchIcon'
import MessagesIcon from "../../assets/MessageIcon"
import NotificationsIcon from "../../assets/NotificationsIcon"


const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='flex flex-row dark-mode p-[10px] justify-between items-center'>
      <div className='flex flex-row gap-[20px] items-center'>
        <Logo fill={"white"} />
        <span>My Network</span>
        <span>Jobs</span>
      </div>
      <div className='flex items-center justify-self-center min-w-[30%]'>
        <input type="search" id='SearchInput' className='bg-transparent border-[1px] border-[rgb(103,103,107)] rounded-l-md w-full focus:border-[rgb(161,114,247)] focus:border-[2px] outline-none pl-[10px] pt-[5px] pb-[5px] pr-[10px]' placeholder='Search' onChange={handleSearchInput}/>
        <span className='bg-[rgb(46,46,53)] h-full flex items-center rounded-r-md p-[9px]'>
          
          <SearchIcon fill={"white"} />
        </span>
      </div>
      <div className='flex flex-row gap-[15px] items-center'>
        <MessagesIcon fill={"white"} />
        <NotificationsIcon fill={"white"} />
        <span className='text-yellow-400 text-[9px] w-[50%]'>
          <a href="https://www.linkedin.com/premium/products" target='__blank'>
            Get Hired Faster. <br />
            Try Premium
            free
          </a>
        </span>
      </div>
    </div>
  )
}

export default Navbar