import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from 'themes/commonStyles';
import { pink } from '@mui/material/colors';
const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={50} color={pink[500]} />
      <Typography
        variant="h5"
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        airbnb
      </Typography>
    </Box>
  );
};
export default Logo;
