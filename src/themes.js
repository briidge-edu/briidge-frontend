import { createMuiTheme } from '@material-ui/core/styles';

export const BRIIDGE_BLUE = "#0051ff"
export const BRIIDGE_YELLOW = "#ffdf00"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: BRIIDGE_BLUE,
      light: BRIIDGE_BLUE,
      dark: BRIIDGE_BLUE,
    },
    secondary: {
      main: BRIIDGE_YELLOW,
      light: BRIIDGE_YELLOW,
      dark: BRIIDGE_YELLOW,
    }
  },
  typography: {
    fontFamily: 'Montserrat-Regular'
  }
});

export default theme;
