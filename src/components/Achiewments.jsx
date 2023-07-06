import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Box,
    Grid,
    Typography,
} from '@mui/material';

import { styled } from '@mui/system';
import Image from 'next/image';

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


const Achiewments = ({ isEnglish }) => {
    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/achiewments/?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    }
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return null;
    }
    const pageTitle = isEnglish ? 'Our achiewments' : 'Наші досягнення'
    return (
        <Box mt={2} mb={2} style={{ background: '#ededed', padding: '120px 0', margin: '0', }}>
            <StyledTextContainer>
                <Typography id='services' variant="h4" gutterBottom>
                    {pageTitle}
                </Typography>
                {/* <Typography variant="subtitle3" gutterBottom>
                    It is worth acquiring new knowledge even after graduation from formal educational institutions. THIS is a network for those who treat knowledge as a basic necessity
                </Typography> */}
            </StyledTextContainer>

            <Container maxWidth="m" style={{ background: '#ededed' }}>
                <Grid container spacing={2}>

                    {data.map((item, index) => (
                        <Grid item xs={12} key={item.id} style={{
                            background: '#fff',
                            maxWidth: 'fit-content',
                            margin: '0 auto'
                        }}>
                            <StyledGrid>
                                {index % 2 === 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Image
                                            src={apiUrl.slice(0, apiUrl.length - 4) + item.attributes.image.data.attributes.url}
                                            alt={item.attributes.image.data.attributes.name}
                                            width={800}
                                            height={1000}
                                            style={
                                                {
                                                    float: 'left',
                                                    maxWidth: '50%',
                                                    height: 'auto',
                                                    marginRight: '10px'
                                                }
                                            } />
                                        <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                            <Typography variant="title" gutterBottom>
                                                {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
                                            </Typography>
                                            <Typography variant="subtitle4">
                                                {isEnglish ? item.attributes.EnglishText : item.attributes.text}
                                            </Typography>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                            <Typography variant="title" gutterBottom>
                                                {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
                                            </Typography>
                                            <Typography variant="subtitle4">
                                                {isEnglish ? item.attributes.EnglishText : item.attributes.text}
                                            </Typography>
                                        </div>
                                        <Image
                                            src={apiUrl.slice(0, apiUrl.length - 4) + item.attributes.image.data.attributes.url}
                                            alt={item.attributes.image.data.attributes.name}
                                            width={800}
                                            height={1000}
                                            style={
                                                {
                                                    float: 'left',
                                                    maxWidth: '50%',
                                                    height: 'auto',
                                                    marginRight: '10px'
                                                }
                                            } />
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

export default Achiewments