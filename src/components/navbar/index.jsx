import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { Sun, Moon, Logo } from '..';
import { styled } from '@stitches/react';

const Nav = styled('nav', {
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: '76px',
  position: 'sticky',
  background: '#F4F4F4', // create efficiency for dark and light components
  zIndex: '99999',
});

const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Nav>
      <Logo />
      <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} size="lg" iconOn={<Sun filled />} iconOff={<Moon filled />} />
      The current theme is: {type}
    </Nav>
  );
};

export default Navbar;
