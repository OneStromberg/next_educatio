import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Wavy from './UI/Wavy';
import educationalBg from '../assets/educational_bg.svg';

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
    if (!data) {
        return null;
    }

    const pageTitle = isEnglish ? 'Educational Areas' : 'Навчальні напрями';

    return (
        <Box mt={5} mb={5} style={{
            background: `url(${educationalBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat, no-repeat',
            padding: '160px 160px 120px 160px',
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
            <Grid container spacing={2} direction="reverse">
                {data.map((item, index) => (
                    <Grid
                        item xs={12} sm={6} md={4} key={item.id}
                        style={{ marginTop: `${-index * 50}px` }}>
                        <StyledGrid
                            container
                            alignItems="center"
                            flexDirection={'row'}
                            flexWrap={'nowrap'}>
                            <Typography variant='member_number'>{item.id}</Typography>
                            <Box>
                                <Typography variant="member_title" paddingBottom={10}>
                                    {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
                                </Typography>
                                <br />
                                <Typography variant="member_subtitle">
                                    {isEnglish ? item.attributes.EnglishText : item.attributes.text}
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