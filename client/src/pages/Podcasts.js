import {useEffect, useState} from "react";
import Data from "../Data";
import {StyledAudioList} from "../styles";

import {Audio, FilterButtons, SectionWrapper} from "../components";

const Podcasts = () =>{
    const [search, setSearch] = useState("");
    const [found, setFound] = useState([]);
    const [active, setActive] = useState(null);


    console.log(Data.books.length)
    console.log("check first length",search.length)
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
            <div className="search__bar">
                <input type="search"  placeholder="Search..." onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
           <main>
               <SectionWrapper>
                    <FilterButtons filterAudios={filterAudios} setActive={setActive} active={active}/>
               </SectionWrapper>
               <SectionWrapper title="" seeAllLink="">


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