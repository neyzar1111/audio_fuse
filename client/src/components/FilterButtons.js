import React from "react";
import {StyledRangeButtons} from "../styles";

const FilterButtons = ({filterAudios, setActive, active})=>{

    return (
            <StyledRangeButtons>
                <li>
                    <button className={active === 'detective'? 'active': " "} onClick={()=>{filterAudios("detective"); setActive("detective")}}>detectives</button>
                </li>
                <li>
                    <button className={active === 'action'? 'active': " "} onClick={()=>{filterAudios("action"); setActive("action")}}>action</button>
                </li>
                <li>
                    <button className={active === 'classic'? 'active': " "} onClick={()=>{filterAudios("classic"); setActive("classic")}}>classic</button>
                </li>
                <li>
                    <button className={active === 'short_stories'? 'active': " "} onClick={()=>{filterAudios("short stories"); setActive("short_stories")}}>short stories</button>
                </li>
                <li>
                    <button className={active === 'romance'? 'active': " "} onClick={()=>{filterAudios("romance"); setActive("romance")}} >romance</button>
                </li>
            </StyledRangeButtons>
    )
}
export default FilterButtons;