import React from 'react';
import Box from '@mui/material/Box';
// components
import Logo from '../Logo/Logo';
import { flexBetweenCenter, displayOnDesktop } from 'themes/commonStyles';
import LocationSearch from './Search/LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './Search/MobileSearch';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Box sx={displayOnDesktop}>
        <Logo />
      </Box>
      <Box sx={displayOnDesktop}>
        <LocationSearch />
      </Box>
      <Box sx={displayOnDesktop}>
        <ProfileSettings />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <MobileSearch />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;

  @media screen and (min-width: 1761px) {
    padding: 14px calc(calc(100% - 1760px) / 2 + 5rem) 18px;
  }

  @media screen and (max-width: 1760px) {
    padding: 14px 5rem 18px;
  }
  @media screen and (max-width: 1127px) {
    padding: 14px 2.5rem 18px;
  }
  @media screen and (max-width: 743px) {
    padding: 14px 1.5rem 18px;
    border: none;
    justify-content: center;
  }
`;
export default Header;
