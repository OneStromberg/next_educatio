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
import Arrow from './UI/Arrow.jsx';

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
    .read__wrapper {
        transition: .3s;
        &:hover{
        .button{
            font-weight: 700;
        }
        svg{
            transition: all 0.3s ease;
            transform: translateX(15px);
        }
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

const removeMarkdown = (str) => {
    return str.replace(/([_*\[\]()~>#+-])/g, '');
  };

const truncateText = (text, maxLength) => {
    const cleanText = removeMarkdown(text);
    if (cleanText.length <= maxLength) return cleanText;
    return `${cleanText.slice(0, maxLength)}...`;
};


const Blog = ({ isEnglish, data }) => {
    const [showAll, setShowAll] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isSmallMobile = useMediaQuery('(max-width:370px)');
    const displayedPosts = isMobile ? showAll ? data : data?.slice(0, 1) : showAll ? data : data?.slice(0, 3)


    if (!data || data.length < 1) {
        return <></>;
    }

    const pageTitle = isEnglish ? 'News' : 'Новини'
    const allNews = isEnglish ? 'All news' : 'Всi новини'
    const hideNews = isEnglish ? 'Hide news' : 'Скрити новини'
    const apiUrl = process.env.API_URL;

    return (
        <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                background: `url(${snake.src}) center / 100% no-repeat `,
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
                id='news'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    // padding: isMobile ? 0 : '80px 0',
                    width: '90%',
                    height: '100%',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 20,
                    margin: isMobile ? '0 auto' : ''
                }}>
                {displayedPosts.map((post) => (
                    <Grid item xs={12} sm={6} key={post.id} style={{ maxHeight: 512, maxWidth: 360, alignItems: 'space-between' }}>
                        <Link href={`/news/${post?.attributes?.slug}`} passHref style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <CardContent style={{ padding: 0, height: '100%' }}>
                                    <Image
                                        src={`${apiUrl.slice(0, apiUrl.length - 4)}${post?.attributes?.headingImage?.data?.attributes?.url}`}
                                        alt={post?.attributes?.Title}
                                        width={380}
                                        height={250}
                                    />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '1em 2em 35px',
                                        minHeight: '260px',
                                        height: '100%',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Typography variant="news_preview_title" gutterBottom>
                                            {isEnglish ? post?.attributes?.EnglishTitle : post?.attributes?.Title}
                                        </Typography>
                                        <Typography variant="news_text" className="text-element">
                                            <ReactMarkdown>{isEnglish
                                                ? truncateText(post?.attributes?.EnglishText, 35)
                                                : truncateText(post?.attributes?.text, 35)}</ReactMarkdown>
                                        </Typography>
                                        <div className='read__wrapper' paddingTop={3} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <Typography variant='card_link' className='button'>{isEnglish ? 'Read' : 'Читати'}</Typography>
                                            <div style={{ width: 14, height: 9 }}>
                                                <Arrow fill={'#4089ED'} />
                                            </div>
                                        </div>
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