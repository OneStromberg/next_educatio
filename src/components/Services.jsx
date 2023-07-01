import { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';
import {
    TableCell,
    TableRow,

} from '@mui/material';

import Image from 'next/image';

import img1 from '@/assets/FreeCourses.jpg'
import img2 from '@/assets/EducationWorld.jpg'
import img3 from '@/assets/StudyToghther.jpg'

const StyledTextContainer = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        text-align: center;
        align-items: center;
        `;

const StyledGrid = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        `;


const Services = () => {
    const [data, setData] = useState([]);

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

    useEffect(() => {
        // Здесь нужно добавить логику получения данных из базы данных
        // и установить полученные данные в состояние `data` с помощью `setData()`
        const fetchData = async () => {
            try {
                // Запрос к базе данных или другой источник данных
                // const response = await fetch('https://example.com/api/data');
                // const jsonData = await response.json();
                // setData(jsonData);
                console.log('something')
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box mt={2} mb={2} style={{ background: '#ededed', padding: '120px 0', margin: '0', }}>
            <StyledTextContainer>
                <Typography id='services' variant="h4" gutterBottom>
                    Our actions
                </Typography>
                <Typography variant="subtitle3" gutterBottom>
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

            <Container maxWidth="m" style={{ background: '#ededed' }}>
                <Grid container spacing={2}>

                    {images.map((image, index) => (
                        <Grid item xs={12} key={image.id} style={{
                            background: '#fff',
                            maxWidth: 'fit-content',
                            margin: '0 auto'
                        }}>
                            <StyledGrid>
                                {index % 2 === 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Image src={image.src.src} alt={image.caption} width={800} height={1000} style={{ float: 'left', maxWidth: '50%', height: 'auto', marginRight: '10px' }} />
                                        <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                            <Typography variant="title" gutterBottom>
                                                {image.caption}
                                            </Typography>
                                            <Typography variant="subtitle4">
                                                Description for Image {image.id}
                                            </Typography>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                            <Typography variant="title" gutterBottom>
                                                {image.caption}
                                            </Typography>
                                            <Typography variant="subtitle4">
                                                Description for Image {image.id}
                                            </Typography>
                                        </div>
                                        <Image src={image.src.src} alt={image.caption} width={800} height={1000} style={{ float: 'right', maxWidth: '50%', height: 'auto', marginLeft: '10px' }} />
                                    </div>
                                )}
                            </StyledGrid>
                        </Grid>
                    ))}
                </Grid>
            </Container >
        </Box>

    );
};

export default Services