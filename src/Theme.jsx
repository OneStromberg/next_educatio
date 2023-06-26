import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

const theme = createTheme({
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
    h6: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
    },
    h5: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 600,
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
    card_header: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 16,
      color: "#ef4056",
    },
  },
});

export default theme;