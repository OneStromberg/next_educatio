import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function AnimatedLoader() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh', // Занимает всю высоту экрана
			}}
		>
			<CircularProgress />
		</Box>
	)
}
