import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0051ff',
      light: '#0051ff',
      dark: '#0051ff',
    },
    secondary: {
      main: '#ffdf00',
      light: '#ffdf00',
      dark: '#ffdf00',
    }
  }
});
export default theme;