import { useState } from 'react'
import dynamic from 'next/dynamic'
import {
	Grid,
	Typography,
	Container,
	Button,
	useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/system'
const BlogElement = dynamic(() => import('./Elements/BlogElement'))
import Wavy from './UI/Wavy'
import snake from '../assets/snake.svg'

const StyledButton = styled(Button)({
	borderRadius: 55,
	border: '1.4px solid #458FF6',
	color: '#458FF6',
	fontSize: 18,
	fontWeight: 700,
	lineHeight: '3.33',
	width: 200,
	height: 60,
	marginTop: 65,
	cursor: 'pointer',
	transition: '.3s',
	'&:hover': {
		background: '#458FF6',
		color: '#fff',
		border: 'none',
	},
})

const Blog = ({ isEnglish, data }) => {
	const [showAll, setShowAll] = useState(false)
	const isMobile = useMediaQuery('(max-width:600px)')
	const isSmallMobile = useMediaQuery('(max-width:370px)')
	const displayedPosts = isMobile
		? showAll
			? data
			: data?.slice(0, 1)
		: showAll
		? data
		: data?.slice(0, 3)

	if (!data || data.length < 1) {
		return <></>
	}

	const pageTitle = isEnglish ? 'News' : 'Новини'
	const allNews = isEnglish ? 'All news' : 'Всi новини'
	const hideNews = isEnglish ? 'Hide news' : 'Скрити новини'

	return (
		<Grid
			container
			spacing={3}
			style={{
				background: `url(${snake.src}) center / 100% no-repeat `,
			}}
		>
			<Container
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Grid
					item
					xs={12}
					textAlign='center'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 0,
						marginBottom: 50,
					}}
				>
					<Typography variant='news_page_title' component={'h2'} gutterBottom>
						{pageTitle}
					</Typography>
					<Wavy fill='#7D7987' />
				</Grid>

				<Grid
					alignItems='center'
					justifyContent='center'
					id='news'
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						// padding: isMobile ? 0 : '80px 0',
						width: '100%',
						height: '100%',
						flexDirection: isMobile ? 'column' : 'row',
						gap: 20,
					}}
				>
					{displayedPosts
						.sort((a, b) => b.id - a.id)
						.map(post => (
							<BlogElement
								key={post.id}
								post={post}
								isMobile={isMobile}
								isEnglish={isEnglish}
							/>
						))}
				</Grid>
				{data.length > 3 ? (
					<StyledButton
						aria-label='Show all news'
						variant='outlined'
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? hideNews : allNews}
					</StyledButton>
				) : (
					<></>
				)}
			</Container>
		</Grid>
	)
}

export default Blog
