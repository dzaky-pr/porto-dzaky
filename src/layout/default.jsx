import React from 'react';
import Header from './header';
import Footer from './footer';
import { Container } from '@nextui-org/react';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container lg>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default DefaultLayout;
