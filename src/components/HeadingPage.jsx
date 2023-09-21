import React from 'react'
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/system'
import background from '../assets/heading_bg.svg'
import Image from 'next/image'

const StyledContainer = styled(Container)`
	max-height: 100dvh;
	display: flex;
	align-items: center;
	color: #fff;
	max-width: 100dvw;
	padding: 5% 20%;
	column-gap: 10%;
	margin-top: 50px;

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 10% 4%;
	}
	@media (max-width: 1280px) {
		padding: 10% 4%;
	}
`

const HeadingPage = ({ isEnglish, data, preferences }) => {
	const isMobile = useMediaQuery('(max-width:600px)')
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
		<StyledContainer
			style={{
				backgroundImage: `url(${background.src})`,
				backgroundColor: ` ${isShort ? '#fff' : '#FBFBFB'}`,
				maxWidth: 'none',
				minHeight: isMobile ? '850px' : 'none',
				height: isTablet ? '100%' : '100vh',
				justifyContent: 'center',
				backgroundSize: 'cover',
				backgroundPosition: isMobile ? '' : 'center center',
				backgroundRepeat: 'no-repeat no-repeat',
				paddingTop: isMobile ? 20 : '',
				rowGap: isMobile ? '50px' : '',
			}}
		>
			
			<StyledContainer>
				<div>
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
						gap: 20,
						width: isTablet ? '90%' : '75%',
					}}
				>
					<ReactMarkdown components={{ p: 'h2' }}>{subtext}</ReactMarkdown>
				</Typography>
			</div>
			<div style={{ display: isMobile ? 'none' : 'block' }}>
				<Image
					src={bgURL}
					alt='image'
					width={isTablet ? 250 : isWide ? 420 : 300}
					height={isTablet ? 250 : isWide ? 420 : 300}
					loading='lazy'
				/>
			</div>
		</StyledContainer>
	)
}

export default HeadingPage
