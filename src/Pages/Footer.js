import React from 'react'
import "../styles/Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid ,Slider } from '@mui/material';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img  className='footer__albumLogo' src="" alt=''/>
        <div className="footer__songInfo">
          <h4>Chammak Challoo</h4>
          <p>hehehe</p>


        </div>

      </div>
      <div className="footer__center">
      <ShuffleIcon className='footer__green'/>
      <SkipPreviousIcon className='footer__icon'/>
      <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
      <SkipNextIcon className='footer__icon'/>
      <RepeatIcon className='footer__green'/>



      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>

    </div>
  )
}
