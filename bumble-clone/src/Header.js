import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>

        <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bumble_logo_with_wordmark.svg/2560px-Bumble_logo_with_wordmark.svg.png"
            alt="Bumble logo" />
        
        <IconButton>
            <Chat fontSize='large' className='header_icon'></Chat>
        </IconButton>
    </div>
  
 
  )
}

export default Header