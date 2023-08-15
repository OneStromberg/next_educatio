import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Image from 'next/image';

const BlogPost = ({ isEnglish, id }) => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(`${apiUrl}/blog-posts/${id}`, {
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
        <Grid item xs={12} sm={6} style={{ paddingTop: '10%' }}>
            <Card style={{ height: '100%', width: '80%', margin: '0 auto', borderRadius: 18 }}>
                <CardContent padding={'2em 4em'}>
                    <Image
                        src={data.attributes.image}
                        alt={data.attributes.Title}
                        width={300}
                        height={'auto'} />
                    <Typography variant="news_title" gutterBottom>
                        {isEnglish ? data.attributes.EnglishTitle : data.attributes.Title}
                    </Typography>
                    <br />
                    <Typography variant="news_text">
                        {isEnglish ? data.attributes.EnglishText : data.attributes.text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BlogPost