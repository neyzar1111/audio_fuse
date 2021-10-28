import React, {useEffect, useState} from "react";
import SpotifyPlayer from "react-spotify-web-playback";


const Player = ({accessToken, trackUri}) =>{

    const  [play, setPlay] = useState(false);
    useEffect(()=>{
        setPlay(true)
        console.log(play)
        console.log(trackUri)
    },[trackUri,play]);

    useEffect(()=>{
        setPlay(true)
    },[])


    return (
        <>
            {accessToken && (
                <SpotifyPlayer
                    token={accessToken}
                    showSaveIcon={true}
                    callback={state=>{
                        console.log(state)
                        if(!state.isPlaying) setPlay(true);
                    }}
                    player={true}
                    uris={trackUri ? [trackUri] : [] }
                />
            )}
        </>
    )
};
export default Player