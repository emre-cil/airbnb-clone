import React from 'react';
import Box from '@mui/material/Box';
// components
import Logo from '../Logo/Logo';
import { flexBetweenCenter, displayOnDesktop } from 'themes/commonStyles';
import LocationSearch from './Search/LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './Search/MobileSearch';

const Header = () => {
  return (
    <Box
      sx={{
        ...flexBetweenCenter,
        minHeight: 90,
        borderBottom: '1px solid #ddd',
      }}
    >
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
    </Box>
  );
};

export default Header;
