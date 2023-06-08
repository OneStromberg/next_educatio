import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
    TableCell,
    // Container,
    TableRow,
} from '@mui/material';

import backgroundImage from '@/assets/background.jpg';
import AboutUsPic from '@/assets/pic1.jpg'
import img1 from '@/assets/FreeCourses.jpg'
import img2 from '@/assets/EducationWorld.jpg'
import img3 from '@/assets/StudyToghther.jpg'

const StyledContainer = styled(Container)`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  max-width: none;
`;

const BackgroundImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg, 
    rgba(36, 31, 85, 0.8), 
    rgba(8, 29, 31, 0.7)
    ),
    url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  z-index: -1;
  max-width: none;
`;

const StyledTypography = styled(Typography)`
  color: white;
  z-index: 1;
`;

const StyledSecondContainer = styled(Container)`
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
        text-align: center;
        align-items: center;
        `;

const StyledImage = styled('img')`
        max-width: none;
        height: auto;
        `;

const StyledGrid = styled(Grid)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 20px;
`;

const FirstContainer = () => {
    return (
        <StyledContainer>
            <BackgroundImage />
            <StyledTypography variant="h3" component="h1" gutterBottom>
                Network CE - Education Centers
            </StyledTypography>
            <StyledTypography variant="body1" gutterBottom>
                A network of informal education operating in libraries and public spaces
                in Lviv and the region. We offer educational courses for professional
                and social growth.
            </StyledTypography>
        </StyledContainer>
    );
};

const SecondContainer = () => {



    return (
        <StyledSecondContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <StyledImage src={AboutUsPic.src} alt="About Us" width={600} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledTextContainer>
                        <Typography variant="h4" gutterBottom>
                            About us
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Developing the habit of continuous learning
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This is a network of Education Centers that has been operating in eight city libraries in Lviv since 2019. We develop a culture of informal lifelong learning by providing high-quality long-term training courses.
                            Since 2022, we have been conducting art therapies with qualified psychotherapists in Lviv and the region with the support of UNICEF.
                            The CE network exists thanks to the close cooperation of the City Institute, Lviv City Council, the Department of Culture, and the financial support of DVV International Ukraine.
                        </Typography>
                    </StyledTextContainer>
                </Grid>
            </Grid>
        </StyledSecondContainer>
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
        <Container maxWidth="sm">
            <StyledTextContainer>
                <Typography variant="h4" gutterBottom>
                    Our actions
                </Typography>
                <Typography variant="body1" gutterBottom>
                    It is worth acquiring new knowledge even after graduation from formal educational institutions. THIS is a network for those who treat knowledge as a basic necessity
                </Typography>
            </StyledTextContainer>
            {
                data.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.column1}</TableCell>
                        <TableCell>{row.column2}</TableCell>
                        <TableCell>{row.column3}</TableCell>
                    </TableRow>
                ))
            }

        </Container>
    );
};


const FourthContainer = () => {
    const images = [
        {
            id: 1,
            src: img1,
            caption: 'Image 1',
        },
        {
            id: 2,
            src: img2,
            caption: 'Image 2',
        },
        {
            id: 3,
            src: img3,
            caption: 'Image 3',
        },
    ];

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Educational areas
            </Typography>
            <Grid container spacing={2}>

                {images.map((image, index) => (
                    <Grid item xs={12} key={image.id}>
                        <StyledGrid>
                            {index % 2 === 0 ? (
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <img src={image.src.src} alt={image.caption} style={{ float: 'left', maxWidth: '50%', height: 'auto', marginRight: '10px' }} />
                                    <div style={{ overflow: 'hidden' }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {image.caption}
                                        </Typography>
                                        <Typography variant="body1">
                                            Description for Image {image.id}
                                        </Typography>
                                    </div>
                                </div>
                            ) : (
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {image.caption}
                                        </Typography>
                                        <Typography variant="body1">
                                            Description for Image {image.id}
                                        </Typography>
                                    </div>
                                    <img src={image.src.src} alt={image.caption} style={{ float: 'right', maxWidth: '50%', height: 'auto', marginLeft: '10px' }} />
                                </div>
                            )}
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


const FifthContainer = () => {

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
