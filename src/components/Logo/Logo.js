import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { FaAirbnb } from 'react-icons/fa';
const Logo = () => {
  return (
    <Wrapper>
      <FaAirbnb size={40} color="#FF385C" />
      <Typography
        variant="h5"
        className="logo-text"
        sx={{
          ml: 1,
          fontSize: '20px',
          fontWeight: '1000',
        }}
      >
        airbnb
      </Typography>
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo-text {
    font-size: 20px;
    font-weight: 1000;
    color: var(--primary);
    @media screen and (max-width: 1130px) {
      display: none;
    }
  }
`;
