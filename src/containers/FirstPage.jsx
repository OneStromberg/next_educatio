import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

import backgroundImage from '../assets/background.jpg';

const StyledContainer = styled(Container)`
  background-image: url(${backgroundImage.src});
  background: linear-gradient(45deg, rgba(0, 176, 255, 0.5), rgba(255, 213, 0, 0.5)), url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;
`;

const FirstContainer = () => {
    return (
        <StyledContainer>
            <Typography variant="h3" component="h1" gutterBottom>
                Network CE - Education Centers
            </Typography>
            <Typography variant="body1" gutterBottom>
                A network of informal education operating in libraries and public spaces in Lviv and the region. We offer educational courses for professional and social growth.
            </Typography>
        </StyledContainer>
    );
};

const SecondContainer = () => {

    const StyledContainer = styled(Container)`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        `;

    const StyledTextContainer = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        `;

    const StyledImage = styled('img')`
        max-width: 100%;
        height: auto;
        `;

    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <StyledImage src={backgroundImage} alt="Background" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledTextContainer>
                        <Typography variant="h4" gutterBottom>
                            Network CE - Education Centers
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            A network of informal education operating in libraries and public spaces in Lviv and the region.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            We offer educational courses for professional and social growth.
                        </Typography>
                    </StyledTextContainer>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};


const ThirdContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Здесь нужно добавить логику получения данных из базы данных
        // и установить полученные данные в состояние `data` с помощью `setData()`
        const fetchData = async () => {
            try {
                // Запрос к базе данных или другой источник данных
                const response = await fetch('https://example.com/api/data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Header 1</TableCell>
                        <TableCell>Header 2</TableCell>
                        <TableCell>Header 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.column1}</TableCell>
                            <TableCell>{row.column2}</TableCell>
                            <TableCell>{row.column3}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const FourthContainer = () => {
    const StyledGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  `;
    const images = [
        {
            id: 1,
            src: 'image1.jpg',
            caption: 'Image 1',
        },
        {
            id: 2,
            src: 'image2.jpg',
            caption: 'Image 2',
        },
        {
            id: 3,
            src: 'image3.jpg',
            caption: 'Image 3',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

    return (
        <Grid container spacing={2}>
            {images.map((image) => (
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                    <StyledGrid>
                        <img src={image.src} alt={image.caption} style={{ maxWidth: '100%', height: 'auto' }} />
                        <Typography variant="subtitle1" gutterBottom>
                            {image.caption}
                        </Typography>
                    </StyledGrid>
                </Grid>
            ))}
        </Grid>
    );
}

const FifthContainer = () => {
    const StyledGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  `;
    const images = [
        {
            id: 1,
            src: 'image1.jpg',
            caption: 'Image 1',
        },
        {
            id: 2,
            src: 'image2.jpg',
            caption: 'Image 2',
        },
        {
            id: 3,
            src: 'image3.jpg',
            caption: 'Image 3',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

    return (
        <Grid container spacing={2}>
            {images.map((image) => (
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                    <StyledGrid>
                        <img src={image.src} alt={image.caption} style={{ maxWidth: '100%', height: 'auto' }} />
                        <Typography variant="subtitle1" gutterBottom>
                            {image.caption}
                        </Typography>
                    </StyledGrid>
                </Grid>
            ))}
        </Grid>
    );
}

export { FirstContainer, SecondContainer, ThirdContainer, FourthContainer, FifthContainer };
