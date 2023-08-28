import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    useMediaQuery
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/system';
import Wavy from './UI/Wavy';
import snake from '../assets/snake.svg'

const StyledCard = styled(Card)`
    cursor: pointer;
    border-radius: 18px;
    transition: .3s;
    min-height: 512px;  
    max-height: 512px;
    min-width: 360px; 
    max-width: 360px;
    
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
    marginTop: 65,
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
        background: '#458FF6',
        color: '#fff',
        border: 'none',
    }
})


const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};


const Blog = ({ isEnglish, data }) => {
    const [showAll, setShowAll] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isSmallMobile = useMediaQuery('(max-width:370px)');
    const displayedPosts = isMobile ? showAll ? data : data.slice(0, 1) : data;


    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'News' : 'Новини'
    const allNews = isEnglish ? 'All news' : 'Всi новини'
    const hideNews = isEnglish ? 'Hide news' : 'Скрити новини'
    const apiUrl = process.env.API_URL;

    return (
        <Grid container spacing={3}
            id='news'
            alignItems="center"
            justifyContent="center"
            style={{
                background: `url(${snake.src}) center center no-repeat / 100%`,
                flexDirection: 'column',
            }}>

            <Grid item xs={12} textAlign="center" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
                marginBottom: 50,
            }}>
                <Typography variant="news_page_title" gutterBottom>
                    {pageTitle}
                </Typography>
                <Wavy fill='#7D7987' />
            </Grid>

            <Grid alignItems="center"
                justifyContent="center"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    // padding: isMobile ? 0 : '80px 0',
                    width: '100%',
                    height: '100%',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 20,
                    margin: isMobile ? '0 auto' : ''
                }}>
                {displayedPosts.map((post) => (
                    <Grid item xs={12} sm={6} key={post.id} style={{ maxHeight: 512, maxWidth: 360 }}>
                        <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                            <StyledCard>
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
                                            <ReactMarkdown>{isEnglish
                                                ? truncateText(post.attributes.EnglishText, 85)
                                                : truncateText(post.attributes.text, 85)}</ReactMarkdown>
                                        </Typography>
                                        <Typography variant='card_link' className='button' paddingTop={3}>{isEnglish ? 'Read →' : 'Читати →'}</Typography>
                                    </div>

                                </CardContent>
                            </StyledCard>
                        </Link>
                    </Grid>
                ))

                }
            </Grid>
            <StyledButton
                variant='outlined'
                onClick={() => setShowAll(!showAll)}>
                {showAll ? hideNews : allNews}
            </StyledButton>
        </Grid >
    );
};

export default Blog