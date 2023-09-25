import { Fragment } from 'react'
import { Container, Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import AchievementsElement from './Elements/AchievementsElement'
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
	width: 100%;
	max-width: 100%;
	grid-template-columns: 1fr 1fr; // Desktop view
	grid-template-rows: 2fr auto;
	column-gap: 2%;
	row-gap: 5%;

	@media (max-width: 800px) {
		grid-template-columns: 1fr; // Mobile view
		grid-template-rows: auto;
	}
`

const Achiewments = ({ isEnglish, data, preferences }) => {
	const isMobile = useMediaQuery('(max-width:800px)')
	const isShrink = useMediaQuery('(max-width: 1170px)')
	const isWide = useMediaQuery('(min-width:1450px)')

	if (data.length < 1 || !data) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Achievements' : 'Досягнення'
	const isShort = preferences?.attributes?.isShort
	const middle = Math.ceil(data.length / 2)

	return (
		<Box
			style={{
				position: 'relative',
				overflow: 'hidden',
				padding: isMobile
					? '50px 0% 100px'
					: isWide
					? '6.5% 0% 14.2%'
					: '6.5% 0% 9.2%',
				margin: 0,
				background: isShort
					? `url(${background.src}), #fff`
					: `url(${background.src}), linear-gradient(to bottom,  #FBFBFB, #FFFFFF)`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: isMobile ? '50% 0' : 'center center',
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
						<GridContent
							dataLength={data.length}
							style={{ position: 'relative' }}
						>
							<div
								style={{
									background: `url(${lb_corner.src}) center center no-repeat`,
									position: 'absolute',
									left: '15%',
									bottom: '-5%',
									width: 57,
									height: 67,
								}}
							/>
							<div
								style={{
									background: `url(${rt_corner.src}) center center no-repeat`,
									position: 'absolute',
									right: '5%',
									top: '-5%',
									width: 57,
									height: 67,
								}}
							/>
							<Grid
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 3fr',
									alignItems: 'flex-start',
									gap: 30,
								}}
							>
								{data
									.sort((a, b) => a.id - b.id)
									.map((item, index) => (
										<Fragment key={item.id}>
											<div />
											<AchievementsElement item={item} />
										</Fragment>
									))}
							</Grid>
						</GridContent>
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
									bottom: '-5%',
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
							<Box
								style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
							>
								{data
									.sort((a, b) => a.id - b.id)
									.slice(0, middle)
									.map((item, index) => (
										<Fragment key={item.id}>
											<AchievementsElement item={item} />
										</Fragment>
									))}
							</Box>

							<Box
								style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
							>
								{data
									.sort((a, b) => a.id - b.id)
									.slice(middle, data.length)
									.map((item, index) => (
										<Fragment key={item.id}>
											<AchievementsElement item={item} />
										</Fragment>
									))}
							</Box>
						</GridContent>
					)}
				</GridContainer>
			</Container>
		</Box>
	)
}

export default Achiewments
