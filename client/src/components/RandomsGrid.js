import { StyledGrid } from '../styles';

const RandomsGrid = ({ randoms }) => (
  <>
      <StyledGrid type="artist">
        {randoms.map((random, i) => (
          <li className="grid__item" key={i}>
            <div className="grid__item__inner">
              {random.icons[0] && (
                <div className="grid__item__img">
                  <img src={random.icons[0].url} alt={random.name} />
                </div>
              )}
              <h3 className="grid__item__name overflow-ellipsis">{random.name}</h3>
              {/* <p className="grid__item__label">Random</p> */}
            </div>
          </li>
        ))}
      </StyledGrid>
   
  </>
);

{/* {random.categories.items[2].name} */}
{/* <img src={random.categories.items[2].icons[0].url} alt="Avatar"/> */}

export default RandomsGrid;