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
  @media screen and (min-width: 744px) {
    border-bottom: 1px solid var(--medGrey);
    padding: 14px 0 18px;
  }
`;
export default Header;
