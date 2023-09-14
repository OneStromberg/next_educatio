import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import Image from 'next/image'
import Wavy from './UI/Wavy'
import GeoPin from '../assets/geo_pin.svg'

const CenterItem = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: start;
	max-width: 250px;
	gap: 10px;
`

const Centers = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(max-width:1300px)')
	if (!data || data.length < 1) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Centers of Education' : 'Центри Едукації'
	const pageSubtitle = isEnglish ? 'acting in' : 'діють у'

	const chunks = []
	for (let i = 0; i < data.length; i += 9) {
		chunks.push(data.slice(i, i + 9))
	}

	return (
		<div style={{ background: '#FBFBFB' }}>
			<Box
				mt={5}
				mb={5}
				id='centers'
				style={{
					display: 'flex',
					margin: '0 auto',
					flexDirection: 'column',
					padding: isMobile ? '50px 0 0 0' : '4.5% 0%',
					width: '80%',
				}}
			>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: isMobile ? 15 : 0,
					}}
				>
					<Typography variant='h4_blue' gutterBottom>
						{pageTitle}
					</Typography>
					<Typography
						variant='h5_blue'
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '30px',
						}}
					>
						<Wavy fill='#1F1F71' /> {pageSubtitle}
					</Typography>
				</Box>
				{chunks
					.sort((a, b) => a.id - b.id)
					.map((chunk, index) => (
						<Grid
							container
							spacing={2}
							style={{
								alignItems: 'center',
								flexDirection: isMobile ? 'column' : 'row',
								columnGap: isTablet ? '5%' : '10%',
								rowGap: isMobile ? 40 : 10,
								padding: isMobile ? '15% 0' : '1% 0 1% 92px',
							}}
							key={index}
						>
							{chunk
								.sort((a, b) => a.id - b.id)
								.map(item => (
									<Grid
										item
										xs={4}
										key={item.id}
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											maxWidth: 250,
											margin: 0,
										}}
									>
										<CenterItem>
											<Typography variant='card_header'>
												{isEnglish
													? item.attributes.EnglishName
													: item.attributes.name}
											</Typography>
											<Box
												display='flex'
												gap={1}
												style={{ textAlign: 'start' }}
											>
												<Image
													src={GeoPin.src}
													alt='geo_pin'
													width={24}
													height={24}
												/>
												<Typography variant='card_subheader'>
													{isEnglish
														? item.attributes.EnglishAdress
														: item.attributes.adress}
												</Typography>
											</Box>
										</CenterItem>
									</Grid>
								))}
						</Grid>
					))}
			</Box>
		</div>
	)
}

export default Centers
