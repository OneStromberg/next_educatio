import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';

const BlogPost = ({ isEnglish, id }) => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(`${apiUrl}/blog-posts/${id}?populate=*`, {
                        headers: {
                            Authorization: `Bearer ${apiKey} `,
                        }
                    });
                    setData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);


    if (!data) {
        return null;
    }


    return (
        <Grid item xs={12} sm={10} paddingBottom={5}>
            <div style={{ position: 'relative' }}>
                <Image
                    src={`${apiUrl.slice(0, apiUrl.length - 4)}${data.attributes.headingImage.data.attributes.url}`}
                    alt={data.attributes.Title}
                    layout="responsive"
                    width={1440}
                    height={800}
                />

                {/* Overlay */}
                <Box
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(43, 41, 162, 0.80) 0%, rgba(43, 41, 162, 0.50) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="news_title" style={{ zIndex: 1, color: 'white' }}>
                        {isEnglish ? data.attributes.EnglishTitle : data.attributes.Title}
                    </Typography>

                    {/* Gradient line */}
                    <div style={{
                        height: '3px',
                        width: '70%',
                        marginTop: '20px',
                        backgroundImage: 'linear-gradient(to right, transparent, white, transparent)'
                    }}></div>

                    {/* Back to home button */}
                    <Button
                        startIcon='←'
                        href='/'
                        style={{
                            cursor: 'pointer',
                            color: 'white',
                            borderColor: 'white',
                            alignSelf: 'flex-start',
                            margin: '60px 20%',
                        }}
                        variant="text">
                        {isEnglish ? 'Back to Home' : 'На головну'}
                    </Button>
                </Box>
            </div>

            {/* News post text */}
            <Box p={{ xs: 2, md: 10 }} py={5}>
                <Typography variant="news_text">
                    {isEnglish ? data.attributes.EnglishText : data.attributes.text}
                </Typography>
            </Box>

            <Button
                href='/'
                startIcon='←'
                variant="text"
                style={{ cursor: 'pointer', margin: '2% 5%' }}>
                {isEnglish ? 'Back to Home' : 'На головну'}
            </Button>
        </Grid>
    );
}

export default BlogPost;
