import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import '@fontsource/roboto'
import '@fontsource/roboto-condensed'
import '@fontsource/roboto-slab'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
				},
				sizeLarge: {
					fontFamily: 'Roboto',
					fontSize: 42,
					color: '#ef4056',
					marginBottom: 16,
				},
				text: {
					'&:hover': {
						fontWeight: 700,
						background: 'none',
					},
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
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
					'&:hover': {
						backgroundColor: '#0000000',
					},
				},
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: 0,
					width: 'fit-content',
					'&:hover': {
						backgroundColor: 'transparent',
						color: ' #1F1F71',
					},
				},
			},
		},
	},

	palette: {
		primary: {
			main: '#FF5733', // основной цвет
			contrastText: '#FFF', // цвет текста
		},
		secondary: {
			main: '#FFFFFFB2',
			contrastText: '#FFFFFFB2',
		},
	},
	typography: {
		fontFamily: 'Roboto',
		fontSize: 14,
		button: {
			textTransform: 'none',
		},
		allVariants: {
			cursor: 'default',
			fontSize: 20,
			fontWeight: 300,
			color: '#241f55',
			lineHeight: 1.55,
		},
		header_subtext: {
			color: '#AFABB8',
			fontFamily: 'Roboto',
			fontSize: 18,
			fontWeight: 400,
		},
		h1: {
			fontFamily: 'Roboto',
			fontWeight: 600,
			fontSize: 50,
			color: '#fff',
		},
		h2: {
			fontFamily: 'Roboto',
			fontWeight: 300,
			fontSize: 18,
			color: '#fff',
		},
		h3: {
			fontFamily: 'Roboto',
			fontWeight: 600,
			fontSize: 65,
			color: '#1B2753',
		},
		h3_light: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 60,
			lineHeight: 1.75,
			textTransform: 'uppercase',
			color: '#e8e7e0',
		},
		h4_about: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			lineHeight: 1.75,
			textTransform: 'uppercase',
			color: '#262626',
		},
		h4_light: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			lineHeight: 1.75,
			textTransform: 'uppercase',
			color: '#e8e7e0',
		},
		h4_blue: {
			color: '#1F1F71',
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			lineHeight: 1.75,
			textTransform: 'uppercase',
		},
		h4_pink: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			lineHeight: 1.75,
			color: '#FF9888',
			textTransform: 'uppercase',
		},
		h5_blue: {
			color: '#27278F',
			fontFamily: 'Roboto',
			fontWeight: 400,
			fontSize: 18,
		},
		h5: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 26,
			lineHeight: 1.4,
			textTransform: 'uppercase',
			color: '#262626',
			opacity: 0.8,
		},
		h6: {
			color: '#1B2753',
			fontFamily: 'Roboto',
			fontWeight: 300,
			fontSize: 16,
		},

		subtitle1: {
			fontFamily: 'Roboto',
			fontSize: 14,
			color: '#241f55',
			fontWeight: 300,
			lineHeight: 1.55,
			marginTop: 12,
		},
		subtitle2: {
			fontFamily: 'Roboto',
			fontSize: 14,
			color: '#666666',
			fontWeight: 300,
			lineHeight: 1.55,
			marginBottom: 80,
		},
		subtitle3: {
			fontFamily: 'Roboto',
			fontSize: 24,
			color: '#262626',
			fontWeight: 300,
			lineHeight: 1.55,
			paddingTop: 41,
			width: '50%',
		},
		title_black: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			color: '#262626',
			lineHeight: 1.75,
			textAlign: 'center',
		},
		subtitle_light: {
			fontFamily: 'Roboto',
			fontSize: 16,
			fontWeight: 300,
			color: '#FFFFFFB2',
		},
		news_page_title: {
			fontFamily: 'Roboto Condensed',
			fontWeight: 700,
			fontSize: 32,
			lineHeight: 1.75,
			color: '#7d7987',
			textAlign: 'center',
			marginTop: 70,
			textTransform: 'uppercase',
		},
		news_preview_title: {
			fontFamily: 'Roboto',
			fontWeight: 700,
			fontSize: 21,
			lineHeight: 1.5,
			color: '#000',
			marginTop: 20,
		},
		news_preview_text: {
			fontFamily: 'Roboto',
			fontWeight: 300,
			fontSize: 16,
			lineHeight: 1.75,
			color: '#7d7987',
		},
		news_text: {
			fontFamily: 'Roboto',
			fontWeight: 400,
			fontSize: 18,
			lineHeight: 1.75,
			color: '#000',
		},
		subtitle5: {
			fontFamily: 'Roboto',
			fontSize: 15,
			color: '#241f55',
			fontWeight: 300,
			lineHeight: 1.55,
			padding: '10 20',
			marginTop: 18,
			textAlign: 'center',
		},
		title2: {
			fontFamily: 'Roboto',
			fontWeight: 600,
			fontSize: 42,
			color: '#ef4056',
			textAlign: 'center',
			maxWidth: '50%',
		},
		card_body: {
			fontFamily: 'Roboto',
			fontWeight: 300,
			fontSize: 16,
			lineHeight: 1.35,
			color: '#241f55',
			margin: '12px 0 0',
		},
		error_message: {
			fontFamily: 'Roboto',
			fontWeight: 300,
			fontSize: 14,
			lineHeight: 1.35,
			color: '#ef4056',
		},
		dark_header: {
			background: '#24fe241',
			color: '#0010010',
		},
		header_text: {
			fontFamily: 'Roboto',
			cursor: 'pointer',
			color: '#AFABB8',
			fontSize: 16,
			fontWeight: 500,
		},
		card_header: {
			color: 'rgba(38, 38, 38, 0.80)',
			fontFamily: 'Roboto Condensed',
			fontSize: 26,
			fontWeight: 700,
			lineHeight: 1.38,
			textTransform: 'uppercase',
		},
		card_subheader: {
			color: '#626367',
			fontFamily: 'Roboto',
			fontSize: 16,
			fontWeight: 500,
		},
		card_date: {
			fontFamily: 'Roboto',
			fontWeight: 600,
			color: '#313131',
			fontSize: 18,
			lineHeight: 3.11,
		},
		card_place: {
			fontFamily: 'Roboto',
			fontWeight: 300,
			color: '#7D7987',
			fontSize: 16,
			lineHeight: 1.75,
			textTransform: 'uppercase',
		},
		card_event: {
			fontFamily: 'Roboto',
			fontWeight: 700,
			color: '#242424',
			fontSize: 24,
			lineHeight: 1.15,
		},
		card_decorated_text: {
			fontFamily: 'Roboto',
			fontWeight: 400,
			color: '#fff',
			fontSize: 14,
			lineHeight: 1.15,
		},
		card_link: {
			fontFamily: 'Roboto',
			fontWeight: 400,
			color: '#4089ED',
			fontSize: 17,
			lineHeight: 1.65,
		},
		form_text: {
			color: 'rgba(255, 255, 255, 0.70)',
			fontFamily: 'Roboto',
			fontSize: 18,
			fontWeight: 400,
		},
		text_light: {
			color: '#FBF5E5',
			fontFamily: 'Roboto',
			fontSize: 20,
			fontWeight: 400,
			lineHeight: 1.2,
		},
		member_title: {
			color: '#FFF1D0',
			fontFamily: 'Roboto Condensed',
			fontSize: 26,
			fontWeight: 700,
			lineHeight: 1.38,
			textTransform: 'uppercase',
			flexBasis: 0.8,
		},
		member_subtitle: {
			color: '#FFF1D0',
			fontFamily: 'Roboto',
			fontSize: 16,
			fontWeight: 300,
		},
		member_number: {
			color: '#FFF1D0',
			fontFamily: 'Roboto Slab',
			fontSize: 80,
			fontWeight: 900,
			lineHeight: 0.7,
		},
		hit_text: {
			color: '#870606',
			textAlign: 'center',
			fontFamily: 'Roboto',
			fontSize: 14,
			fontWeight: 700,
			lineHeight: 1.14,
			textTransform: 'uppercase',
		},
		news_title: {
			color: '#FFF',
			fontFamily: 'Roboto',
			fontSize: 60,
			fontWeight: 700,
			lineHeight: 1.33,
		},
		about_heading: {
			color: '#2A2AB4',
			fontFamily: 'Roboto Condensed',
			fontSize: 26,
			fontWeight: 700,
			lineHeight: 1.38,
			textTransform: 'uppercase',
		},
		about_subheading: {
			color: '#2A2AB4',
			opacity: 0.8,
			fontFamily: 'Roboto',
			fontSize: 16,
			fontWeight: 300,
			lineHeight: 1.5,
		},
		footer_text: {
			color: '#FFF',
			fontFamily: 'Roboto',
			fontSize: 18,
			fontWeight: 400,
		},
		footer_subtext: {
			color: 'rgba(255, 255, 255, 0.70)',
			textAlign: 'right',
			fontFamily: 'Roboto',
			fontSize: 12,
			fontWeight: 400,
		},
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
	factor: 4,
})

export default responsiveTheme
