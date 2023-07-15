import {
    Grid,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Link from 'next/link';


const Blog = ({ isEnglish, data }) => {

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