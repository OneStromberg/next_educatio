import { Paper, IconButton, useTheme, useMediaQuery, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
// import partner1 from '@/assets/partner1.png'
// import partner2 from '@/assets/partner2.png'
// import partner3 from '@/assets/partner3.png'
import { useState, useEffect } from 'react';


const PartnersCarousel = ({ isEnglish }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [itemsPerSlide, setItemsPerSlide] = useState(8);

    useEffect(() => {
        if (isMobile) {
            setItemsPerSlide(2);
        } else if (isTablet) {
            setItemsPerSlide(4);
        } else {
            setItemsPerSlide(8);
        }
    }, [isMobile, isTablet]);

    const partnerData = [
        // { id: 1, logo: partner1 },
        // { id: 2, logo: partner2 },
        // { id: 3, logo: partner3 },
        // { id: 4, logo: partner1 },
        // { id: 5, logo: partner2 },
        // { id: 6, logo: partner3 },
        // { id: 7, logo: partner2 },
        // { id: 8, logo: partner2 },
        // { id: 9, logo: partner1 },
        // { id: 10, logo: partner2 },
        // { id: 11, logo: partner1 },
        // { id: 12, logo: partner1 },
        // { id: 13, logo: partner3 },
        // { id: 14, logo: partner3 },
        // { id: 15, logo: partner3 },
        // { id: 16, logo: partner1 },
        // { id: 17, logo: partner2 },
        // { id: 18, logo: partner2 },
        // Добавьте остальных партнеров
    ];

    const slides = Array.from({ length: Math.ceil(partnerData.length / itemsPerSlide) }).map((_, index) =>
        partnerData.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
    );
    const pageTitle = isEnglish ? 'Our partners' : 'Наші партнери';

    return (
        <div style={{
            marginTop: '3%',
            position: 'relative',
            width: '80%',
            margin: '0 auto',
            justifyContent: 'center'
        }}>
            <Typography variant='h4'>{pageTitle}</Typography>
            <Carousel
                navButtonsAlwaysVisible
                indicators={false}
                NavButton={({ onClick, className, style, next, prev }) => {
                    return (

                        <IconButton onClick={onClick} style={{
                            ...style,
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
                    )
                }}
            >
                {slides.map((slide, index) => (
                    <Paper key={index} elevation={0} style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
                        {slide.map((partner) => (
                            <div key={partner.id} style={{ textAlign: 'center', margin: '0 20px' }}>
                                <Image
                                    src={partner.logo}
                                    alt="Partner Logo"
                                    width={95}
                                    height={'auto'}
                                    style={{
                                        maxWidth: '100%',
                                        margin: '0 auto'
                                    }} />
                            </div>
                        ))}
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default PartnersCarousel;