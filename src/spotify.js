
export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/";

const clientId = "ee0802b7a1614a469fe58014ce6ecc91"

const scopes = [ // permissions to do things in spotify api

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl = () =>{
    return window.location.hash // go to the url and where is hash #
    .substring(1).split('&').reduce((initial,item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
  };

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;