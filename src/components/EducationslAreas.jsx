import {
    Container,
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


const EducationalAreas = () => {

    const list = [
        {
            id: 1,
            num: 1,
            header: 'Professional development',
            caption: 'We conduct courses in graphic design for beginners, social media promotion, project management, and the fashion industry',
        },
        {
            id: 2,
            num: 2,
            header: 'Psychology',
            caption: "We conduct courses annually: Psychology of Relationships, Practical Psychology, Psychology of Stress and Stress Resistance, Children's Psychology",
        },
        {
            id: 3,
            num: 3,
            header: 'Particular development',
            caption: 'English courses in partnership with Green Forest, first aid, career, volunteering',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

    return (
        <Box mt={5} mb={5}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
                Educational areas
            </Typography>
            <Grid container spacing={2}>
                {list.map((el) => (
                    <Grid item xs={12} sm={6} md={4} key={el.id}>
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
                            }}>{el.num}</Typography>

                            <Typography variant="title1">{el.header}</Typography>

                            <Typography variant="subtitle5" gutterBottom style={{ maxWidth: '50%' }}>
                                {el.caption}
                            </Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default EducationalAreas