import React, {useEffect, useState} from "react";
import SpotifyPlayer from "react-spotify-web-playback";


const Player = ({accessToken, trackUri}) =>{

    const  [play, setPlay] = useState(false);
    useEffect(()=>{
        setPlay(true);

    },[trackUri]);


    return (
        <>
            {accessToken && (
                <SpotifyPlayer
                    token={accessToken}
                    showSaveIcon={true}
                    callback={state=>{
                        if(!state.isPlaying) setPlay(false);
                    }}
                    play={play}
                    uris={trackUri ? [trackUri] : [] }
                />
            )}
        </>
    )
};
export default Player