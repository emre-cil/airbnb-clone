import React from 'react';
import Box from '@mui/material/Box';
import Header from 'components/Header/Header';
import OptionsTab from 'components/OptionsTab/OptionsTab';
import LocationCards from 'components/LocationsCards/LocationCards';
import Footer from 'components/Footer/Footer';
import FooterMenu from 'components/Footer/FooterMenu';
import { displayOnDesktop } from 'themes/commonStyles';
import MobileFooter from 'components/Footer/MobileFooter';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box>
        <Header />
        <OptionsTab />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: 100,
        }}
      >
        <LocationCards />
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MobileFooter />
        </Box>
      </Box>
      {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <FooterMenu />
      </Box>
      <Box sx={displayOnDesktop}>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Home;
