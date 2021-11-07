import {useEffect, useState} from "react";
import styled from 'styled-components/macro';
import { getSongRandom } from '../spotify';
import { catchErrors } from '../utils';
import { StyledHeader } from '../styles';
import { SectionWrapper, RandomsGrid, Loader } from '../components';

const Random = () => {
      const [random, setRandom] = useState(null);
  console.log(random);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSongRandom();
      setRandom(data);
      console.log(data);
      console.log(random);
    };
    catchErrors(fetchData());
  }, []);
return (
      <>
  
     <main>

     {random ? (
              <SectionWrapper title="Genres">
     {/* {random.categories.items[3].name} */}
      Audio-Fuse
     <RandomsGrid randoms={random.categories.items} />
        {/* <img src={random.categories.items[2].icons[0].url} alt="Avatar"/> */}
     </SectionWrapper>
      ) : (
                    <Loader />
                )}

            </main>
          </>
);
} 

export default Random;
    