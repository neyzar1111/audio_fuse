import {useEffect, useState} from "react";
import { getTopTracks} from "../spotify";
import {catchErrors} from "../utils";
import {SectionWrapper, TrackList, TimeRangeButtons, Loader} from "../components";


const TopTracks =({chooseTrack})=> {
    const [topTracks, setTopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState("short");

    useEffect(() => {

        const fetchData = async () => {
            const userTopTracks  = await getTopTracks(`${activeRange}_term`);
            setTopTracks(userTopTracks.data);
        };
        catchErrors(fetchData());
    }, [activeRange]);

    return (
        <>
            <main>

                {topTracks ?(
                    <SectionWrapper title="Top tracks" breadcrumb="true">
                        <TimeRangeButtons activeRange={activeRange} setActiveRange={setActiveRange} />
                        <TrackList  chooseTrack={chooseTrack} tracks={topTracks.items} />
                    </SectionWrapper>
                ) : (
                    <Loader />
                )}

            </main>
        </>
    );
}
export default TopTracks;