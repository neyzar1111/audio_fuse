//=============Imports===================

import {useState,useEffect} from "react";
import {accessToken,logout, getCurrentUserProfile} from "./spotify";
import {catchErrors, ScrollToTop} from "./utils";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import {GlobalStyle} from "./styles";
import {Login, Profile, TopArtists, TopTracks, Playlists, Playlist} from "./pages";
import styled from "styled-components/macro";



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
                        <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
                        <Router>
                            <ScrollToTop />
                            <Switch>
                                <Route path="/top-artists">
                                    <TopArtists />
                                </Route>
                                <Route path="/top-tracks">
                                    <TopTracks />
                                </Route>
                                <Route path="/playlists/:id">
                                    <Playlist />
                                </Route>
                                <Route path="/playlists">
                                    <Playlists />
                                </Route>
                                <Route path="/">
                                    <Profile />
                                </Route>
                            </Switch>
                        </Router>
                    </>
                )

                }

            </header>
        </div>
    );
}

export default App;
