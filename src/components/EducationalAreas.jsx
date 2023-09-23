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

const EducationalAreas = ({ isEnglish, data }) => {
	const isWide = useMediaQuery('(min-width: 1300px)')
	const isShrink = useMediaQuery('(max-width: 1250px)')
	const isMobile = useMediaQuery('(max-width: 600px)')
	const isSmallMobile = useMediaQuery('(max-width: 400px)')

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
			<Container

			>
				<Typography variant='h4_light' component={'h2'} gutterBottom>
					{pageTitle}
				</Typography>
				<Grid
					style={{
						display: isMobile ? 'grid' : 'flex',
						flexDirection: 'column',
						gridTemplateColumns: isMobile ? '1fr 4fr' : '1fr',
						gap: isMobile ? '45px' : '15vh',
						margin: '0 auto',
					}}
				>
					<Wavy fill={'#E8E7E0'} />
					{isMobile && <div />}
					{isMobile && <div />}
					<Grid
						container
						spacing={2}
						style={{
							display: isMobile ? 'grid' : 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '' : '',
							gap: isMobile ? 45 : 48,
							flexWrap: 'nowrap',
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
										marginTop: isMobile ? '0' : `${index * -50}px`,
										padding: 0,
									}}
								>
									<StyledGrid
										container
										position='relative'
										alignItems='flex-start'
										flexWrap={'nowrap'}
										gap={3}
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
												width: '10%',
												zIndex: 1,
											}}
										>
											{index + 1}
										</Typography>
										<div
											src={num_bg.src}
											style={{
												position: 'absolute',
												background: `url(${num_bg.src})`,
												width: 180,
												height: 180,
												transform: `translateX(-50%) translateY(-30%)${
													index === 0
														? 'rotate(0deg)'
														: `rotate(${235 * index - 65}deg)`
												}`,
											}}
										/>
										<Box
											width={'100%'}
											style={{
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'center',
												zIndex: 1,
												gap: '15px',
											}}
										>
											<Typography variant='member_title'>
												{item.attributes.title}
											</Typography>
											<Typography variant='member_subtitle'>
												<ReactMarkdown>{item.attributes.text}</ReactMarkdown>
											</Typography>
										</Box>
									</StyledGrid>
								</Grid>
							))}
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default EducationalAreas
