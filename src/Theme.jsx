import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

const theme = createTheme({
  overrides: {
    '*': {
      scrollBehavior: 'smooth',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontFamily: "Roboto",
          fontSize: 42,
          color: "#ef4056",
          marginBottom: 16,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
    allVariants: {
      cursor: "default",
      fontSize: 20,
      fontWeight: 300,
      color: "#241f55",
      lineHeight: 1.55,
    },
    body1: {
      fontSize: 14,
      marginTop: 4,
    },
    body2: {
      fontSize: 12,
    },
    h1:
    {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 65,
      color: "#fff",
    },
    h2:
    {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 14,
      color: "#fff",
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 65,
      color: "#1B2753",
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 52,
      color: "#ef4056",
    },
    h5: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 16,
    },
    h6: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
    },

    subtitle1: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      marginTop: 12,
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#666666",
      fontWeight: 300,
      lineHeight: 1.55,
      marginBottom: 80,
    },
    subtitle3: {
      fontFamily: "Roboto",
      fontSize: 24,
      color: "#262626",
      fontWeight: 300,
      lineHeight: 1.55,
      paddingTop: 41,
      width: '50%',
    },
    title_black: {
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: 32,
      color: "#262626",
      lineHeight: '175%',
      textAlign: 'center',
    },
    subtitle4: {
      fontFamily: "Roboto",
      fontSize: 20,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      padding: "10 20",
      textAlign: 'center',
    },
    title1: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.35,
      color: "#ef4056",
      textAlign: 'center',
      marginTop: 20,
    },
    subtitle5: {
      fontFamily: "Roboto",
      fontSize: 15,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      padding: "10 20",
      marginTop: 18,
      textAlign: 'center',
    },
    title2: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 42,
      color: "#ef4056",
      textAlign: 'center',
      maxWidth: '50%',
    },
    card_body: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.35,
      color: "#241f55",
      margin: '12px 0 0'
    },
    error_message: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.35,
      color: "#ef4056",
    },
    dark_header: {
      background: "#24fe241",
      color: "#0010010"
    },
    header_text: {
      fontFamily: "Roboto",
      cursor: 'pointer',
      color: '#AFABB8',
      fontSize: 16,
      fontWeight: 500,
    },
    card_header: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: '#626367',
      fontSize: 16,
    },
    card_date: {
      fontFamily: "Roboto",
      fontWeight: 600,
      color: '#313131',
      fontSize: 18,
      lineHeight: '311.11%',
    },
    card_place: {
      fontFamily: "Roboto",
      fontWeight: 300,
      color: '#7D7987',
      fontSize: 16,
      lineHeight: '175%',
    },
    card_event: {
      fontFamily: "Roboto",
      fontWeight: 700,
      color: '#242424',
      fontSize: 24,
      lineHeight: '233.33%',
    },
    card_decorated_text: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: '#fff',
      fontSize: 14,
      lineHeight: '115%',
    },
    card_link: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: '#4089ED',
      fontSize: 17,
      lineHeight: '165%',
    },

  }
});

export default theme;