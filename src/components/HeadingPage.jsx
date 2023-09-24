import React from 'react'
import {
	Container,
	Typography,
	useMediaQuery,
	useTheme,
	Box,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/system'
import background from '../assets/heading_bg.svg'
import Image from 'next/image'

const StyledContainer = styled(Container)`
	display: grid;
	align-items: center;
	color: #fff;
	max-width: 100vw;
	grid-template-columns: 5.5fr 2fr 3.2fr;
	margin-top: 50px;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column-reverse;
		gap: 5vh;
		grid-template-columns: 1fr;
		padding: 10% 4%;
	}
`

const HeadingPage = ({ isEnglish, data, preferences }) => {
	const isMobile = useMediaQuery('(max-width:800px)')
	const isTablet = useMediaQuery('(max-width:1280px)')
	const isWide = useMediaQuery('(min-width:1600px)')

	const apiUrl = process.env.API_URL
	if (!data) {
		return null
	}
	const isShort = preferences?.attributes?.isShort
	const text = data.text
	const subtext = data.subtext
	const backgroundImage = data?.BackgroundImage?.data?.attributes?.url
	const bgURL = apiUrl.slice(0, apiUrl.length - 4) + backgroundImage

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: `url(${background.src})`,
				backgroundColor: `${isShort ? '#fff' : '#FBFBFB'}`,
				maxWidth: 'none',
				minHeight: isMobile ? '850px' : '100svh',
				height: '100%',
				justifyContent: 'center',
				backgroundSize: 'cover',
				backgroundPosition: isMobile ? '' : 'center center',
				backgroundRepeat: 'no-repeat no-repeat',
				paddingTop: isMobile ? 20 : 0,
			}}
		>
			<StyledContainer>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 30,
						paddingBottom: isMobile ? '33%' : '0%',
					}}
				>
					<Typography variant='h1' component='h1' gutterBottom>
						<ReactMarkdown components={{ p: React.Fragment }}>
							{text}
						</ReactMarkdown>
					</Typography>

					<Typography
						variant='h2'
						component={'span'}
						gutterBottom
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 25,
						}}
					>
						<ReactMarkdown components={{ p: 'h2' }}>{subtext}</ReactMarkdown>
					</Typography>
				</Box>

				<div />

				<div>
					<Image
						src={bgURL}
						alt='image'
						width={isTablet ? 250 : isWide ? 420 : 300}
						height={isTablet ? 250 : isWide ? 420 : 300}
						loading='lazy'
					/>
				</div>
			</StyledContainer>
		</Container>
	)
}

export default HeadingPage
