import {StyledPodcastHeader} from "../styles";

const PodcastSpotifyInfo = ({info,name}) =>{

   return(
       <>
           {info &&(
               <>
                        <StyledPodcastHeader>
                           <div className="header__inner">
                                {info.items[0].images.length && info.items[0].images[0].url && (
                                    <img className="header__img" src={ info.items[0].images[0].url} alt="Playlist Artwork"/>
                                )}
                                <div>
                                   <div className="header__overline">Podcast</div>
                                 <h1 className="header__name">{name}</h1>
                                    <p className="header__meta">
                                        {info.items && info.items.length &&(
                                            <span>{info.items.length} {`episode${info.items.length !== 1 ? 's' : ''}`}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                       </StyledPodcastHeader>
               </>
           )}
       </>
   )
}
export default PodcastSpotifyInfo;
