import {useEffect, useState} from "react";
import Data from "../Data";
import {StyledAudioList} from "../styles";

import {Audio, FilterButtons, SectionWrapper} from "../components";

const Podcasts = () =>{
    const [search, setSearch] = useState("");
    const [found, setFound] = useState([]);

    console.log(Data.books.length)

    useEffect(()=>{
        function getSearchedItems () {
            setFound(()=>{
                let filtered =  Data.books.filter(book=>{
                    if(book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1){
                        return book;
                    }

                })
                return filtered
            })

            console.log(found)
        }

        getSearchedItems()
    },[search])
    console.log("found", found)
    return (
        <>
            <div className="search__bar">
                <input type="search"  placeholder="Search..." onChange={(e)=>(setSearch(e.target.value))}/>
            </div>
           <main>
               <SectionWrapper>
                    <FilterButtons />
               </SectionWrapper>
               <SectionWrapper title="" seeAllLink="">
                   {found &&(
                       <StyledAudioList>
                           {found.map((book,i) => (
                               <Audio audio={book} key={book.id} i={i}/>
                           ))}
                       </StyledAudioList>
                   )}

               </SectionWrapper>

           </main>
        </>
    );
}
export default Podcasts;