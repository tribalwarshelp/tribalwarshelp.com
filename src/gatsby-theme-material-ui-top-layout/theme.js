import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#BB86FC',
      contrastText: '#000',
    },
    secondary: {
      main: '#03DAC6',
      contrastText: '#000',
    },
  },
  typography: {
    h2: {
      fontWeight: 400,
    },
  },
  props: {
    MuiLink: {
      underline: 'none',
    },
  },
});

export default responsiveFontSizes(theme);
