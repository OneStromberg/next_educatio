import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';
const StyledGrid = styled(Grid)`
        display: flex;
        background: #fff;
        border-radius: 18px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        `;

const Members = ({ isEnglish, data }) => {

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
            paddingBottom: '180px',
            background: '#FBFBFB',
        }}>
            <Typography variant="h4" gutterBottom style={{
                textAlign: "center",
                margin: '0 0 72px',
            }}>
                {pageTitle}
            </Typography>
            <Grid container spacing={2} style={{ maxWidth: '70%' }}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <StyledGrid >
                            <Typography variant='card_header'>{
                                isEnglish ? item.attributes.EnglishAdress : item.attributes.adress
                            }</Typography>
                            <Typography variant='card_date'>{
                                isEnglish ? item.attributes.EnglishDate : item.attributes.date
                            }</Typography>
                            <Typography variant='card_place'>{
                                isEnglish ? item.attributes.EnglishPlace : item.attributes.place
                            }</Typography>
                            <Typography variant='card_event'>{
                                isEnglish ? item.attributes.EnglishEvent : item.attributes.event
                            }</Typography>
                            <div style={{ display: 'flex' }}>
                                <Typography variant='card_decorated_text'>{
                                    isEnglish ? item.attributes.EnglishType : item.attributes.type
                                }</Typography>
                                <Typography>{item.attributes.hit ? isEnglish ? 'HIT' : 'ХІТ' : ''}</Typography>
                            </div>
                            <Typography variant='card_link'>{isEnglish ? 'Registration' : 'Реєстрація'}</Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Members