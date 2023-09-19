import dynamic from 'next/dynamic'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import Wavy from './UI/Wavy'
const AboutElement = dynamic(() => import('./Elements/AboutElement'))

const StyledContainer = styled(Box)`
	padding: 5% 10%;
	margin: 0 auto;

	@media (max-width: 600px) {
		padding: 10%;
	}
`

const StyledHeaderContainer = styled(Grid)`
	grid-column: 1 / 3;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 20px;
`

const About = ({ isEnglish, data }) => {
	const apiUrl = process.env.API_URL
	const isMobile = useMediaQuery('(max-width:1000px)')

	if (data.length < 1 || !data) {
		return <></>
	}

	return (
		<StyledContainer id='actions'>
			<StyledHeaderContainer>
				<Typography variant='h4_about' gutterBottom color={'#F7BA21'}>
					{isEnglish ? 'What we are doing' : 'Що ми робимо'}
				</Typography>
				<div>
					<Wavy fill='#F7BA21' />
				</div>
			</StyledHeaderContainer>

			<Box
				style={{
					display: isMobile ? 'flex' : 'grid',
					alignItems: 'center',
					flexDirection: isMobile ? 'column' : '',
					gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
					gap: isMobile ? '50px' : '80px 5%',
					marginTop: '10%',
				}}
			>
				{data
					.sort((a, b) => a.id - b.id)
					.map((item, index) => {
						return <AboutElement key={index} item={item} index={index} />
					})}
			</Box>
		</StyledContainer>
	)
}

export default About
