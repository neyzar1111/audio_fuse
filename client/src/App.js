//=============Imports===================
import {useState,useEffect} from "react";
import {accessToken,logout, getCurrentUserProfile} from "./spotify";
import {catErrors, ScrollToTop} from "./utils";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import styled, { createGlobalStyle }from 'styled-components/macro';
import {GlobalStyle} from "./styles";
import {Login} from "./pages";



//==============Component==================



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

   catErrors( fetchData());


  }, [])


  return (
    <div className="App">
        <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <Login/>
        ):(
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/top-artists">
                        <h1>Top Artists</h1>
                    </Route>
                    <Route path="/top-tracks">
                        <h1>Top Tracks</h1>
                    </Route>
                    <Route path="/playlists/:id">
                        <h1>Playlists</h1>
                    </Route>
                    <Route path="/playlists">
                        <h1>Playlists</h1>
                    </Route>
                    <Route path="/">
                        <>
                            <button onClick={logout}>Log Out</button>
                            {profile &&
                                (
                                    <div>
                                        <h1>{profile.display_name}</h1>
                                        <p>{profile.followers.total}Followers</p>
                                        {profile.images.length && profile.images[0].url &&
                                            (
                                                 <img src={profile.images[0].url} alt="Avatar image"/>
                                             )
                                        }
                                    </div>
                                )
                            }
                        </>
                    </Route>
                </Switch>
            </Router>
        )

        }

      </header>
    </div>
  );
}

export default App;
