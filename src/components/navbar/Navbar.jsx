import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../assets/Logo'
import SearchIcon from '../../assets/SearchIcon'
import MessagesIcon from "../../assets/MessageIcon"
import NotificationsIcon from "../../assets/NotificationsIcon"
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import MyNetworkIcon from "../../assets/MyNetworkIcon"
import JobsIcon from '../../assets/JobsIcon'
import placeholder from '/placeholderPerson.png'


const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigateTo = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [queryValues, setQueryValues] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSearchInput = (e) => {
    popup.style.display = "none"
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
      feedDiv.style.display="none"
      searchResults.style.display="flex"

      const url = `https://twitch-in-backend.vercel.app/api?q=${qValue}`;
      progressbar.style.display = "block"
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
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
              let result = `<div id="resItem" class="text-white flex flex-row items-start p-10px cursor-pointer max-md:w-[100%] w-[60%] gap-[10px]">
            <img class="rounded-full max-w-[100px]" src=${imageURL.includes("http") ? imageURL : placeholder} >
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
          progressbar.style.display = "none"
        })
        .catch(error => console.error('Error:', error));
    }else{
      feedDiv.style.display="flex"
      searchResults.style.display="none"
    }
  }, [location.search])

  useEffect(() => {
    searchIcon.addEventListener("click", () => {
      navigateTo(`/search?q=${SearchInput.value}`)
    })
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (isMobile) {
      sideDiv.style.display = "none"
      searchResults.style.alignItems = "center"
      popup.style.display = "none"
      // document.getElementById("resItem").style.width = "100%"
    } else {
      sideDiv.style.display = "flex"
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);


  return (
    <div className='flex flex-row dark-mode p-[10px] justify-between items-center sticky top-0'>
      <div className='flex flex-row gap-[20px] items-center'>
        <span className='cursor-pointer' onClick={handleHomeClick}>
          <Logo fill={"white"} />
        </span>
        {isMobile ? <MyNetworkIcon /> : <span id='network'>My Network</span>}
        {isMobile ? <JobsIcon /> : <span id='jobs'>Jobs</span>}
      </div>
      <div className='flex items-center justify-self-center min-w-[30%] relative'>
        <input type="search" id='SearchInput' className='bg-transparent border-[1px] border-[rgb(103,103,107)] rounded-l-md w-full focus:border-[rgb(161,114,247)] focus:border-[2px] outline-none pl-[10px] pt-[5px] pb-[5px] pr-[10px]' placeholder='Search' onChange={handleSearchInput} onKeyDown={handleInputSubmit} />
        <span className='bg-[rgb(46,46,53)] h-full flex items-center rounded-r-md p-[9px]'>

          <SearchIcon fill={"white"} />
        </span>

        <div id="popup" className="message-blue absolute right-[-230px] top-[20px]">
          <p className="message-content">Try Searching Someone!</p>

        </div>

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