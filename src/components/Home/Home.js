import React from 'react';
import { Cover, Div1, Div2 } from './HomeStyles';
import { Button, H1, Para } from '../../globalStyles';
const Home = () => {
  return (
    <Cover>
      <Div1></Div1>
      <Div2>
        <H1>We Design and Develop</H1>
        <Para>
          We are a new design studio based in USA. We have over 20 years of
          combined experience, and know a thing or two about designing websites
          and mobile apps.
        </Para>
        <Button>Contact Us</Button>
      </Div2>
    </Cover>
  );
};

export default Home;
