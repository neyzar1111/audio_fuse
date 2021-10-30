import React from "react";
import {StyledRangeButtons} from "../styles";

const FilterButtons = ()=>{
    return (
            <StyledRangeButtons>
                <li>
                    <button className="search__detectives">detectives</button>
                </li>
                <li>
                    <button className="search__action">action</button>
                </li>
                <li>
                    <button className="search__classic">classic</button>
                </li>
                <li>
                    <button className="search__short_stories">short stories</button>
                </li>
                <li>
                    <button className="search__romance">romance</button>
                </li>
            </StyledRangeButtons>
    )
}
export default FilterButtons;