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


const EducationalAreas = ({ isEnglish, data }) => {

    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'EducationalAreas' : 'Навчальні напрями'

    return (
        <Box mt={5} mb={5}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
                {pageTitle}
            </Typography>
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id} >
                        <StyledGrid>

                            <Typography style={{
                                background: '#241f55',
                                padding: '1%',
                                borderRadius: '50%',
                                width: "2em",
                                height: '2em',
                                color: '#fff',
                                fontSize: '2em',
                                fontWeight: '600',
                                lineHeight: '190%'
                            }}>{item.id}</Typography>

                            <Typography variant="title1">{isEnglish ? item.attributes.EnglishTitle : item.attributes.title}</Typography>

                            <Typography variant="subtitle5" gutterBottom style={{ maxWidth: '50%' }}>
                                {isEnglish ? item.attributes.EnglishText : item.attributes.text}
                            </Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default EducationalAreas