import {
    Grid,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Link from 'next/link';


const Blog = () => {

    const blogData = [
        { id: 1, title: 'Blog Post 1', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Blog Post 2', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { id: 3, title: 'Blog Post 3', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
        // Добавьте остальные посты блога
    ];

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
                    Blog
                </Typography>
            </Grid>

            {blogData.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                        <Card style={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="title1" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle4"><br />{post.excerpt}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default Blog