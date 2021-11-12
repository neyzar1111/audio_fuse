import {useEffect, useState} from "react";
import styled from 'styled-components/macro';
import { getSongRandom } from '../spotify';
import { catchErrors } from '../utils';
import { StyledHeader } from '../styles';
import { SectionWrapper, RandomsGrid, Loader } from '../components';

const Random = () => {
  const [random, setRandom] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSongRandom();
      setRandom(data);
    };
    catchErrors(fetchData());
  }, []);
return (
  <>
     <main>
     {random ? (
      <SectionWrapper title="Genres">

     <RandomsGrid randoms={random.categories.items} />
     </SectionWrapper>
      ) : (
         <Loader />
      )}
      </main>
  </>
);
} 

export default Random;
    