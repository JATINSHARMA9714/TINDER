import React from 'react'
import '../swipeButtons.css'
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='replay'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='close'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='star'>
        <StarIcon fontSize='large'/>
      </IconButton>
      <IconButton className='favourite'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='flashOn'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}
