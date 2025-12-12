import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90ac90',
      },
      secondary: {
        main: '#80b1b7',
      },
      divider: '#8d9286',
      info: {
        main: '#2a4343',
        contrastText: 'rgba(48,92,92,0.87)',
      },
      error: {
        main: '#aa2718',
      },
      success: {
        main: '#2e7d32',
      },
      warning: {
        main: '#a6811c',
        contrastText: 'rgba(74,68,42,0.87)',
      },
      background: {
        default: '#0d120d',
        paper: '#121c12',
      },
    },
  });