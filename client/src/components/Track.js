import React from "react";
import {formatDuration} from "../utils";

const Track = ({track, trackUri, chooseTrack, i}) =>{

    function handlePlay(){
        chooseTrack(track);
    }

    return(
        <>
            <li className="track__item" key={trackUri} onClick={handlePlay}>
                <div className="track__item__num">{i + 1}</div>
                <div className="track__item__title-group">
                    {track.album.images.length && track.album.images[2] && (
                        <div className="track__item__img">
                            <img src={track.album.images[2].url} alt={track.name} />
                        </div>
                    )}
                    <div className="track__item__name-artist">
                        <div className="track__item__name overflow-ellipsis">
                            {track.name}
                        </div>
                        <div className="track__item__artist overflow-ellipsis">
                            {track.artists.map((artist, i) => (
                                <span key={i}>
                                     {artist.name}{i !== track.artists.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="track__item__album overflow-ellipsis">
                    {track.album.name}
                </div>
                <div className="track__item__duration">
                    {formatDuration(track.duration_ms)}
                </div>
            </li>
        </>
    )
}
export default Track;