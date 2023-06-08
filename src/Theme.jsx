import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontFamily: "Roboto",
          fontSize: 16,
          color: "#8493B7",
          paddingY: 3,
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
      fontSize: 14,
      color: "#8C9EB9",
      marginTop: 8,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 14,
      marginTop: 4,
    },
    body2: {
      fontSize: 12,
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 20,
      color: "#1B2753",
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
      color: "#5A7092",
    },
  },
});

export default theme;