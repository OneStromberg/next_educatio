import {
    Box,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import SvgBack from './UI/SvgBack';
import GeoPin from '../assets/geo_pin.svg';
import Wavy from './UI/Wavy';
import Link from 'next/link';

const StyledGrid = styled(Link)`
        cursor: pointer;
        display: flex;
        background: #fff;
        border-radius: 18px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 25px;
        gap: 10px;
        text-decoration: none;
        transition: .3s;
        &:hover{
            box-shadow: 0px 20px 60px 0px rgba(157, 166, 189, 0.80);
            .text-element {
                opacity: 0.5;
            }
            .button{
                font-weight: 700;
            }
        }
        `;

const Members = ({ isEnglish, data }) => {

    const isMobile = useMediaQuery('(max-width:600px)');

    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Our actions and education' : 'Наші події і навчання'

    return (
        <Box mt={5} mb={5} style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#FBFBFB',
            paddingTop: isMobile ? '30px' : '70px',
            paddingBottom: isMobile ? '50px' : '180px',
        }}>
            <div style={{
                margin: '0 0 72px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="h4" gutterBottom style={{
                    textAlign: "center",
                }}>
                    {pageTitle}
                </Typography>
                <Wavy fill='#262626' />
            </div>
            <Grid container spacing={2} style={{ maxWidth: isMobile ? '95%' : '70%' }}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id} >
                        <StyledGrid href={item.attributes.GoogleFormsLink} key={item.id} target='_blank'>
                            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }} className="text-element">
                                <Image src={GeoPin.src} width={24} height={24}></Image>
                                <Typography variant='card_header' >{
                                    isEnglish ? item.attributes.EnglishAdress : item.attributes.adress
                                }</Typography>
                            </div>
                            <Typography variant='card_date' className="text-element">{
                                isEnglish ? item.attributes.EnglishDate : item.attributes.date
                            }</Typography>
                            <Typography variant='card_place' className="text-element">{
                                isEnglish ? item.attributes.EnglishPlace : item.attributes.place
                            }</Typography>
                            <Typography variant='card_event'>{
                                isEnglish ? item.attributes.EnglishEvent : item.attributes.event
                            }</Typography>
                            <div style={{ display: 'flex', gap: 20 }}>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="text-element">
                                    <SvgBack fill={item.attributes.highlight_type} />
                                    <Typography
                                        variant='card_decorated_text'
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            padding: '0.3em 0.7em'
                                        }}

                                    >
                                        {isEnglish ? item.attributes.EnglishType : item.attributes.type}
                                    </Typography>
                                </div>
                                {item.attributes.hit && (
                                    <Typography
                                        style={{
                                            borderRadius: 4,
                                            background: '#FFD12F',
                                            padding: '0.3em 0.7em',
                                        }}
                                        variant='hit_text'
                                        className="text-element"
                                    >
                                        {isEnglish ? 'HIT' : 'ХІТ'}
                                    </Typography>
                                )}
                            </div>
                            <Typography variant='card_link' className="button">{isEnglish ? 'Registration →' : 'Реєстрація →'}</Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Members