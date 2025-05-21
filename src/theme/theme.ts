import { createTheme } from '@mui/material/styles';
import '@fontsource/protest-guerrilla';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    protestH1: React.CSSProperties,
    protestH6: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    protestH1?: React.CSSProperties,
    protestH6?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    protestH1: true;
    protestH6: true;
    // Keep default variants too
    h1: true;
    h2: true;
    // ... other default variants you useß
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark', // enable dark mode globally
    background: {
      default: "#000000", // pure black background
      // paper: "#121212" // Slightly lighter black for surfaces
    },
    text: {
      primary: "#ffffff", // Pure white text
      secondary: "rgba(255, 255, 255, 0.7)"
    },
    primary: {
      main: "#90caf9" // Light blue that contrasts well on black
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    protestH1: {
      fontFamily: '"Protest Guerrilla", sans-serif',
      fontSize: '3rem',
      fontWeight: 400,
      textTransform: 'uppercase'
    },
    protestH6: {
      fontFamily: '"Protest Guerrilla", sans-serif',
      fontSize: '1.5rem',
      letterSpacing: '1px',
      fontWeight: 500
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#000000',
          color: '#ffffff'
        }
      }
    }
  }
});

export default theme;