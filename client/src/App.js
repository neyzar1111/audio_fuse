import {useState,useEffect} from "react";
import './App.css';

function App() {
  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');


  }, [])
  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
