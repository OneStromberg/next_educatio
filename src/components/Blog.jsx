import {
    Grid,
    Typography,
    Card,
    CardContent,
    Button
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


const Blog = ({ isEnglish, data }) => {

    if (!data) {
        return null;
    }

    console.log(data)

    const pageTitle = isEnglish ? 'News' : 'Новини'
    const allNews = isEnglish ? 'All news' : 'Всi новини'
    const apiUrl = process.env.API_URL;
    return (
        <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                padding: '80px 0',
                width: '70%',
                margin: '0 auto',
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

            {data.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                        <StyledCard style={{ height: '100%', borderRadius: 18 }}>
                            <CardContent style={{ padding: 0 }}>
                                <Image
                                    src={`${apiUrl.slice(0, apiUrl.length - 4)}${post.attributes.headingImage.data.attributes.url}`}
                                    alt={post.attributes.Title}
                                    width={600}
                                    height={350}
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', padding: '1em 2em' }}>
                                    <Typography variant="news_preview_title" gutterBottom>
                                        {isEnglish ? post.attributes.EnglishTitle : post.attributes.Title}
                                    </Typography>
                                    <Typography variant="news_text" className="text-element">
                                        {isEnglish ? post.attributes.EnglishText : post.attributes.text}
                                    </Typography>
                                    <Typography variant='card_link' className='button' paddingTop={5}>{isEnglish ? 'Read →' : 'Читати →'}</Typography>
                                </div>

                            </CardContent>
                        </StyledCard>
                    </Link>
                </Grid>
            ))
            }
            <Button variant='outlined' href='/blog' passHref
                style={{
                    borderRadius: 55,
                    border: '1.4px solid #458FF6',
                    color: '#458FF6',
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 3.33,
                    width: 200,
                    cursor: 'pointer',
                }}>{allNews}</Button>
        </Grid >
    );
};

export default Blog