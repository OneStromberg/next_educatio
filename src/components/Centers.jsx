import { Container, Box, Grid, Typography, useMediaQuery } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Wavy from './UI/Wavy'
import GeoPin from '../assets/geo_pin.svg'

const Centers = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width:600px)')

	if (!data || data.length < 1) {
		return <></>
	}

	const pageTitle = isEnglish ? 'Centers of Education' : 'Центри Едукації'
	const pageSubtitle = isEnglish ? 'acting in' : 'діють у'

	return (
		<div
			style={{ background: '#FBFBFB', padding: isMobile ? '30px 0' : '70px 0' }}
			id='centers'
		>
			<Container>
				<Typography variant='h4_blue' component={'h2'} gutterBottom>
					{pageTitle}
				</Typography>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: isMobile ? '1fr 4fr' : '1fr 11fr',
					}}
				>
					<div />
					<div />
					<Box
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Wavy fill='#1F1F71' />
					</Box>
					<div>
						<Typography
							variant='h5_blue'
							style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
						>
							{pageSubtitle}
						</Typography>
						<Grid
							container
							spacing={2}
							style={{
								padding: isMobile ? '15% 0' : '3% 0 1% 0',
								justifySelf: 'end',
								display: 'flex',
								alignItems: 'start',
								rowGap: 20,
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
												gap: 5,
											}}
										>
											<Typography variant='card_header'>
												{item.attributes.name}
											</Typography>
											<Box
												display='flex'
												gap={1}
												style={{ textAlign: 'start', alignItems: 'center' }}
											>
												<Image
													src={GeoPin.src}
													alt='geo_pin'
													width={24}
													height={24}
												/>
												<Typography variant='card_subheader'>
													<ReactMarkdown>
														{item.attributes.adress}
													</ReactMarkdown>
												</Typography>
											</Box>
										</Box>
									</Grid>
								))}
						</Grid>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Centers
