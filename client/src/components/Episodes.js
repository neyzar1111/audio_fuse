import React, {useState} from "react";
import {formatDuration} from "../utils";

const Episodes = ({show, showUri, chooseTrack, i,changeStyle}) =>{
    const [readMore, setReadMore] = useState(false);

    function readMoreFunc (){
        setReadMore(true);
        changeStyle(true)
    }
    function handlePlay(){
        console.log("chosen show",show);
        chooseTrack(show);
    }

    return(
        <>
            <li className="track__item" key={showUri} onClick={handlePlay}>

                <div className="track__item__title-group">
                    {show.images.length && show.images[1] && (
                        <div className="track__item__img">
                            <img src={show.images[1].url} alt={show.name} />
                        </div>
                    )}
                    <div className="track__item__name-artist">
                        <div className="track__item__name ">
                            {show.name}
                        </div>
                        <div className={`track__item__artist ${readMore ? ' readMore': " "}`} >
                            {show.description && show.description.split(" ").length > 70  &&(
                                <>
                                    <p key={i}>
                                        { !readMore ? show.description.split(" ").slice(0,70).join(" ") + ". . ." : show.description }
                                        {!readMore  ? <span style={{color:"var(--pink)"}} onClick={readMoreFunc}> read more</span>: ""}
                                    </p>

                                </>
                            )}
                            {show.description && show.description.split(" ").length <= 70  &&(
                                <>
                                    <p key={i}>
                                        {show.description}
                                    </p>
                                </>
                            )}

                        </div>
                    </div>
                </div>
                <div className="track__item__duration">
                    {formatDuration(show.duration_ms)}
                </div>
            </li>
        </>
    )
}
export default Episodes;