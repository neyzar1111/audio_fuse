import {useEffect, useState} from "react";
import { getTopArtists} from "../spotify";
import {catchErrors} from "../utils";
import {SectionWrapper,ArtistsGrid} from "../components";

const TopArtists = () =>{
    const [topArtists, setTopArtists] = useState(null);
    const [activeRange, setActiveRange] = useState("short");

    useEffect(() => {

        const fetchData = async () => {
            const userTopArtists  = await getTopArtists(`${activeRange}_term`);
            setTopArtists(userTopArtists.data);
        };
        catchErrors(fetchData());
    }, [activeRange]);

    return (
        <>
            <main>
                <ul>
                    <li>
                        <button
                            className={activeRange === 'short'? 'active': " "}
                        onClick={()=>setActiveRange("short")}
                        >
                        This Month
                        </button>
                    </li>
                    <li>
                        <button
                            className={activeRange === 'medium'? 'active': " "}
                            onClick={()=>setActiveRange("medium")}
                        >
                            Last 6 month
                        </button>
                    </li>
                    <li>
                        <button
                            className={activeRange === 'long'? 'active': " "}
                            onClick={()=>setActiveRange("long")}
                        >
                            All Time
                        </button>
                    </li>
                </ul>
                {topArtists && (
                    <SectionWrapper title="Top artists" breadcrumb="true">
                        <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
                    </SectionWrapper>
                )}
            </main>
        </>
    );
}
export default TopArtists;