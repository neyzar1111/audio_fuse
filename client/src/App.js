//=============Imports===================

import {useState,useEffect} from "react";
import {accessToken,logout, getCurrentUserProfile} from "./spotify";
import {catchErrors, ScrollToTop} from "./utils";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {GlobalStyle} from "./styles";
import {Login, Profile, TopArtists, TopTracks, Playlists, Playlist, Podcasts, Random} from "./pages";
import styled from "styled-components/macro";
import {Player} from "./components";


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


    const chooseTrack = (track) =>{
        setPlayingTrack(track)
    }

    useEffect(()=>{
        setToken(accessToken);
        const fetchData = async()=> {
            const {data} = await getCurrentUserProfile();
            setProfile(data);
            console.log(data)
        }

        catchErrors( fetchData());

    }, [])


    return (
        <div className="App">
            <GlobalStyle />
            <header className="App-header">
                {!token ? (
                    <Login/>
                ):(
                    <>
                        <Router>
                            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
                            <ScrollToTop />
                            <Switch>
                                <Route path="/top-artists">
                                    <TopArtists  chooseTrack={chooseTrack} />
                                </Route>
                                <Route path="/top-tracks">
                                    <TopTracks chooseTrack={chooseTrack} />
                                </Route>
                                <Route path="/playlists/:id">
                                    <Playlist  chooseTrack={chooseTrack}/>
                                </Route>
                                <Route path="/playlists">
                                    <Playlists chooseTrack={chooseTrack} />
                                </Route>

                                <Route path="/podcasts">
                                    <Podcasts   />
                                </Route>
                                <Route path="/random">
                                    <Random   />
                                </Route>
                                <Route exact path="/">
                                    <Profile  chooseTrack={chooseTrack} />
                                </Route>
                            </Switch>
                        </Router>
                        <Player  accessToken={token} trackUri={playingTrack?.uri }/>
                    </>
                )

                }

            </header>
        </div>
    );
}

export default App;
