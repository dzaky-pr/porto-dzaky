import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Container } from '@nextui-org/react';
import { Sun, Moon, Logo } from '../components';
import { styled } from '@stitches/react';

const Nav = styled('nav', {
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: '76px',
  position: 'sticky',
  background: '#A0A7AF', // create efficiency for dark and light components
  zIndex: '99999',
});

const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Nav>
      <Container lg>
        <Logo />
        <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} size="lg" color="primary" iconOn={<Moon filled />} iconOff={<Sun filled />} />
      </Container>
    </Nav>
  );
};

export default Navbar;
