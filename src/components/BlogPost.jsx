import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import logo from '../assets/footter_logo.svg';

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
    const isMobile = useMediaQuery('(max-width: 600px)');

    if (!data) {
        return null;
    }

    <Head>
        <title>Educatio | News</title>
        <meta name="description" content="Educatio is the leading center of education in Lviv. We offer a wide range of educational services. Join us to redefine your future." />
        <meta name="keywords" content="Education, Educatio, Lviv, Center of education, CE, Освіта, Educatio, Львів, Центр освіти, ЦЕ, мережа ЦЕ — центрів едукації, центр едукації" />
        <meta name="author" content="Центр едукації" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`http://ceducatio.com/blog/${id}`} />
        <link rel="icon" href={logo.src} type="image/x-icon" />
    </Head>


    return (
        <Grid item xs={12} sm={10} paddingBottom={5} marginTop={isMobile ? '70px' : ''}>
            <div style={{
                position: 'relative',
                height: isMobile ? '260px' : '100dvh',
                width: '100%',
                margin: 0,
                background: `url(${apiUrl.slice(0, apiUrl.length - 4)}${data.attributes.headingImage.data.attributes.url}) center center / cover no-repeat`
            }}>

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
                    <Typography variant="news_title" style={{ zIndex: 1, color: '#fff', fontSize: isMobile ? '30px' : '', margin: isMobile ? '50px 15px 0px 15px' : '' }}>
                        {isEnglish ? data.attributes.EnglishTitle : data.attributes.Title}
                    </Typography>

                    <div style={{
                        minHeight: '1px',
                        maxHeight: '2px',
                        width: '70%',
                        marginTop: '20px',
                        backgroundImage: 'linear-gradient(to right, transparent, #fff, transparent)'
                    }}></div>

                    <Button
                        startIcon='←'
                        href='/'
                        style={{
                            cursor: 'pointer',
                            color: 'white',
                            borderColor: 'white',
                            alignSelf: 'flex-start',
                            margin: isMobile ? '10% 5%' : '60px 20%',
                        }}
                        variant="text">
                        {isEnglish ? 'Back to Home' : 'На головну'}
                    </Button>
                </Box>
            </div>

            <Box p={{ xs: 2, md: 10 }} py={5}>
                <Typography variant="news_text">
                    <ReactMarkdown>{isEnglish ? data.attributes.EnglishText : data.attributes.text}</ReactMarkdown>
                </Typography>
            </Box>

            <Button
                href='/'
                startIcon='←'
                variant="text"
                style={{ cursor: 'pointer', margin: '2% 5%', color: '#458FF6' }}>
                {isEnglish ? 'Back to Home' : 'На головну'}
            </Button>
        </Grid >
    );
}

export default BlogPost;
