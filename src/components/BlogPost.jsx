import { Grid, Typography, Button, Box, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/system'
import Arrow from './UI/Arrow'

const StyledWrapper = styled(Link)`
	text-decoration: none;
	.arrow {
		transition: all 0.3s ease;
		transform: rotate(180deg) translateX(0);
	}
	&:hover {
		text-decoration: none;
		.arrow {
			transform: rotate(180deg) translateX(10px);
		}
	}
`

const BlogPost = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width: 600px)')
	const apiUrl = process.env.API_URL

	if (!data || data.length < 1) {
		return (
			<>
				<Typography variant='h1'>
					{isEnglish ? "sorry, post doesn't exist" : 'Вибачте, новини не існує'}
				</Typography>
			</>
		)
	}

	return (
		<Grid
			item
			xs={12}
			sm={10}
			paddingBottom={5}
			marginTop={isMobile ? '70px' : ''}
		>
			<div
				style={{
					position: 'relative',
					height: isMobile ? '260px' : '75dvh',
					width: '100%',
					margin: 0,
					background: `url(${apiUrl.slice(0, apiUrl.length - 4)}${
						data?.headingImage?.url
					}) center center / cover no-repeat`,
				}}
			>
				<Box
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							'linear-gradient(180deg, rgba(43, 41, 162, 0.80) 0%, rgba(43, 41, 162, 0.50) 100%)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						variant='news_title'
						style={{
							zIndex: 1,
							color: '#fff',
							fontSize: isMobile ? '30px' : '',
							margin: isMobile ? '50px 15px 0px 15px' : '0 15%',
						}}
					>
						{isEnglish ? data.EnglishTitle : data.Title}
					</Typography>

					<div
						style={{
							minHeight: '1px',
							maxHeight: '2px',
							width: '70%',
							marginTop: '20px',
							backgroundImage:
								'linear-gradient(to right, transparent, #fff, transparent)',
						}}
					></div>
					<StyledWrapper
						className='back-to-home'
						href='/'
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '20%',
							margin: isMobile ? '10% 5%' : '60px 45% 0 0',
							gap: 15,
						}}
					>
						<div
							className='arrow'
							style={{
								width: 30,
							}}
						>
							<Arrow fill={'#fff'} />
						</div>
						<Button
							href='/'
							style={{
								cursor: 'pointer',
								color: 'white',
								borderColor: 'white',
								alignSelf: 'flex-start',
							}}
							variant='text'
						>
							{isEnglish ? 'Back to Home' : 'На головну'}
						</Button>
					</StyledWrapper>
				</Box>
			</div>

			<Box p={{ xs: 2, md: 10 }} py={5}>
				<Typography variant='news_text'>
					<ReactMarkdown>
						{isEnglish ? data.EnglishText : data.text}
					</ReactMarkdown>
				</Typography>
			</Box>
			<StyledWrapper
				className='back-to-home'
				href='/'
				style={{
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
					width: '20%',
					margin: '2% 5%',
					gap: 15,
					textDecoration: 'none',
				}}
			>
				<div className='arrow' style={{ width: 30 }}>
					<Arrow fill={'#458FF6'} />
				</div>
				<Button
					href='/'
					variant='text'
					style={{ cursor: 'pointer', color: '#458FF6' }}
				>
					{isEnglish ? 'Back to Home' : 'На головну'}
				</Button>
			</StyledWrapper>
		</Grid>
	)
}

export default BlogPost
