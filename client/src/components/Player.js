import React, {useEffect, useState} from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import {StyledPlayer} from "../styles";

const Player = ({accessToken, trackUri}) =>{

    const  [play, setPlay] = useState(false);
    useEffect(()=>{
        setPlay(true);

    },[trackUri]);


    return (
        <>
            {accessToken && (
                <StyledPlayer>
                    <SpotifyPlayer
                        styles={{
                            activeColor: '#fff',
                            bgColor: '#333',
                            color: '#fff',
                            loaderColor: '#fff',
                            sliderColor: 'var(--pink)',
                            trackArtistColor: '#ccc',
                            trackNameColor: '#fff',
                            sliderHandleColor: 'var(--pink)',
                        }}
                        token={accessToken}
                        showSaveIcon={true}
                        callback={state=>{
                            if(!state.isPlaying) setPlay(false);
                        }}
                        play={play}
                        uris={trackUri ? [trackUri] : [] }
                    />
                </StyledPlayer>

            )}
        </>
    )
};
export default Player