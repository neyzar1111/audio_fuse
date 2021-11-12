import { StyledPodcastList } from '../styles';
import Episodes from "./Episodes";
import {PodcastSpotifyInfo} from "./index";
import {useState} from "react";


const PodcastSpotifyList = ({ shows, chooseTrack }) => {

    const [readMoreStyle, setReadMoreStyle] = useState(false);
    function changeStyle (bool) {
        setReadMoreStyle(bool);
        console.log(bool);
    }

    return (
        <>
            {shows && shows.length ? (
                <>
                    <StyledPodcastList readMoreStyle={`${readMoreStyle}`} >
                        {shows.map((show, i) => (
                            <Episodes show={show} i={i} showUri={show.uri} chooseTrack={chooseTrack} changeStyle={changeStyle}/>
                        ))}
                    </StyledPodcastList>
                </>

            ) : (
                <p className="empty-notice">No tracks available</p>
            )}
        </>
    )
}




export default PodcastSpotifyList;
//                        <PodcastSpotifyInfo show={shows}/>