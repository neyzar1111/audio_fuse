import { StyledTrackList } from '../styles';
import Track from './Track';


const TrackList = ({ tracks, chooseTrack }) => {

    return (
        <>
            {tracks && tracks.length ? (
                <StyledTrackList>
                    {tracks.map((track, i) => (
                       <Track track={track} i={i} trackUri={track.uri} chooseTrack={chooseTrack}/>
                    ))}
                </StyledTrackList>
            ) : (
                <p className="empty-notice">No tracks available</p>
            )}
        </>
    )
}




export default TrackList;