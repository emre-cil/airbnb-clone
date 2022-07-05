import React from 'react';
import Box from '@mui/material/Box';
import Header from 'components/Header/Header';
import OptionsTab from 'components/OptionsTab/OptionsTab';
import LocationCards from 'components/LocationsCards/LocationCards';
import Footer from 'components/Footer/Footer';
import FooterMenu from 'components/Footer/FooterMenu';
import { displayOnDesktop } from 'themes/commonStyles';
import MobileFooter from 'components/Footer/MobileFooter';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Box>
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
    </Wrapper>
  );
};
export const Wrapper = styled.div`
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
  }
`;
export default Home;
