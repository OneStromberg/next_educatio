import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import ReactMarkdown from 'react-markdown'
import Wavy from './UI/Wavy'
import educationalBg from '../assets/ed_areas.svg'
import num_bg from '../assets/num_bg.svg'

const StyledGrid = styled(Grid)`
	background-size: cover;
	background-repeat: no-repeat no-repeat;
	color: #fff;
`

const StyledTextContainer = styled(Grid)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 2%;
`

const EducationalAreas = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width:600px)')
	const isWide = useMediaQuery('(min-width: 1300px)')
	const isShrink = useMediaQuery('(max-width: 1250px)')
	if (!data || data.length < 1) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Educational Areas' : 'Навчальні напрями'

	return (
		<Box
			id='areas'
			style={{
				background: `url(${educationalBg.src}), linear-gradient(to bottom, #FFFFFF, #FBFBFB)`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat no-repeat',
				backgroundPosition: 'center center',
				padding: isMobile ? '120px 0 150px 0' : '6% 0 6% 0',
				paddingBottom: isWide ? '13%' : isShrink ? '5%' : '8%',
			}}
		>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '50px',
					maxWidth: isMobile ? '90%' : '80%',
					margin: '0 auto',
				}}
			>
				<StyledTextContainer>
					<Typography variant='h4_light' gutterBottom>
						{pageTitle}
					</Typography>
					<Wavy fill={'#E8E7E0'} />
				</StyledTextContainer>
				<Grid
					container
					spacing={2}
					style={{
						display: isMobile ? 'flex' : 'flex',
						flexDirection: isMobile ? 'column' : '',
						padding: isMobile ? '' : '',
						gap: isMobile ? 45 : '',
						width: '100%',
						margin: '0 auto',
					}}
				>
					{data.map((item, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={item.id}
							style={{
								marginTop: isMobile ? '0' : `${index * -35}px`,
								padding: 0,
							}}
						>
							<StyledGrid
								container
								position='relative'
								alignItems='center'
								flexWrap={'nowrap'}
								margin={0}
							>
								<Typography
									variant='member_number'
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										justifySelf: 'center',
										backgroundImage: `url(${num_bg.src})`,
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '180px 180px',
										width: '100%',
										height: '180px',
										zIndex: 0,
									}}
								>
									{index + 1}
								</Typography>
								<Box
									width={'100%'}
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										zIndex: 1,
									}}
								>
									<Typography variant='member_title'>
										{item.attributes.title}
									</Typography>
									{/* <br /> */}
									<Typography
										variant='member_subtitle'
										style={{ width: isMobile ? '100%' : '130%' }}
									>
										<ReactMarkdown>{item.attributes.text}</ReactMarkdown>
									</Typography>
								</Box>
							</StyledGrid>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	)
}

export default EducationalAreas
