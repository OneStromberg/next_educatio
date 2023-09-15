import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { styled } from '@mui/system'
import Wavy from './UI/Wavy'

const StyledContainer = styled(Box)`
	padding: 5% 10%;
	margin: 0 auto;

	@media (max-width: 600px) {
		padding: 20% 10%;
	}
`

const StyledHeaderContainer = styled(Grid)`
	grid-column: 1 / 3;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 20px;
`

const About = ({ isEnglish, data }) => {
	const apiUrl = process.env.API_URL
	const isMobile = useMediaQuery('(max-width:1000px)')

	if (data.length < 1 || !data) {
		return <></>
	}

	return (
		<StyledContainer id='actions'>
			<StyledHeaderContainer>
				<Typography variant='h4' gutterBottom color={'#F7BA21'}>
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
					gap: isMobile ? '50px' : '80px 5%',
					marginTop: '10%',
				}}
			>
				{data
					.sort((a, b) => a.id - b.id)
					.map((item, index) => {
						return (
							<div
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'center',
									maxWidth: '100%',
									marginTop: isMobile ? 0 : index % 2 === 0 ? '-15%' : '0',
								}}
							>
								<Grid
									item
									xs={12}
									sm={6}
									style={{
										display: 'flex',
										flexWrap: 'nowrap',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										aspectRatio: '2.5/1',
										flexDirection: isMobile ? 'column' : 'row',
										// paddingTop: 40,
									}}
								>
									<Image
										src={`${apiUrl.slice(0, apiUrl.length - 4)}${
											item?.attributes?.image?.data?.attributes?.url
										}`}
										alt='About Us'
										width={180}
										height={194}
									/>
									<Grid
										item
										xs={12}
										sm={6}
										margin={isMobile ? '15px 0 0 0' : '0 0 0 50px'}
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: 5,
										}}
									>
										<Typography variant='about_heading' gutterBottom>
											{isEnglish
												? item.attributes.EnglishTitle
												: item.attributes.title}
										</Typography>
										<Typography variant='about_subheading' gutterBottom>
											<ReactMarkdown>
												{isEnglish
													? item.attributes.englishText
													: item.attributes.text}
											</ReactMarkdown>
										</Typography>
									</Grid>
								</Grid>
							</div>
						)
					})}
			</Box>
		</StyledContainer>
	)
}

export default About
