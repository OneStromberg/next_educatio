import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    useMediaQuery
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/system';
import Wavy from './UI/Wavy';

const StyledCard = styled(Card)`
    cursor: pointer;
    border-radius: 18px;
    transition: .3s;
    
    &:hover {
        box-shadow: 0px 20px 60px 0px rgba(157, 166, 189, 0.80);

        .text-element {
            color: rgba(98, 99, 103, 0.50);
        }
        .button{
            font-weight: 700;
        }
    }
`;

const StyledButton = styled(Button)({
    borderRadius: 55,
    border: '1.4px solid #458FF6',
    color: '#458FF6',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '3.33',
    width: 200,
    height: 60,
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
        background: '#458FF6',
        color: '#fff',
        border: 'none',
    }
});


const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};


const Blog = ({ isEnglish, data }) => {
    const [showAll, setShowAll] = useState(false);
    const [displayedPosts, setDisplayedPosts] = useState(data.slice(0, 3));

    useEffect(() => {
        if (showAll) {
            setDisplayedPosts(data);
        }
    }, [showAll, data]);
    const isMobile = useMediaQuery('(max-width:600px)');

    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'News' : 'Новини'
    const allNews = isEnglish ? 'All news' : 'Всi новини'
    const apiUrl = process.env.API_URL;

    return (
        <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                padding: isMobile ? 0 : '80px 0',
                width: isMobile ? '100%' : '70%',
                margin: isMobile ? '70px 0' : '70px auto',
                flexDirection: 'column',
                gap: 50,
            }}>

            <Grid item xs={12} textAlign="center" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
            }}>
                <Typography id='news' variant="news_page_title" gutterBottom>
                    {pageTitle}
                </Typography>
                <Wavy fill='#7D7987' />
            </Grid>

            {displayedPosts.map((post) => (
                <Grid item xs={12} sm={6} key={post.id} style={{ padding: 15 }}>
                    <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                        <StyledCard style={{ height: '100%', borderRadius: 18 }}>
                            <CardContent style={{ padding: 0 }}>
                                <Image
                                    src={`${apiUrl.slice(0, apiUrl.length - 4)}${post.attributes.headingImage.data.attributes.url}`}
                                    alt={post.attributes.Title}
                                    width={380}
                                    height={250}
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', padding: '1em 2em' }}>
                                    <Typography variant="news_preview_title" gutterBottom>
                                        {isEnglish ? post.attributes.EnglishTitle : post.attributes.Title}
                                    </Typography>
                                    <Typography variant="news_text" className="text-element">
                                        {isEnglish
                                            ? truncateText(post.attributes.EnglishText, 150)
                                            : truncateText(post.attributes.text, 150)}
                                    </Typography>
                                    <Typography variant='card_link' className='button' paddingTop={5}>{isEnglish ? 'Read →' : 'Читати →'}</Typography>
                                </div>

                            </CardContent>
                        </StyledCard>
                    </Link>
                </Grid>
            ))
            }
            <StyledButton
                variant='outlined'
                onClick={() => setShowAll(true)}>
                {allNews}
            </StyledButton>
        </Grid >
    );
};

export default Blog