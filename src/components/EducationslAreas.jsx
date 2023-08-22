import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ReactMarkdown from 'react-markdown';
import Wavy from './UI/Wavy';
import educationalBg from '../assets/educational_bg.svg';
import num_bg from '../assets/num_bg.svg';


const StyledGrid = styled(Grid)`
  background-image: url(${educationalBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 20px;
  gap: 20px;
`;

const StyledTextContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

const EducationalAreas = ({ isEnglish, data }) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Educational Areas' : 'Навчальні напрями';

    return (
        <Box mt={5} mb={5} style={{
            background: `url(${educationalBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat, no-repeat',
            padding: isMobile ? '50px 50px 50px 0' : '160px 160px 120px 160px',
            display: 'flex',
            flexDirection: 'column',
            gap: '130px',
        }}>
            <StyledTextContainer>
                <Typography variant="h4_light" gutterBottom>
                    {pageTitle}
                </Typography>
                <Wavy fill={'#E8E7E0'} />
            </StyledTextContainer>
            <Grid container spacing={2} direction="reverse" style={{
                display: isMobile ? 'flex' : 'flex',
                flexDirection: isMobile ? 'column' : '',
                padding: isMobile ? '5% 15% 5% 0' : '',
            }}>
                {data.map((item, index) => (
                    <Grid
                        item xs={12} sm={6} md={4} key={item.id}
                        style={{ marginTop: isMobile ? '0' : `${-index * 50}px` }}>
                        <StyledGrid
                            container
                            alignItems={isMobile ? "center" : 'fles-start'}
                            // flexDirection={'row'}
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
                                    padding: '20%',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                {item.id}
                            </Typography>
                            <Box>
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