import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';
const StyledGrid = styled(Grid)`
        display: flex;
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

    const pageTitle = isEnglish ? 'Members of the CE network' : 'Навчальні напрями'


    return (
        <Box mt={5} mb={5} style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '180px',
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
                                isEnglish ? item.attributes.EnglishTitle : item.attributes.title
                            }</Typography>
                            <Typography variant="card_body" gutterBottom>{
                                isEnglish ? item.attributes.EnglishDescription : item.attributes.description
                            }</Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Members