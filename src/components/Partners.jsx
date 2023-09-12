import { Paper, IconButton, useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import partner1 from '@/assets/partners/1.png'
import partner2 from '@/assets/partners/2.png'
import partner3 from '@/assets/partners/3.png'
import partner4 from '@/assets/partners/4.png'
import partner5 from '@/assets/partners/5.png'
import partner6 from '@/assets/partners/6.png'
import partner7 from '@/assets/partners/7.png'
import partner8 from '@/assets/partners/8.png'
import { useState, useEffect } from 'react';
import Wavy from './UI/Wavy';
import Arrow from './UI/Arrow';


const PartnersCarousel = ({ isEnglish }) => {
    const [isHovered, setHovered] = useState(null);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:1200px)');


    const itemsPerSlide = isMobile ? 2 : isTablet ? 4 : 8;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const partnerData = [
        { id: 1, logo: partner1 },
        { id: 2, logo: partner2 },
        { id: 3, logo: partner3 },
        { id: 4, logo: partner4 },
        { id: 5, logo: partner5 },
        { id: 6, logo: partner6 },
        { id: 7, logo: partner7 },
        { id: 8, logo: partner8 },
    ];

    const slides = Array.from({ length: Math.ceil(partnerData.length / itemsPerSlide) }).map((_, index) =>
        partnerData.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
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

    const pageTitle = isEnglish ? 'Our partners' : 'Наші партнери';

    return (
        <Box style={{
            paddingTop: '6%',
            paddingBottom: '4%',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
            margin: '0 auto',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '50px',
            }}>
                <Typography variant='h4'>{pageTitle}</Typography>
                <Wavy fill={'#262626'} />
            </div>
            <Box>
                <Carousel
                    key={itemsPerSlide}
                    navButtonsAlwaysVisible
                    indicators={false}
                    index={currentSlideIndex}
                    onChange={(index) => setCurrentSlideIndex(index)}
                    style={{ height: '100%', minHeight: '100px', width: '90%' }}
                    NavButton={({ onClick, className, style, next = goToNextSlide, prev = goToPrevSlide }) => {
                        return partnerData.length !== slides.length ? (

                            <IconButton onClick={onClick}
                                onMouseEnter={() => setHovered(prev ? 'prev' : 'next')}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    ...style,
                                    top: '33%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1000,
                                    backgroundColor: 'rgba(255, 255, 255, 0)',
                                    fontSize: '2.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 40,
                                    left: prev ? '0px' : 'unset',
                                    right: next ? '0px' : 'unset',
                                    transform: prev ? 'rotate(180deg)' : 'unset',
                                    transition: 'all 0.3s ease',
                                    opacity: 1,
                                }}>
                                {next && <Arrow
                                    fill={isHovered === 'next' ? '#458FF6' : '#b5d2fb'} />}
                                {prev && <Arrow
                                    fill={isHovered === 'prev' ? '#458FF6' : '#b5d2fb'} />}
                            </IconButton>
                        ) : null
                    }}
                >
                    {slides.map((slide, index) => (
                        <Paper key={index} elevation={0} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            width: '90%',
                            margin: '0 auto',
                        }}>
                            {slide.map((partner) => (
                                <div key={partner.id} style={{ textAlign: 'center', margin: '0 20px' }}>
                                    <Image
                                        src={partner.logo}
                                        alt="Partner Logo"
                                        width={150}
                                        height={85}
                                        style={{
                                            maxHeight: '90px',
                                            width: 'auto',
                                            minHeight: '85px',
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            margin: '0 auto',
                                        }} />
                                </div>
                            ))}
                        </Paper>
                    ))}
                </Carousel>
            </Box>
        </Box >
    );
};

export default PartnersCarousel;