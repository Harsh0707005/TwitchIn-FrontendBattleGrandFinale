import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../assets/Logo'
import SearchIcon from '../../assets/SearchIcon'
import MessagesIcon from "../../assets/MessageIcon"
import NotificationsIcon from "../../assets/NotificationsIcon"
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigateTo = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [queryValues, setQueryValues] = useState([]);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  const handleInputSubmit = (e) => {
    if (e.key == "Enter") {
      navigateTo(`/search?q=${searchValue}`)
    }
  }
  const handleHomeClick = () => {
    navigateTo("/")
  }

  useEffect(() => {
    const qValue = queryParams.get('q');
    searchResults.innerHTML = ""
    if (qValue) {
      const url = `https://twitch-in-backend.vercel.app/api?q=${qValue}`;
      progressbar.style.display="block"
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data["included"]);
          data["included"].forEach((item, index) => {
            var name, title, secTitle, experience, profileURL, imageURL = ""
            try {
              name = item["title"]["text"]
            } catch (e) { }
            try {
              title = item["primarySubtitle"]["text"];
            } catch (e) { }
            try {
              secTitle = item["secondarySubtitle"]["text"];
            } catch (e) { }
            try {
              experience = item["insightsResolutionResults"][0]["simpleInsight"]["title"]["text"]
            } catch (e) { }
            try {
              profileURL = item["navigationUrl"]
            } catch (e) { }
            try {
              imageURL = item["image"]["attributes"][0]["detailData"]["nonEntityProfilePicture"]["vectorImage"]["artifacts"][0]["fileIdentifyingUrlPathSegment"]
            } catch (e) { }
            // console.log(imageURL)
            if (!(profileURL == undefined)) {
              let result = `<div class="text-white flex flex-row items-start p-10px cursor-pointer w-[60%] gap-[10px]">
            <img class="rounded-full max-w-[100px]" src=${imageURL.includes("http") ? imageURL : "/src/assets/placeholderPerson.png"} >
            <div class="flex flex-col">
            <span>${name != undefined ? name : ""}</span>
            <span>${title != undefined ? title : ""}</span>
            <span class="text-gray-400">${secTitle != undefined ? secTitle : ""}</span>
            <span class="text-gray-400">${experience != undefined ? experience : ""}</span>
            </div>
            </div>`
              searchResults.insertAdjacentHTML("beforeend", result)
              searchResults.lastElementChild.addEventListener("click", () => {
                window.open(profileURL, '_blank')
              })
            }
          });
          progressbar.style.display="none"
        })
        .catch(error => console.error('Error:', error));
    }
  }, [location.search])


  return (
    <div className='flex flex-row dark-mode p-[10px] justify-between items-center'>
      <div className='flex flex-row gap-[20px] items-center'>
        <span className='cursor-pointer' onClick={handleHomeClick}>
        <Logo fill={"white"} />
        </span>
        <span id='network'>My Network</span>
        <span id='jobs'>Jobs</span>
      </div>
      <div className='flex items-center justify-self-center min-w-[30%]'>
        <input type="search" id='SearchInput' className='bg-transparent border-[1px] border-[rgb(103,103,107)] rounded-l-md w-full focus:border-[rgb(161,114,247)] focus:border-[2px] outline-none pl-[10px] pt-[5px] pb-[5px] pr-[10px]' placeholder='Search' onChange={handleSearchInput} onKeyDown={handleInputSubmit} />
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