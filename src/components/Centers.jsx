import {
    Box,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import Wavy from './UI/Wavy';
import GeoPin from '../assets/geo_pin.svg';


const CenterItem = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
    max-width: 220px;
    gap: 10px;
`;

const Centers = ({ isEnglish, data }) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Centers of Education' : 'Центри Едукації';
    const pageSubtitle = isEnglish ? 'acting in' : 'діють у';

    const chunks = [];
    for (let i = 0; i < data.length; i += 9) {
        chunks.push(data.slice(i, i + 9));
    }


    return (
        <Box mt={5} mb={5} style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            padding: '4.5% 7%',
            background: '#FBFBFB',
            paddingTop: '70px',
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4_blue" gutterBottom >
                    {pageTitle}
                </Typography>
                <Typography variant="h5_blue" style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Wavy fill='#1F1F71' /> {pageSubtitle}
                </Typography>
            </div>
            {chunks.map((chunk, index) => (
                <Grid container spacing={2} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                }} key={index}>
                    {chunk.map((item) => (
                        <Grid item xs={4} key={item.id} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <CenterItem>
                                <Typography variant='card_header'>
                                    {isEnglish ? item.attributes.EnglishPlace : item.attributes.place}
                                </Typography>
                                <Box display="flex" gap={5}>
                                    <Image src={GeoPin.src} width={24} height={24} />
                                    <Typography variant='card_subheader'>
                                        {isEnglish ? item.attributes.EnglishAdress : item.attributes.adress}
                                    </Typography>
                                </Box>
                            </CenterItem>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Box>
    );
}

export default Centers;