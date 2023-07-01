import { Typography, Paper, } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


const ReviewsCarousel = () => {

    const reviewData = [
        { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Jane Smith', review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { id: 3, name: 'Alice Johnson', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
        // Добавьте остальные отзывы
    ];


    return (
        <Carousel>
            {reviewData.map((review) => (
                <Paper key={review.id} elevation={0} style={{ padding: 20, textAlign: 'center' }}>
                    <Typography variant="body1">{review.review}</Typography>
                    <Typography variant="subtitle2" style={{ marginTop: 10 }}>{review.name}</Typography>
                </Paper>
            ))}
        </Carousel>
    );
};

export default ReviewsCarousel