import React from 'react';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';
import { Container } from '@nextui-org/react';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Container md>{children}</Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
