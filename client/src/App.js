//=============Imports===================

import React, {useState,useEffect} from "react";
import {accessToken,logout, getCurrentUserProfile} from "./spotify";
import {catchErrors, ScrollToTop} from "./utils";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {GlobalStyle, StyledNav} from "./styles";
import {
    Login,
    Profile,
    TopArtists,
    TopTracks,
    Playlists,
    Playlist,
    Podcasts,
    Random,
    Search,
    PodcastSpotify
} from "./pages";
import styled from "styled-components/macro";
import {Player, Nav} from "./components";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";


//==============Component==================

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;


function App() {
    const [token , setToken] = useState(null);
    const [profile, setProfile] = useState(null);
    const [playingTrack, setPlayingTrack] = useState(null);
    const [isActiveMenu, setActiveMenu] = useState(false);


    const chooseTrack = (track) =>{
        console.log("chosen track uri", track.uri);
        setPlayingTrack(track)
    }

    useEffect(()=>{
        setToken(accessToken);
        const fetchData = async()=> {
            const {data} = await getCurrentUserProfile();
            setProfile(data);
            // console.log(data)
        }

        catchErrors( fetchData());

    }, [])


    return (
        <div className="App">
            <GlobalStyle isActiveMenu={`${isActiveMenu}`}/>
            <header className="App-header">
                {!token ? (
                    <Login/>
                ):(
                    <>
                        <div className="main_wrap">

                            <Router>
                                <div className="nav_container">
                                    <div className="nav_wrap">
                                        <Nav setActiveMenu={setActiveMenu}/>
                                    </div>
                                </div>

                                <div style={{position:"absolute", zIndex: "55", }}  className="menuButton">
                                    <IconButton   onClick={()=> setActiveMenu(true)}>
                                        <MenuIcon />
                                    </IconButton>
                                </div>

                                <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
                                <ScrollToTop />
                                <div className="container__of_pages">
                                    <Switch>
                                        <Route   path="/top-artists">
                                            <TopArtists  chooseTrack={chooseTrack} />
                                        </Route>
                                        <Route  path="/top-tracks">
                                            <TopTracks chooseTrack={chooseTrack} />
                                        </Route>
                                        <Route  path="/playlists/:id">
                                            <Playlist  chooseTrack={chooseTrack}/>
                                        </Route>
                                        <Route  path="/playlists">
                                            <Playlists chooseTrack={chooseTrack} />
                                        </Route>

                                        <Route   path="/podcasts">
                                            <Podcasts   />
                                        </Route>
                                        <Route  path="/random">
                                            <Random  chooseTrack={chooseTrack} />
                                        </Route>
                                        <Route  path="/search">
                                            <Search  chooseTrack={chooseTrack} />
                                        </Route>
                                        <Route  path="/podcast-spotify/:id/:name">
                                            <PodcastSpotify  chooseTrack={chooseTrack} />
                                        </Route>
                                        <Route  path="/">
                                            <Profile  chooseTrack={chooseTrack} />
                                        </Route>
                                    </Switch>
                                </div>
                            </Router>
                        </div>

                        <Player  accessToken={token} trackUri={playingTrack?.uri }/>
                    </>
                )

                }

            </header>
        </div>
    );
}

export default App;
