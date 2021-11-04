import React from "react";
import {StyledNav} from "../styles";
import {Link} from "react-router-dom";

const Nav = ({setActiveMenu}) =>{
    let checkMenu  = () =>{

    }
    return(
        <nav>
            <StyledNav >
                <div className="logo__container">
                    <img className="logo" src="/assets/logo_words.png"/>
                </div>
                <li className="list__item" >
                    <Link  to={`/`}  >
                        <p className="list__item__name" onClick={()=>setActiveMenu(false)}>Profile</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/playlists`}  >
                        <p className="list__item__name" onClick={()=>setActiveMenu(false)}>Playlists</p>
                    </Link>
                </li>
                <li className="list__item"  >
                    <Link  to={`/podcasts`} >
                        <p className="list__item__name" onClick={()=>setActiveMenu(false)}>Podcasts</p>
                    </Link>
                </li>
                <li className="list__item"  >
                    <Link  to={`/top-tracks`}>
                        <p className="list__item__name" onClick={()=>setActiveMenu(false)}>Top-tracks</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link   to={`/top-artists`}>
                        <p className="list__item__name"  onClick={()=>setActiveMenu(false)}>Top-artists</p>
                    </Link>
                </li>
                <li className="list__item" >
                    <Link  to={`/random`}>
                        <p className="list__item__name"  onClick={()=>setActiveMenu(false)}>Random</p>
                    </Link>
                </li>
            </StyledNav>
        </nav>

    )
}
export default Nav;