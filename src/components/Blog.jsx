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
	const displayedPosts = isMobile
		? showAll
			? data
			: data?.slice(0, 1)
		: showAll
		? data
		: data?.slice(0, 3)

	const maxPosts = isMobile ? 1 : 3

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
					padding: 0,
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
					id='news'
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						flexDirection: isMobile ? 'column' : 'row',
						flexWrap: isMobile ? '' : 'wrap',
						gap: 20,
					}}
				>
					{displayedPosts
						.sort(
							(a, b) =>
								new Date(b.attributes.updated_at) -
								new Date(a.attributes.updated_at)
						)
						.map(post => (
							<BlogElement
								key={post.id}
								post={post}
								isMobile={isMobile}
								isEnglish={isEnglish}
							/>
						))}
				</Grid>
				{data.length > maxPosts ? (
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
