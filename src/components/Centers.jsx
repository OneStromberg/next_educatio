import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import ReactMarkdown from 'react-markdown'
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

	if (!data || data.length < 1) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Centers of Education' : 'Центри Едукації'
	const pageSubtitle = isEnglish ? 'acting in' : 'діють у'

	return (
		<div style={{ background: '#FBFBFB' }}>
			<Box
				mt={5}
				mb={5}
				id='centers'
				style={{
					margin: '0 auto',
					padding: isMobile ? '50px 0 0 0' : '4.5% 0%',
					width: '80%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
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
						style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
					>
						<Wavy fill='#1F1F71' /> {pageSubtitle}
					</Typography>
				</Box>
				<Grid
					container
					spacing={2}
					style={{
						padding: isMobile ? '15% 0' : '3% 0 1% 95px',
					}}
				>
					{data
						.sort((a, b) => a.id - b.id)
						.map((item, index) => (
							<Grid item xs={12} md={4} key={index}>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='flex-start'
									justifyContent='start'
									style={{
										maxWidth: '100%',
									}}
								>
									<Typography variant='card_header'>
										{isEnglish
											? item.attributes.EnglishName
											: item.attributes.name}
									</Typography>
									<Box display='flex' gap={1} style={{ textAlign: 'start' }}>
										<Image
											src={GeoPin.src}
											alt='geo_pin'
											width={24}
											height={24}
										/>
										<Typography variant='card_subheader'>
											<ReactMarkdown>
												{isEnglish
													? item.attributes.EnglishAdress
													: item.attributes.adress}
											</ReactMarkdown>
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
				</Grid>
			</Box>
		</div>
	)
}

export default Centers
