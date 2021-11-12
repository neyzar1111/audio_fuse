import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import { getShowById} from "../spotify";
import {catchErrors} from "../utils";
import {Loader, PodcastSpotifyInfo, SectionWrapper, PodcastSpotifyList} from "../components";



const PodcastSpotify = ({chooseTrack}) =>{
    const { id } = useParams();
    const {name} = useParams()
    const [shows, setShows] = useState(null);
    const [info, setInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const shows = await getShowById(id);
            setShows(shows.data.items)
            setInfo(shows.data)
        };
        catchErrors(fetchData());
    }, [id]);

    return(
        <>
            <div style={{width:"100%"}}>
                <PodcastSpotifyInfo info={info} name={name}/>
                <main>
                    <SectionWrapper title="Podcast" breadcrumb={true}>
                        <PodcastSpotifyList shows={shows} chooseTrack={chooseTrack} />
                    </SectionWrapper>
                </main>
            </div>
        </>
    )
}
export default PodcastSpotify;