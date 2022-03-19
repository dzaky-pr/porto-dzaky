import React from 'react';
import { Container } from '@nextui-org/react';
import { styled } from '@stitches/react';

const Foot = styled('footer', {
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: '76px',
  position: 'sticky',
  background: '#A0A7AF', // create efficiency for dark and light components
  zIndex: '99999',
});

const Footer = () => {
  return (
    <Foot>
      <Container lg>
        <a href="https://dzakyrifai.works" target="_blank" rel="noopener noreferrer">
          Powered by <span>Dzaky</span>
        </a>
      </Container>
    </Foot>
  );
};

export default Footer;
