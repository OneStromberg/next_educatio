import { Paper, } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import partner1 from '@/assets/partner1.png'
import partner2 from '@/assets/partner2.png'
import partner3 from '@/assets/partner3.png'


const PartnersCarousel = () => {

    const partnerData = [
        { id: 1, logo: partner1 },
        { id: 2, logo: partner2 },
        { id: 3, logo: partner3 },
        // Добавьте остальных партнеров
    ];

    return (
        <div style={{ marginTop: '3%' }}>
            <Carousel>
                {partnerData.map((partner) => (
                    <Paper
                        key={partner.id}
                        elevation={0}
                        style={{
                            paddingBottom: 10,
                            textAlign: 'center'
                        }}>
                        <Image
                            src={partner.logo}
                            alt="Partner Logo"
                            width={100}
                            height={'auto'}
                            style={{
                                maxWidth: '100%',
                                margin: '0 auto'
                            }} />
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default PartnersCarousel 