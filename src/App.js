
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import { getTokenFromUrl } from './spotify.js'
import Player from './Pages/Player';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();
function App() {

  const [{user,token},dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token)
      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists,
        })
      })
      spotify.getPlaylist('22mm5J4DcucnRDLv0BAvti').then(response=>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:response,
        })
      })

      
    }
  })



  return (
    <div className="app"> 
    {/* either do {token?<Login></Login>:<Player></Player>} */}
      {!token && <Login />}
      {token && <Player  spotify={spotify} />}
    </div>
  );
}

export default App;
