import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
export const AppThemeProvider = (props) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        textTransform: 'none',
        fontSize: 15,
        fontFamily: 'Poppins',
      },
    },
    palette: {
      primary: {
        main: grey[700],
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 1,
          },
          variant: 'subtitle2',
        },
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: 'row',
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: (theme) => theme.palette.primary.main,
          },
          underline: 'none',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          p: 0,
          disableRipple: true,
        },
        variant: 'text',
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });

  return <ThemeProvider theme={theme}> {props.children} </ThemeProvider>;
};
