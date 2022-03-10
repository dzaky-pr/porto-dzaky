import React from 'react';
import Image from 'next/image';
import icon from '../../../public/memoji.png';
import { Text } from '@nextui-org/react';
// import { styled } from '@stitches/react';

const Hero = () => {
  return (
    <section>
      <Image src={icon} alt="Dzaky Rifa'i" width="160px" height="160px" />
      <Text h2>
        Hello Everyone! <br />I{"'"}m Dzaky Rifa{'’'}i.
      </Text>
    </section>
  );
};

export default Hero;
