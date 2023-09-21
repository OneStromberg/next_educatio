import { Container, Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import background from '../assets/achievments_bg.svg'
import Wavy from './UI/Wavy'
import arrows from '../assets/arrows.svg'
import lb_corner from '../assets/lb_corner.svg'
import rt_corner from '../assets/rt_corner.svg'

const StyledTextContainer = styled(Grid)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const StyledGrid = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	padding: 0;
	width: 100%;
	@media (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`

const GridContainer = styled('div')`
	display: grid;
	grid-template-columns: 3fr 9fr; // Desktop view
	grid-template-rows: 2fr auto;
	gap: 20px;

	@media (max-width: 1150px) {
		grid-template-columns: 12fr; // Desktop view
	}
	@media (max-width: 800px) {
		grid-template-columns: 1fr; // Mobile view
		grid-template-rows: auto;
	}
`

const GridContent = styled('div')`
	display: grid;
	width: fit-content;
	max-width: 100%;
	grid-template-columns: 4fr 4fr; // Desktop view
	grid-template-rows: 2fr auto;
	column-gap: 5%;
	row-gap: 10%;

	@media (max-width: 800px) {
		grid-template-columns: 1fr; // Mobile view
		grid-template-rows: auto;
	}
`

const GridItem = styled(Grid)`
	max-width: 100%;
	width: fit-content;
	align-items: center;
	justify-content: space-between;
`

const Achiewments = ({ isEnglish, data, preferences }) => {
	const apiUrl = process.env.API_URL
	const isMobile = useMediaQuery('(max-width:800px)')
	const isShrink = useMediaQuery('(max-width: 1170px)')
	const isWide = useMediaQuery('(min-width:1450px)')

	if (data.length < 1 || !data) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Achievements' : 'Досягнення'
	const isShort = preferences?.attributes?.isShort

	return (
		<Box
			style={{
				position: 'relative',
				padding: isMobile
					? '50px 5%'
					: isWide
					? '10% 8% 13% 8%'
					: '10% 8% 11% 8%',
				margin: 0,
				background: isShort
					? `url(${background.src}), #fff`
					: `url(${background.src}), linear-gradient(to bottom,  #FBFBFB, #FFFFFF)`,
				backgroundRepeat: 'no-repeat no-repeat',
				backgroundPosition: isMobile ? '' : 'center center',
				backgroundSize: isShrink ? 'cover' : '100%',
			}}
		>
			<Container>
				<div
					style={{
						background: `url(${arrows.src})`,
						position: 'absolute',
						left: 0,
						top: '50%',
						transform: 'translateY(-50%)',
						height: '100%',
						width: '4.5%',
					}}
					alt='Left arrow'
				/>
				<div
					style={{
						background: `url(${arrows.src})`,
						position: 'absolute',
						right: 0,
						top: '50%',
						transform: 'translateY(-50%) scaleX(-1)',
						height: '100%',
						width: '4.5%',
					}}
					alt='Right arrow'
				/>
				<GridContainer>
					<StyledTextContainer>
						<Typography
							id='achievements'
							variant='h4_light'
							component={'h2'}
							gutterBottom
						>
							{pageTitle}
						</Typography>
						<Wavy fill={'#E8E7E0'} />
					</StyledTextContainer>
					<div style={{ height: '100%' }} />
					<div style={{ height: '100%' }} />

					{isMobile ? (
						<Box
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								gap: 40,
							}}
						>
							{data
								.sort((a, b) => a.id - b.id)
								.map((item, index) => (
									<GridItem item key={item.id} gap={5} padding={0}>
										<StyledGrid>
											<Typography variant='h3_light' style={{ lineHeight: 1 }}>
												{item.attributes.number}
											</Typography>
											<Typography variant='text_light' gutterBottom>
												{item.attributes.title}
											</Typography>
										</StyledGrid>
									</GridItem>
								))}
						</Box>
					) : (
						<GridContent
							dataLength={data.length}
							style={{ position: 'relative' }}
						>
							<div
								style={{
									background: `url(${lb_corner.src}) center center no-repeat`,
									position: 'absolute',
									left: '-5%',
									bottom: '-25%',
									width: 57,
									height: 67,
								}}
							/>
							<div
								style={{
									background: `url(${rt_corner.src}) center center no-repeat`,
									position: 'absolute',
									right: '-5%',
									top: '-15%',
									width: 57,
									height: 67,
								}}
							/>
							{data.map((item, index) => (
								<GridItem item key={item.id}>
									<StyledGrid>
										<Typography
											variant='h3_light'
											style={{
												lineHeight: 1,
												width: 'fit-content',
												display: 'flex',
												justifyContent: 'flex-start',
											}}
										>
											{item.attributes.number}
										</Typography>
										<Typography
											variant='text_light'
											gutterBottom
											style={{ maxWidth: '230px' }}
										>
											{item.attributes.title}
										</Typography>
									</StyledGrid>
								</GridItem>
							))}
						</GridContent>
					)}
				</GridContainer>
			</Container>
		</Box>
	)
}

export default Achiewments
