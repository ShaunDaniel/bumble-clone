import React from 'react'
import "./SwipeButtons.css"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import StarsIcon from '@mui/icons-material/Stars';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from "@mui/material/IconButton";


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      
    
      <IconButton>
        <CloseIcon fontSize='large' className='swipe_icon_reject' />
      </IconButton>

      <IconButton>
        <ReplayIcon fontSize='large' className='swipe_icon_superswipe' />
      </IconButton>

      <IconButton>
        <StarsIcon fontSize='large' className='swipe_icon_superswipe' />
      </IconButton>


      <IconButton className='superswipe_icon'>
        <DoneIcon fontSize='large' className='swipe_icon_accept' />
      </IconButton>


    </div>
  )
}

export default SwipeButtons