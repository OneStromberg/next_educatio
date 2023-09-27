import { Typography, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import responsiveTheme from '@/Theme'

export default function Custom500() {
	return (
		<>
			<ThemeProvider theme={responsiveTheme}>
				<Box
					style={{
						width: '100%',
						height: '100dvh',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant='h4_about'>
						Серверна помилка, ми вже над цим працюємо
					</Typography>
				</Box>
			</ThemeProvider>
		</>
	)
}
