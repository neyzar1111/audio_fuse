import {useEffect, useState} from "react";
import {getSearchedItem} from "../spotify";
import {catchErrors} from "../utils";
import {SectionWrapper, PodcastSpotifyGrid} from "../components";
import {StyledSearchBar} from "../styles";
import {Random} from "./index";

const Search = ({chooseTrack}) =>{
    const [search, setSearch] = useState("");
    const [found, setFound] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const founded  = await getSearchedItem(encodeURI(search));
                setFound(founded.data.shows.items)
        };
        catchErrors(fetchData());

    }, [search]);


    return (
        <>
            <main>

                <SectionWrapper className="search__bar" style={{padding:"1em", margin:"1em"}}>
                    <label htmlFor="search" style={{display:"none"}}>Search: </label>
                    <StyledSearchBar  name="search" type="search"  placeholder="Search..." onChange={(e)=>{setSearch(e.target.value)}}/>
                </SectionWrapper>

                {found && search.length > 0? (
                    <SectionWrapper title='Podcasts' seeAllLink='/show'>
                        <PodcastSpotifyGrid shows={found}/>
                    </SectionWrapper>
                ):(
                   <>
                       <Random />
                   </>
                )}
            </main>
        </>
    );
};
export default Search;