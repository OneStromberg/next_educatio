import { Grid, Typography, CardContent, Card } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/system'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../UI/Arrow.jsx'

const StyledCard = styled(Card)`
	cursor: pointer;
	border-radius: 18px;
	transition: 0.3s;
	min-height: 512px;
	width: 100%;
	max-width: 360px;
	align-self: center;
	box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);

	&:hover {
		box-shadow: 0px 20px 60px 0px rgba(157, 166, 189, 0.8);

		.text-element {
			color: rgba(98, 99, 103, 0.5);
		}
	}
	.read__wrapper {
		transition: 0.3s;
		&:hover {
			.button {
				font-weight: 700;
			}
			svg {
				transition: all 0.3s ease;
				transform: translateX(15px);
			}
		}
	}
`

export default function BlogElement({ post, isMobile, isEnglish }) {
	const removeMarkdown = str => {
		return str.replace(/([_*\[\]()~>#+-])/g, '')
	}

	const truncateText = (text, maxLength) => {
		const cleanText = removeMarkdown(text)
		if (cleanText.length <= maxLength) return cleanText
		return `${cleanText.slice(0, maxLength)}...`
	}

	const apiUrl = process.env.API_URL
	return (
		<Grid
			item
			xs={12}
			sm={6}
			key={post.id}
			style={{
				maxWidth: '360px',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'space-between',
				margin: isMobile ? '0 auto' : 0,
			}}
		>
			<Link
				href={`/news/${post?.attributes?.slug}`}
				passHref
				style={{ textDecoration: 'none' }}
			>
				<StyledCard
					style={{
						marginLeft: isMobile ? 20 : 0,
						aspectRatio: '1.42/1',
					}}
				>
					<CardContent style={{ padding: 0, height: '100%' }}>
						{post?.attributes?.headingImage?.data?.attributes?.url ? (
							<Image
								src={`${apiUrl.slice(0, apiUrl.length - 4)}${
									post?.attributes?.headingImage?.data?.attributes?.url
								}`}
								alt={post?.attributes?.title}
								width={380}
								height={250}
								loading='lazy'
							/>
						) : (
							<div
								style={{
									width: '380px',
									height: '250px',
									backgroundColor: '#fbfbfb',
								}}
							></div>
						)}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								padding: '1em 2em 35px',
								maxHeight: '260px',
								height: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Typography variant='news_preview_title' gutterBottom>
								{post?.attributes?.title}
							</Typography>
							<Typography variant='news_preview_text' className='text-element'>
								<ReactMarkdown>
									{truncateText(post?.attributes?.text, 35)}
								</ReactMarkdown>
							</Typography>
							<div
								className='read__wrapper'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifySelf: 'end',
									gap: 10,
								}}
							>
								<Typography variant='card_link' className='button'>
									{isEnglish ? 'Read' : 'Читати'}
								</Typography>
								<div style={{ width: 14, height: 9 }}>
									<Arrow fill={'#4089ED'} />
								</div>
							</div>
						</div>
					</CardContent>
				</StyledCard>
			</Link>
		</Grid>
	)
}
