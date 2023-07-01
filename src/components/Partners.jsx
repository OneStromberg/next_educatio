import { Paper, } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


const PartnersCarousel = () => {

    const partnerData = [
        { id: 1, logo: '/images/partner1.png' },
        { id: 2, logo: '/images/partner2.png' },
        { id: 3, logo: '/images/partner3.png' },
        // Добавьте остальных партнеров
    ];

    return (
        <Carousel>
            {partnerData.map((partner) => (
                <Paper key={partner.id} elevation={0} style={{ padding: 20, textAlign: 'center' }}>
                    <img src={partner.logo} alt="Partner Logo" style={{ maxWidth: '100%' }} />
                </Paper>
            ))}
        </Carousel>
    );
};

export default PartnersCarousel 