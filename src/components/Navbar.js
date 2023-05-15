import React from 'react'
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import '../navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className='icons'>
        <IconButton>
           <Person2SharpIcon fontSize='large' className='profile_icon'/> 
        </IconButton>
        <img  className='tinder_logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="" />
        <IconButton>
            <ChatIcon fontSize='large' className='chat_icon'/>
        </IconButton>
      </nav>
    </div>
  )
}
