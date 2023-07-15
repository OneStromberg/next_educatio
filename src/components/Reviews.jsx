import { Typography, Paper, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


const ReviewsCarousel = ({ data }) => {

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
                        value={Number(review.attributes.rating)}
                        readOnly />
                </Paper>
            ))
            }
        </Carousel >
    );
};

export default ReviewsCarousel