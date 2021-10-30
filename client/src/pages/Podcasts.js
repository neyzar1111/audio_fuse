import {useEffect, useState} from "react";
import Data from "../Data";
import {StyledRangeButtons} from "../styles"
import {Audio, FilterButtons, SectionWrapper} from "../components";

const Podcasts = () =>{
    const [search, setSearch] = useState(null);

    console.log(Data.books)

    return (
        <>
            <div className="search__bar">
                <input type="search"  placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
            </div>
           <main>
               <SectionWrapper>
                    <FilterButtons />
               </SectionWrapper>
               <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">

                   {Data.books &&(
                       <>
                           {Data.books.map((book) => (
                               <Audio book={book} key={book.id}/>
                           ))}
                       </>
                    )}
               </SectionWrapper>

           </main>
        </>
    );
}
export default Podcasts;