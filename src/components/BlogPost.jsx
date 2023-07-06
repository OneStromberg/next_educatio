import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Typography,
    Card,
    CardContent
} from '@mui/material';

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
        <Grid item xs={12} sm={6}>
            <Card style={{ height: '100%', paddingTop: '10%', width: '80%', margin: '0 auto' }}>
                <CardContent>
                    <Typography variant="title1" gutterBottom>
                        {isEnglish ? data.attributes.EnglishTitle : data.attributes.Title}
                    </Typography>
                    <Typography variant="subtitle4">
                        <br />
                        {isEnglish ? data.attributes.EnglishText : data.attributes.text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BlogPost