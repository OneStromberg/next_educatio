import { Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/system'
import background from '../assets/heading_bg.svg'
import Image from 'next/image'

const StyledContainer = styled(Container)`
	height: 100dvh;
	display: flex;
	align-items: center;
	color: #fff;
	max-width: 100dvw;
	padding: 25% 20%;
	column-gap: 10%;
	margin-top: 50px;

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 10% 4%;
	}
	@media (max-width: 1250px) {
		padding: 15% 8%;
	}
`

const HeadingPage = ({ isEnglish, data }) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isTablet = useMediaQuery('(max-width:1250px)')
	const isWide = useMediaQuery('(min-width:1600px)')

	const apiUrl = process.env.API_URL
	if (!data) {
		return null
	}

	const text = isEnglish ? data.englishText : data.text
	const subtext = isEnglish ? data.exnglishSubText : data.subtext
	const backgroundImage = data?.BackgroundImage?.data?.attributes?.url
	const bgURL = apiUrl.slice(0, apiUrl.length - 4) + backgroundImage

	return (
		<StyledContainer
			style={{
				background: `url(${background.src})`,
				maxWidth: 'none',
				maxHeight: isMobile ? '850px' : 'none',
				height: isTablet ? '100%' : '100vh',
				justifyContent: 'center',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat no-repeat',
				paddingTop: isMobile ? 120 : '',
				rowGap: isMobile ? '50px' : '',
			}}
		>
			{isMobile && (
				<Image
					src={bgURL}
					alt='image'
					width={240}
					height={240}
					style={{ margin: '5% 0' }}
				/>
			)}
			<div style={{ width: isMobile ? '100%' : isTablet ? '50%' : '40%' }}>
				<Typography
					variant='h1'
					component='h1'
					gutterBottom
					style={{
						fontSize: isMobile ? 30 : '',
						lineHeight: isMobile ? '1.2' : '',
					}}
				>
					<ReactMarkdown component='h1'>{text}</ReactMarkdown>
				</Typography>
				<Typography
					variant='h2'
					gutterBottom
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 20,
						width: '75%',
						fontSize: isMobile ? 14 : '',
					}}
				>
					<ReactMarkdown component='h2'>{subtext}</ReactMarkdown>
				</Typography>
			</div>
			{!isMobile && (
				<Image
					src={bgURL}
					alt='image'
					width={isTablet ? 250 : isWide ? 420 : 300}
					height={isTablet ? 250 : isWide ? 420 : 300}
				/>
			)}
		</StyledContainer>
	)
}

export default HeadingPage
