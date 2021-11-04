import {useEffect, useState} from "react";
import Data from "../Data";
import {StyledAudioList, StyledSearchBar, StyledSection} from "../styles";

import {Audio, FilterButtons, SectionWrapper} from "../components";

const Podcasts = () =>{
    const [search, setSearch] = useState("");
    const [found, setFound] = useState([]);
    const [active, setActive] = useState(null);


    useEffect(()=>{
        function getSearchedItems () {
            setFound(()=>{
                let find =  Data.books.filter(book=>{
                    if(book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1){
                        return book;
                    }

                })
                return find;
            })
            setActive(null)
        }

        getSearchedItems()


    },[search])


    function  filterAudios(category){
        let filteredItems =  Data.books.filter((audio,i)=>{
            if(audio.categories === category ){
                return audio;
            }
        })
        setFound(filteredItems) ;
    }


    return (
        <>

           <main>
               <SectionWrapper className="search__bar" style={{padding:"1em", margin:"1em"}}>
                   <label htmlFor="search" style={{display:"none"}}>Search: </label>
                   <StyledSearchBar  name="search" type="search"  placeholder="Search..." onChange={(e)=>{setSearch(e.target.value)}}/>
               </SectionWrapper>
               <SectionWrapper title="Podcasts" seeAllLink="">
                   <FilterButtons filterAudios={filterAudios} setActive={setActive} active={active}/>
                   {found &&(
                       <StyledAudioList>
                           {found.map((book,i) => (
                               <Audio audio={book} key={book.id} i={i}/>
                           ))}
                       </StyledAudioList>
                        )
                    }
               </SectionWrapper>

           </main>
        </>
    );
}
export default Podcasts;