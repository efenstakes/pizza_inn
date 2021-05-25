
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#087956',
    },
    secondary: {
      main: '#DB2033',
    },

    common: {
        black: '#292931',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 12
  },
  
  breakpoints: {
    values: {
        xs: 0,
        sm: 440,
        md: 660,
        lg: 880,
        xl: 1080,
    }
  }
});

console.log('theme ', theme)

export default theme;