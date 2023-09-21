import Image from 'next/image'
import { Container, Box, Grid, Typography, useMediaQuery } from '@mui/material'
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
	const isWide = useMediaQuery('(min-width: 1300px)')
	const isShrink = useMediaQuery('(max-width: 1250px)')
	const isMobile = useMediaQuery('(max-width:800px)')
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
				backgroundPosition: isMobile ? '50% 50%' : 'center center',
				padding: isMobile ? '120px 0 150px' : '4% 0 12%',
			}}
		>
			<Container>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '50px',
						margin: '0 auto',
					}}
				>
					<StyledTextContainer>
						<Typography variant='h4_light' component={'h2'} gutterBottom>
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
						{data
							.sort((a, b) => a.id - b.id)
							.map((item, index) => (
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
												position: 'relative',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												justifySelf: 'center',
												width: '50%',
												height: '180px',
												zIndex: 1,
											}}
										>
											{index + 1}
										</Typography>
										<Image
											src={num_bg.src}
											width={180}
											height={180}
											style={{
												position: 'absolute',
												left: '-10%',
												top: '${index * -40}px',
											}}
										/>
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
											<Typography variant='member_subtitle'>
												<ReactMarkdown>{item.attributes.text}</ReactMarkdown>
											</Typography>
										</Box>
									</StyledGrid>
								</Grid>
							))}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}

export default EducationalAreas
