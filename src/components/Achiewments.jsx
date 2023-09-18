import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
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
	padding: 20px;
`

const StyledGrid = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	align-items: center;
	padding: 0;
	width: 100%;
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`

const GridContainer = styled('div')`
	display: grid;
	grid-template-columns: ${props =>
		props.dataLength > 3 ? ' 1fr 1fr' : '1fr 1fr 1fr'};
	justify-content: start;
	justify-items: start;
	max-width: 75%;
	gap: 20px;
	margin: 0 0 0 30%;
`

const GridItem = styled(Grid)`
	max-width: 410px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

const Achiewments = ({ isEnglish, data, preferences }) => {
	const apiUrl = process.env.API_URL
	const isMobile = useMediaQuery('(max-width:600px)')
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
				backgroundSize: isMobile ? 'cover' : '100%',
			}}
		>
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
			<StyledTextContainer>
				<Typography id='achievements' variant='h4_light' gutterBottom>
					{pageTitle}
				</Typography>
				<Wavy fill={'#E8E7E0'} />
			</StyledTextContainer>

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
				<GridContainer
					dataLength={data.length}
					style={{ position: 'relative' }}
				>
					<div
						style={{
							background: `url(${lb_corner.src}) center center no-repeat`,
							position: 'absolute',
							left: '-5%',
							bottom: '-15%',
							width: 57,
							height: 67,
						}}
					/>
					<div
						style={{
							background: `url(${rt_corner.src}) center center no-repeat`,
							position: 'absolute',
							right: '0%',
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
										width: '30%',
										display: 'flex',
										justifyContent: 'flex-end',
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
				</GridContainer>
			)}
		</Box>
	)
}

export default Achiewments
