import dynamic from 'next/dynamic'
import { Box, Grid, Typography, useMediaQuery, Container } from '@mui/material'
import { styled } from '@mui/system'
import Wavy from './UI/Wavy'
const AboutElement = dynamic(() => import('./Elements/AboutElement'))

const StyledHeaderContainer = styled(Grid)`
	grid-column: 1 / 3;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 20px;
	margin-top: 5%;
`

const About = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width:1000px)')

	if (data.length < 1 || !data) {
		return <></>
	}
	const middle = Math.ceil(data.length / 2)
	return (
		<Container id='actions'>
			<StyledHeaderContainer>
				<Typography
					variant='h4_about'
					component={'h2'}
					gutterBottom
					color={'#F7BA21'}
				>
					{isEnglish ? 'What we are doing' : 'Що ми робимо'}
				</Typography>
				<div>
					<Wavy fill='#F7BA21' />
				</div>
			</StyledHeaderContainer>

			<Box
				style={{
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					gap: 35,
					// marginTop: '2%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 15,
					}}
				>
					{data
						.sort((a, b) => a.id - b.id)
						.slice(0, middle)
						.map((item, index) => (
							<AboutElement
								key={index}
								item={item}
								index={index}
								isMobile={isMobile}
							/>
						))}
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 50,
						marginTop: '15%',
					}}
				>
					{data
						.sort((a, b) => a.id - b.id)
						.slice(middle, data.length)
						.map((item, index) => (
							<AboutElement
								key={index}
								item={item}
								index={index}
								isMobile={isMobile}
							/>
						))}
				</div>
			</Box>
		</Container>
	)
}

export default About
