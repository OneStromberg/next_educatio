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


const Members = () => {

    const list = [
        {
            id: 1,
            header: 'The First Lviv Media Library',
            caption: "2a Mulyarska St., Halytskyi district It has been an Education Center since 2019. More than 150 people have been trained here.",
        },
        {
            id: 2,
            num: 2,
            header: 'URBAN Library',
            caption: "4 Ustianovycha St., Halytskyi district. It has been an Education Center since 2019. More than 150 people have been trained here.",
        },
        {
            id: 3,
            num: 3,
            header: 'Wiki Library',
            caption: '58, Chervona Kalynya Ave. It has been an Education Center since 2019. More than 120 people have been trained here',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

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
                Members of the CE network
            </Typography>
            <Grid container spacing={2} style={{ maxWidth: '70%' }}>
                {list.map((el) => (
                    <Grid item xs={12} sm={6} md={4} key={el.id}>
                        <StyledGrid >
                            <Typography variant='card_header'>{el.header}</Typography>
                            <Typography variant="card_body" gutterBottom>
                                {el.caption}
                            </Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Members