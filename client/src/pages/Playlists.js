import {PlaylistsGrid, SectionWrapper} from "../components";
import {useEffect, useState} from "react";
import {getCurrentUserPlaylists} from "../spotify";
import {catchErrors} from "../utils";

const Playlists = () => {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const userPlaylists  = await getCurrentUserPlaylists();
            setPlaylists(userPlaylists.data);
        };
        catchErrors(fetchData());
    }, []);

    return(
        <>
            <main>
                <SectionWrapper title='Playlists' breadcrumb="true">
                    {playlists && playlists.items.length && (
                        <PlaylistsGrid playlists={playlists.items} />
                    )}
                </SectionWrapper>
            </main>
        </>
    )
}
export default Playlists;
