import React from 'react';
import Image from 'next/image';
import icon from '../../../public/memoji.png';
import { Text, Spacer } from '@nextui-org/react';
import { styled } from '@stitches/react';

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Hero = () => {
  return (
    <section>
      <Flex>
        <Image src={icon} alt="Dzaky Rifa'i" width="160px" height="160px" />
        <Text h2>
          Hello Everyone! <br />I{"'"}m Dzaky Rifa{'’'}i.
        </Text>
      </Flex>
      <Text>Currently, I’m a Student at SMAN 68 Jakarta.</Text>
      <Spacer y={1} />
      <Text>
        Code, music, and mountain climb is my passion. <br />
        Mostly likes Frontend Web Dev, UI/UX, and a little bit trying to learn Backend Web Dev too...😅
        <br />
        For now, i{"'"}m learning some programing languages like javaScript, C++, and Python. And if you want to see my resume, click here
      </Text>
      <Spacer y={1} />
    </section>
  );
};

export default Hero;
