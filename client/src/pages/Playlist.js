import { useState, useEffect, useMemo} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { catchErrors } from '../utils'
import { getPlaylistById } from '../spotify';
import { TrackList, SectionWrapper } from '../components';
import { StyledHeader } from '../styles';

const Playlist = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);

    // console.log(playlist)
    // {
    //     id:"",
    //     images:"",
    //     owner: "",
    //     tracks: {}
    // }
    //console.log(tracksData) ====>
    // {
    //     "href": "https://api.spotify.com/v1/playlists/6e4izGTsil7TAm0n3vcMsA/tracks?offset=0&limit=100",
    //     "items": [{...track},{...track}{}],
    //     "limit": 100,
    //     "next": null || href//,
    //     "offset": 0 || 100 || 200,
    //     "previous": null,
    //     "total": 7
    // }
    // console.log(tracks);
    // {
    //     "added_at": "2021-05-29T11:50:25Z",
    //     "added_by": {},
    //     "is_local": true,
    //     "primary_color": null,
    //     "track": {album:{}, name:"song1", id:'some id'}
    //     "video_thumbnail": {}
    //}

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getPlaylistById(id);
            setPlaylist(data);
            setTracksData(data.tracks);
        };

        catchErrors(fetchData());
    }, [id]);

    // When tracksData updates, compile arrays of tracks and audioFeatures
    useEffect(() => {
        if (!tracksData) { // if its  null just return but if something changes in trackData {useEffect,[trackData]} we go to next function => fetchmoreData
            return;
        }

        // When tracksData updates, check if there are more tracks to fetch
        // then update the state variable
        //here we check if tracksData contains next ? if its yes we fetch that data too , and we do it till we will not get next data
        const fetchMoreData = async () => {
            if (tracksData.next) {
                const { data } = await axios.get(tracksData.next);
                setTracksData(data);
            }
        };
        // if tracks is not falsy return tracks and ... tracksData.items else just an [] ... and  tracksData.items
        setTracks(tracks => ([
            ...tracks ? tracks : [],
            ...tracksData.items
        ]));

        catchErrors(fetchMoreData());
    }, [tracksData]);


    const tracksForTracklist = useMemo(() => {
        if (!tracks) {
            return;
        }
        return tracks.map(({ track }) => track);
    }, [tracks]);


    return (
        <>
            {playlist && (
                <>
                    <StyledHeader>
                        <div className="header__inner">
                            {playlist.images.length && playlist.images[0].url && (
                                <img className="header__img" src={playlist.images[0].url} alt="Playlist Artwork"/>
                            )}
                            <div>
                                <div className="header__overline">Playlist</div>
                                <h1 className="header__name">{playlist.name}</h1>
                                <p className="header__meta">
                                    {playlist.followers.total ? (
                                        <span>{playlist.followers.total} {`follower${playlist.followers.total !== 1 ? 's' : ''}`}</span>
                                    ) : null}
                                    <span>{playlist.tracks.total} {`song${playlist.tracks.total !== 1 ? 's' : ''}`}</span>
                                </p>
                            </div>
                        </div>
                    </StyledHeader>

                    <main>
                        <SectionWrapper title="Playlist" breadcrumb={true}>
                            {tracksForTracklist && (
                                <TrackList tracks={tracksForTracklist} />
                            )}
                        </SectionWrapper>
                    </main>
                </>
            )}
        </>
    )
}

export default Playlist;


// import { useState, useEffect, useMemo } from 'react';
// import axios from "axios";
// import  { useParams } from 'react-router-dom';
// import {catchErrors} from "../utils";
// import {getPlaylistById, getAudioFeaturesForTracks} from "../spotify";
// import {StyledHeader} from "../styles";
// import {SectionWrapper, TrackList} from "../components";
//
// const Playlist =()=>{
//     const {id} = useParams();
//     const [playlist, setPlaylist] = useState(null);
//     const [tracksData, setTracksData] = useState(null);
//     const [tracks, setTracks] = useState(null);
//     const [audioFeatures, setAudioFeatures ] =useState(null)
//
//     // get tracks data  gets 100 items
//     useEffect(()=>{
//         const fetchData = async () =>{
//             const { data } = await getPlaylistById(id);
//             setPlaylist(data); //getting general inf abt PL
//             setTracksData(data.tracks); //getting tracks only
//         };
//         catchErrors(fetchData());
//     },[id]);
//
//
//     useEffect(()=>{
//         if(!tracksData){
//             return;
//         }
//         //When tracksData updates, check if there are more tracks to fetch
//         //then update the state variable
//         const fetchMoreData = async () => {
//             if(tracksData.next){
//                 const { data } = await axios.get(tracksData.next);
//                 setTracksData(data);
//             }
//         }
//         setTracks(tracks =>([
//             ...tracks ? tracks : [],
//             ...tracksData.items
//         ]));
//         catchErrors(fetchMoreData());
//
//         //Also update the audioFeatures state variable using the tracks IDs
//         // we get audio features in array for every single song with id
//         const fetchAudioFeatures = async () =>{
//             const ids = tracksData.items.map( ({track})=> track.id ).join(",");
//             const {data} = await getAudioFeaturesForTracks(ids);
//             setAudioFeatures(audioFeatures =>([
//                 ...audioFeatures ? audioFeatures : [],
//                 ...data ['audio_features']
//             ]))
//         }
//
//         catchErrors(fetchAudioFeatures());
//
//     },[tracksData]);
//     console.log(tracksData);
//     console.log(audioFeatures);
//
//     const tracksWithAudioFeatures = useMemo(()=>{
//         if(!tracks || !audioFeatures){
//             return;
//         }
//
//         return tracks.map(({track})=>{
//             const trackToAdd = track;
//             if(!track.audio_features){
//                 const audioFeaturesObj = audioFeatures.find(function(item){
//                     if(!item || !track){
//                         return null;
//                     }
//                     return item.id === track.id;
//                 });
//                 trackToAdd['audio_features'] = audioFeaturesObj;
//             }
//             return trackToAdd;
//         })
//     },[tracks])
//
//
//
//     return(
//         <>
//             {playlist &&(
//                 <>
//                     <StyledHeader>
//                         <div className="header__inner">
//                             {playlist.images.length && playlist.images[0].url && (
//                                 <img className="header__img"
//                                      src={playlist.images[0].url}
//                                      alt="Playlist Artwork"/>
//                             )}
//                             <div>
//                                 <div className="header__overline" >Playlist</div>
//                                 <h1 className="header__overline" >{playlist.name}</h1>
//                                 <p className="header__meta">
//                                     {playlist.followers.total ? (
//                                         <span>{playlist.followers.total} {`follower ${playlist.followers.total !== 1 ? "s" : ""}`}</span>
//                                     ): null}
//                                     <span>{playlist.tracks.total}{ ` track${playlist.tracks.total !==1 ? "s" : ""}`}</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </StyledHeader>
//                     <main>
//                         <SectionWrapper title='Playlist' breadcrumb={true}>
//                             {tracksWithAudioFeatures && (
//                                 <TrackList tracks={tracksWithAudioFeatures} />
//                             )}
//                         </SectionWrapper>
//                     </main>
//                 </>
//             )}
//
//         </>
//     )
// };
//
// export default Playlist;