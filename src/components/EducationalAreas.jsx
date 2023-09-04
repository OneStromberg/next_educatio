import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ReactMarkdown from 'react-markdown';
import Wavy from './UI/Wavy';
import educationalBg from '../assets/educational_bg.svg';
import num_bg from '../assets/num_bg.svg';


const StyledGrid = styled(Grid)`
  background-size: cover;
  background-repeat: no-repeat no-repeat;
  color: #fff;
`;

const StyledTextContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2%;
    padding-left: 6%;
`;

const EducationalAreas = ({ isEnglish, data }) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    const isWide = useMediaQuery('(min-width: 1280px)');
    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Educational Areas' : 'Навчальні напрями';

    return (
        <Box mt={0} mb={5} style={{
            background: `url(${educationalBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat no-repeat',
            padding: isMobile ? '50px 50px 100px 0' : '4% 70px 8% 70px',
            paddingBottom: isWide ? '13%' : '8%',
            display: 'flex',
            flexDirection: 'column',
            gap: '90px',
            margin: 0,
        }}>
            <StyledTextContainer>
                <Typography variant="h4_light" gutterBottom>
                    {pageTitle}
                </Typography>
                <Wavy fill={'#E8E7E0'} />
            </StyledTextContainer>
            <Grid container spacing={2} style={{
                display: isMobile ? 'flex' : 'flex',
                flexDirection: isMobile ? 'column' : '',
                padding: isMobile ? '' : '',
                gap: isMobile ? 45 : '',
                width: '90%',
                margin: '0 auto'
            }}>
                {data.map((item, index) => (
                    <Grid
                        item xs={12} sm={6} md={4} key={item.id}
                        style={{ marginTop: isMobile ? '0' : `${-index * 25}px`, padding: 0 }}>
                        <StyledGrid
                            container
                            alignItems={isMobile ? "center" : 'fles-start'}
                            flexWrap={'nowrap'}
                            marfin={0}>
                            <Typography
                                variant='member_number'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundImage: `url(${num_bg.src})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    padding: '15% 0%',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                {item.id}
                            </Typography>
                            <Box width={'100%'}>
                                <Typography variant="member_title" paddingBottom={10}>
                                    {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
                                </Typography>
                                <br />
                                <Typography variant="member_subtitle">
                                    <ReactMarkdown>{isEnglish ? item.attributes.EnglishText : item.attributes.text}</ReactMarkdown>
                                </Typography>
                            </Box>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default EducationalAreas;