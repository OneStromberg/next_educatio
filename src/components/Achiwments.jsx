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
        max-width: 1200px;
        `;


const Achiwments = () => {
    const [data, setData] = useState([]);

    const images = [
        {
            id: 1,
            src: img1,
            caption: 'More than 8000 participants attended our educational events',
        },
        {
            id: 2,
            src: img2,
            caption: 'More than 70 training programs',
        },
        {
            id: 3,
            src: img3,
            caption: '9 members of the Network of Education Centers',
        },
        {
            id: 4,
            src: img2,
            caption: '6 educational festivals organized',
        },
        {
            id: 5,
            src: img3,
            caption: '1 application for Lviv to join the UNESCO Network of Learning Cities was submitted',
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
        <Box mt={2} mb={2} style={{
            background: '#ededed',
            padding: '120px 0',
            margin: '0',
        }}>
            <StyledTextContainer>
                <Typography id='services' variant="h4" gutterBottom>
                    Our Achiwments
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

export default Achiwments