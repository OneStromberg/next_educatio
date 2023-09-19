import {
	Typography,
	Paper,
	Rating,
	IconButton,
	useTheme,
	useMediaQuery,
} from '@mui/material'
import Link from 'next/link'
import Carousel from 'react-material-ui-carousel'
import { useState, useEffect } from 'react'
import Wavy from './UI/Wavy'
import Arrow from './UI/Arrow'

const ReviewsCarousel = ({ isEnglish, data }) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
	const isMobile = useMediaQuery('(max-width:600px)')

	const [itemsPerSlide, setItemsPerSlide] = useState(3)
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const [isHovered, setHovered] = useState(null)

	useEffect(() => {
		if (isMobile) {
			setItemsPerSlide(1)
		} else if (isTablet) {
			setItemsPerSlide(2)
		} else {
			setItemsPerSlide(3)
		}
	}, [isMobile, isTablet])

	if (!data || data.length < 1) {
		return null
	}

	const truncateText = (text, maxLength) => {
		if (text.length <= maxLength) return text
		return `${text.slice(0, maxLength)}...`
	}

	const slides = Array.from({
		length: Math.ceil(data.length / itemsPerSlide),
	}).map((_, index) =>
		data.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
	)

	const goToPrevSlide = () => {
		if (currentSlideIndex === 0) {
			setCurrentSlideIndex(slides.length - 1)
		} else {
			setCurrentSlideIndex(currentSlideIndex - 1)
		}
	}

	const goToNextSlide = () => {
		if (currentSlideIndex === slides.length - 1) {
			setCurrentSlideIndex(0)
		} else {
			setCurrentSlideIndex(currentSlideIndex + 1)
		}
	}

	const pageTitle = isEnglish ? 'Reviews' : 'Відгуки'

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					margin: '80px 0',
				}}
			>
				<Typography variant='h4_about'>{pageTitle}</Typography>
				<Wavy fill={'#262626'} />
			</div>
			<div
				style={{
					marginTop: '3%',
					position: 'relative',
					width: '90%',
					margin: '0 auto',
				}}
			>
				<Carousel
					navButtonsAlwaysVisible
					indicators={false}
					index={currentSlideIndex}
					onChange={index => setCurrentSlideIndex(index)}
					NavButton={({ onClick, style, next, prev }) => {
						if (isMobile) {
							return <></>
						}

						return (
							<IconButton
								onClick={onClick}
								onMouseEnter={() => setHovered(prev ? 'prev' : 'next')}
								onMouseLeave={() => setHovered(null)}
								aria-label='reviews navigation'
								style={{
									...style,
									top: '37%',
									transform: 'translateY(-50%)',
									zIndex: 1000,
									backgroundColor: 'rgba(255, 255, 255, 0)',
									display: 'flex',
									alignItems: 'center',
									width: 40,
									left: prev ? '0px' : 'unset',
									right: next ? '0px' : 'unset',
									transform: prev ? 'rotate(180deg)' : 'unset',
									opacity: 1,
								}}
							>
								{next && (
									<Arrow fill={isHovered === 'next' ? '#458FF6' : '#b5d2fb'} />
								)}
								{prev && (
									<Arrow fill={isHovered === 'prev' ? '#458FF6' : '#b5d2fb'} />
								)}
							</IconButton>
						)
					}}
				>
					{slides.map((slide, slideIndex) => (
						<Paper
							key={slideIndex}
							elevation={0}
							style={{
								display: 'flex',
								justifyContent: 'center',
								gap: 20,
								width: '100%',
								height: '100%',
								margin: '0 auto',
							}}
						>
							{slide.map(review => (
								<Link
									href={
										'https://www.google.com/maps/place/%D0%A6%D0%95+-+%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B8+%D0%95%D0%B4%D1%83%D0%BA%D0%B0%D1%86%D1%96%D1%97/@49.832689,24.0122356,12z/data=!4m8!3m7!1s0x473add32088aee89:0xac4ea9a7960ede46!8m2!3d49.832689!4d24.0122356!9m1!1b1!16s%2Fg%2F11r7w1cp8_?entry=ttu'
									}
									target='_blank'
									key={review.id}
									style={{
										marginBottom: '1.5rem',
										background: '#fff',
										maxWidth: 350,
										maxHeight: 300,
										aspectRatio: '1/1.3',
										width: '100%',
										borderRadius: 18,
										boxShadow: '10px 40px 50px 0px rgba(229, 233, 246, 0.2)',
										padding: '20px 30px',
										display: 'flex',
										flexDirection: 'column',
										textDecoration: 'none',
										gap: 20,
									}}
								>
									<div
										style={{ display: 'flex', alignItems: 'center', gap: 10 }}
									>
										<div
											style={{
												borderRadius: '50%',
												height: 50,
												width: 50,
												background: '#E5E5E5',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											👤
										</div>
										<Typography variant='subtitle2' margin={0}>
											{review.attributes.ReviewerName}
										</Typography>
									</div>

									<Rating
										name='read-only'
										value={Number(review.attributes.rating)}
										readOnly
									/>
									<Typography variant='body1'>
										{truncateText(review.attributes.ReviewText, 120)}
									</Typography>
								</Link>
							))}
						</Paper>
					))}
				</Carousel>
				{isMobile && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							marginTop: 10,
						}}
					>
						<IconButton
							onClick={goToPrevSlide}
							aria-label='previous review'
							style={{ width: 40, transform: 'rotate(180deg)' }}
						>
							<Arrow fill={isHovered === 'prev' ? '#458FF6' : '#b5d2fb'} />
						</IconButton>

						<IconButton
							onClick={goToNextSlide}
							aria-label='next review'
							style={{ width: 40, color: '#458FF6' }}
						>
							<Arrow fill={isHovered === 'next' ? '#458FF6' : '#b5d2fb'} />
						</IconButton>
					</div>
				)}
			</div>
		</>
	)
}

export default ReviewsCarousel
