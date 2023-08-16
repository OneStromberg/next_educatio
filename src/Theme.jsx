import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto';
import '@fontsource/roboto-condensed';

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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: '#FFFFFFB2',
            borderBottomColor: '#FFFFFFB2',
          },
          '& .MuiFormLabel-root': {
            color: '#FFFFFFB2',
          },
          '& .MuiInputBase-root.Mui-focused': {
            color: '#FFFFFFB2',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: '#FFFFFFB2',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#FFFFFFB2',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#FFFFFFB2',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#FFFFFFB2',
          },
          // Добавьте другие состояния по необходимости
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#FF5733',  // основной цвет
      contrastText: '#FFF',  // цвет текста
    },
    secondary: {
      main: '#FFFFFFB2',
      contrastText: '#FFFFFFB2'
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
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '175%',
      textTransform: 'uppercase',
      color: "#262626",
    },
    h4_light: {
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '175%',
      textTransform: 'uppercase',
      color: "#e8e7e0",
    },
    h5: {
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: '26px',
      lineHeight: '140%',
      textTransform: 'uppercase',
      color: "#262626",
      opacity: .8,
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
    subtitle_light: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: 300,
      color: '#FFFFFFB2',
    },
    news_page_title: {
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: '175%',
      color: "#7d7987",
      textAlign: 'center',
      marginTop: 70,
    },
    news_title: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: 21,
      lineHeight: '150%',
      color: "#000",
      marginTop: 20,
    },
    news_text: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: '175%',
      color: "#7d7987",
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
    card_header2: {
      fontFamily: "Roboto",
      fontWeight: 500,
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
    form_text: {
      color: 'rgba(255, 255, 255, 0.70)',
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: 400,
    }
  }
});

export default theme;