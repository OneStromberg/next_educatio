import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import responsiveTheme from '@/Theme'

export default function Custom404() {
	const seconds = 5
	const [countdown, setCountdown] = useState(seconds)
	const router = useRouter()

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1)
		}, 1000)

		const redirectTimer = setTimeout(() => {
			localStorage.clear()
			router.push('/')
		}, seconds * 1000)

		return () => {
			clearInterval(timer)
			clearTimeout(redirectTimer)
		}
	}, [])

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
					<Typography variant='h4_about'>Вибачте, сторінка не існує</Typography>
					<Typography variant='h6'>
						Переадресація на головну сторінку через{' '}
						<span style={{ color: '#27279E', fontWeight: 700 }}>
							{countdown}
						</span>{' '}
						секунд
					</Typography>
				</Box>
			</ThemeProvider>
		</>
	)
}
