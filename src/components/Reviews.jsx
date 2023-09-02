import { Typography, Paper, Rating, IconButton, useTheme, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useState, useEffect } from 'react';
import Wavy from './UI/Wavy';
import Arrow from './UI/Arrow';


const ReviewsCarousel = ({ isEnglish, data }) => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMobile = useMediaQuery('(max-width:600px)');

    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setHovered] = useState(null);



    useEffect(() => {
        if (isMobile) {
            setItemsPerSlide(1);
        } else if (isTablet) {
            setItemsPerSlide(2);
        } else {
            setItemsPerSlide(3);
        }
    }, [isMobile, isTablet]);

    if (!data) {
        return null;
    }

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return `${text.slice(0, maxLength)}...`;
    };

    const slides = Array.from({ length: Math.ceil(data.length / itemsPerSlide) }).map((_, index) =>
        data.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
    );

    const goToPrevSlide = () => {
        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(slides.length - 1);
        } else {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };

    const goToNextSlide = () => {
        if (currentSlideIndex === slides.length - 1) {
            setCurrentSlideIndex(0);
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const pageTitle = isEnglish ? 'Reviews' : 'Відгуки';

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '80px 0'
            }}>
                <Typography variant='h4'>
                    {pageTitle}
                </Typography>
                <Wavy fill={'#262626'} />
            </div>
            <div style={{ marginTop: '3%', position: 'relative', width: '90%', margin: '0 auto' }}>
                <Carousel
                    navButtonsAlwaysVisible
                    indicators={false}
                    index={currentSlideIndex}
                    onChange={(index) => setCurrentSlideIndex(index)}
                    NavButton={({ onClick, style, next, prev }) => {
                        if (isMobile) {
                            return <></>;
                        }

                        return (
                            <IconButton onClick={onClick}
                                onMouseEnter={() => setHovered(prev ? 'prev' : 'next')}
                                onMouseLeave={() => setHovered(null)}
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
                                }}>
                                {next && <Arrow
                                    fill={isHovered === 'next' ? '#458FF6' : '#b5d2fb'} />}
                                {prev && <Arrow
                                    fill={isHovered === 'prev' ? '#458FF6' : '#b5d2fb'} />}
                            </IconButton>
                        );
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
                            }}>
                            {slide.map(review => (
                                <div key={review.id} style={{
                                    marginBottom: '1.5rem',
                                    background: '#FFF',
                                    maxWidth: 400,
                                    maxHeight: 300,
                                    width: '100%',
                                    borderRadius: 18,
                                    boxShadow: '10px 20px 50px 0px rgba(229, 233, 246, 0.40)',
                                    padding: '20px 30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{
                                            borderRadius: '50%',
                                            height: 50,
                                            width: 50,
                                            background: '#E5E5E5',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>👤</div>
                                        <Typography variant="subtitle2" margin={0}>
                                            {review.attributes.ReviewerName}
                                        </Typography>
                                    </div>

                                    <Rating name="read-only"
                                        value={Number(review.attributes.rating)}
                                        readOnly />
                                    <Typography variant="body1">
                                        {truncateText(review.attributes.ReviewText, 120)}
                                    </Typography>
                                </div>
                            ))}
                        </Paper>
                    ))}
                </Carousel>
                {isMobile && (
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                        <IconButton onClick={goToPrevSlide} style={{ width: 40, transform: 'rotate(180deg)' }}>
                            <Arrow
                                fill={isHovered === 'prev' ? '#458FF6' : '#b5d2fb'} />
                        </IconButton>

                        <IconButton onClick={goToNextSlide} style={{ width: 40, color: '#458FF6' }}><Arrow
                            fill={isHovered === 'next' ? '#458FF6' : '#b5d2fb'} />
                        </IconButton>
                    </div>
                )}
            </div >

        </>
    );
};

export default ReviewsCarousel;