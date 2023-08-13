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
    margin: 20px;
`;

const Centers = ({ isEnglish, data }) => {
    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Our actions and education' : 'Наші події і навчання';

    const chunks = [];
    for (let i = 0; i < data.length; i += 9) {
        chunks.push(data.slice(i, i + 9));
    }

    return (
        <Box mt={5} mb={5} style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '180px',
            background: '#FBFBFB',
            paddingTop: '70px',
        }}>
            <Typography variant="h4" gutterBottom style={{
                textAlign: "center",
                margin: '0 0 72px',
            }}>
                {pageTitle}
            </Typography>
            {chunks.map((chunk, index) => (
                <Grid container spacing={2} style={{ maxWidth: '70%' }} key={index}>
                    {chunk.map((item) => (
                        <StyledGrid item xs={4} key={item.id}>
                            <Typography variant='h5'>{
                                isEnglish ? item.attributes.EnglishAdress : item.attributes.adress
                            }</Typography>
                            <Typography variant='card_header2'>{
                                isEnglish ? item.attributes.EnglishPlaceName : item.attributes.placeName
                            }</Typography>
                        </StyledGrid>
                    ))}
                </Grid>
            ))}
        </Box>
    );
}

export default Centers;