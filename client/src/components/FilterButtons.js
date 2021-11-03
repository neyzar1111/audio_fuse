import React from "react";
import {StyledRangeButtons} from "../styles";

const FilterButtons = ({filterAudios, setActive, active})=>{

    return (
            <StyledRangeButtons>
                <li>
                    <button className="search__detectives" onClick={()=>{filterAudios("detective"); setActive("detective")}}>detectives</button>
                </li>
                <li>
                    <button className="search__action" onClick={()=>{filterAudios("action"); setActive("action")}}>action</button>
                </li>
                <li>
                    <button className="search__classic" onClick={()=>{filterAudios("classic"); setActive("classic")}}>classic</button>
                </li>
                <li>
                    <button className="search__short_stories" onClick={()=>{filterAudios("short stories"); setActive("short stories")}}>short stories</button>
                </li>
                <li>
                    <button className="search__romance" onClick={()=>{filterAudios("romance"); setActive("romance")}} >romance</button>
                </li>
            </StyledRangeButtons>
    )
}
export default FilterButtons;