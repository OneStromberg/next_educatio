import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Link from 'next/link';


const Blog = ({ isEnglish }) => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/blog-posts/?populate=*`, {
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

    const pageTitle = isEnglish ? 'Blog' : 'Блог'
    return (
        <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                padding: '80px 0',
                width: '70%',
                margin: '0 auto'
            }}>

            <Grid item xs={12} textAlign="center">
                <Typography id='news' variant="h4" gutterBottom>
                    {pageTitle}
                </Typography>
            </Grid>

            {data.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                        <Card style={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="title1" gutterBottom>
                                    {isEnglish ? post.attributes.EnglishTitle : post.attributes.Title}
                                </Typography>
                                <Typography variant="subtitle4">
                                    <br />
                                    {isEnglish ? post.attributes.EnglishText : post.attributes.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default Blog