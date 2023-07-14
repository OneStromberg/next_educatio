import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


const ReviewsCarousel = () => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/reviews`, {
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

    return (
        <Carousel style={{ paddingBottom: 10, }}>
            {data.map((review) => (
                <Paper
                    key={review.id}
                    elevation={0}
                    style={{
                        paddingTop: 20,
                        textAlign: 'center',
                        maxWidth: '1000px',
                        maxHeight: '100%',
                        margin: '0 auto'
                    }}>
                    <Typography variant="body1">
                        {review.attributes.ReviewText}
                    </Typography>
                    <Typography variant="subtitle2" marginBottom={2}
                        style={{ marginTop: 10 }}>
                        {review.attributes.ReviewerName}
                    </Typography>
                    <Rating name="read-only"
                        value={review.attributes.rating}
                        readOnly />
                </Paper>
            ))
            }
        </Carousel >
    );
};

export default ReviewsCarousel