import React from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
      }}
      elevation={2}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
          ':hover': {
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          },
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button
              key={choice.id}
              sx={{
                ':hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[500]} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
