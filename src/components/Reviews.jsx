import { Typography, Paper, Rating, IconButton, useTheme, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useState, useEffect } from 'react';
import Wavy from './UI/Wavy';



const NavButtonsMobile = ({ onClick, next, prev }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10
    }}>
        <IconButton onClick={onClick}>
            {prev && '←'}
        </IconButton>
        <IconButton onClick={onClick}>
            {next && '→'}
        </IconButton>
    </div>
);

const NavButtonsDesktop = ({ onClick, style, next, prev }) => (
    <IconButton onClick={onClick} style={{
        ...style,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#b5d2fb',
        fontSize: '2.5rem',
        fontWeight: 700,
        left: prev ? '-10px' : 'unset',
        right: next ? '-10px' : 'unset'
    }}>
        {next && '→'}
        {prev && '←'}
    </IconButton>
);


const ReviewsCarousel = ({ isEnglish, data }) => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMobile = useMediaQuery('(max-width:600px)');

    const [itemsPerSlide, setItemsPerSlide] = useState(3);

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

    const slides = Array.from({ length: Math.ceil(data.length / itemsPerSlide) }).map((_, index) =>
        data.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
    );

    const pageTitle = isEnglish ? 'Reviews' : 'Відгуки';
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: 50
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
                    NavButton={({ onClick, style, next, prev }) => {
                        if (isMobile) {
                            return <></>;
                        }

                        return (
                            <IconButton onClick={onClick} style={{
                                ...style,
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 1000,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                color: '#b5d2fb',
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                left: prev ? '-10px' : 'unset',
                                right: next ? '-10px' : 'unset'
                            }}>
                                {next && '→'}
                                {prev && '←'}
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
                                        {review.attributes.ReviewText}
                                    </Typography>
                                </div>
                            ))}
                        </Paper>
                    ))}
                </Carousel>
                {isMobile && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, }}>
                        <IconButton style={{ color: '#b5d2fb', }}>←</IconButton>
                        <IconButton style={{ color: '#b5d2fb', }}>→</IconButton>
                    </div>
                )}
            </div>

        </>
    );
};

export default ReviewsCarousel;