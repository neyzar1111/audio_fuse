import { Link } from 'react-router-dom';
import { StyledGrid } from '../styles';

const PodcastSpotifyGrid = ({ shows }) => {
   return (

        <>
            {shows && shows.length ? (
                <StyledGrid>
                    {shows.map((show, i) => (
                        <li className="grid__item" key={i}>
                            <Link className="grid__item__inner" to={`/podcast-spotify/${show.id}/${show.name}`}>
                                {show.images.length && show.images[0] && (
                                    <div className="grid__item__img">
                                        <img src={show.images[0].url} alt={show.name} />
                                    </div>
                                )}
                                <h3 className="grid__item__name overflow-ellipsis">{show.name}</h3>
                                <p className="grid__item__label">Podcast</p>
                            </Link>
                        </li>
                    ))}
                </StyledGrid>
            ) : (
                <p className="empty-notice">No shows available</p>
            )}
        </>
    )
};

export default PodcastSpotifyGrid;