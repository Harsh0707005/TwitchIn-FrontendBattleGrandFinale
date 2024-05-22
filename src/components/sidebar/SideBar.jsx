import React from 'react'
import './style.css'
import placeholder from '/placeholderPerson.png'

const SideBar = () => {
  return (
    <div id='sideDiv' className='flex flex-col items-center bg-[rgb(31,31,35)] text-white w-[20%] h-[calc(100vh-78px)] sticky top-[58px] overflow-hidden text-center gap-[20px] pt-[20px] rounded-xl m-[10px] p-[10px]'>
      <img src={placeholder} className='w-[100px] rounded-full' />
      <span>John Doe</span>
      <span className='text-gray-400'>Experienced Marketing Strategist | Driving Growth through Data-Driven Insights and Innovative Campaigns</span>
      <div className='flex flex-row gap-[10px]'>
        <div className='flex flex-row gap-[10px]'>
          <span>Followers: </span>
          <span className='text-blue-500'>100</span>
        </div>
        <div className='flex flex-row gap-[10px]'>
          <span>Following: </span>
          <span className='text-blue-500'>200</span>
        </div>
      </div>
      <div className='bg-gray-400 h-[1px] w-[80%]'></div>
      <div className='flex flex-row justify-between w-[80%]'>
        <span>Profile Views</span>
        <span className='text-blue-500'>25</span>
      </div>
      <div className='flex flex-row justify-between w-[80%]'>
        <span>Post Impressions</span>
        <span className='text-blue-500'>100</span>
      </div>
      <div className='bg-gray-400 h-[1px] w-[80%]'></div>
      <span className='text-gray-400'>Get hired faster with exclusive tools and features</span>
      <span className='text-yellow-400'><a href="https://www.linkedin.com/premium/products" target='__blank'>Get hired faster. Try Premium free.</a></span>
    </div>
  )
}

export default SideBar