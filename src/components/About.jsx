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
					display: isMobile ? 'flex' : 'grid',
					alignItems: 'center',
					flexDirection: isMobile ? 'column' : '',
					gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
					gap: isMobile ? '50px' : '30px 5%',
					marginTop: '10%',
				}}
			>
				{data
					.sort((a, b) => a.id - b.id)
					.map((item, index) => {
						return (
							<AboutElement
								key={index}
								item={item}
								index={index}
								isMobile={isMobile}
							/>
						)
					})}
			</Box>
		</Container>
	)
}

export default About
