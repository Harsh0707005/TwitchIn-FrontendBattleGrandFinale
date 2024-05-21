import React from 'react'
import './style.css'

const ProgressBar = () => {
  return (
    <div id='progressbar' className="hidden circular-progress absolute z-30 top-[50%] left-[50%]">
      <div className="inner"></div>
      <div className="outer"></div>
    </div>
  )
}

export default ProgressBar