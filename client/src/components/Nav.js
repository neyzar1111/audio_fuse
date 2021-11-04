import React from "react";
import {StyledNav} from "../styles";
import {Link} from "react-router-dom";

const Nav = () =>{
    return(
        <nav>
            <StyledNav >
                <li className="list__item" >
                    <Link  to={`/`}>
                        <p className="list__item__name">Profile</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/playlists`}>
                        <p className="list__item__name">Playlists</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/podcasts`}>
                        <p className="list__item__name">Podcasts</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/top-tracks`}>
                        <p className="list__item__name">Top-tracks</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link   to={`/top-artists`}>
                        <p className="list__item__name">Top-artists</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/random`}>
                        <p className="list__item__name">Random</p>
                    </Link>
                </li>
            </StyledNav>
        </nav>

    )
}
export default Nav;