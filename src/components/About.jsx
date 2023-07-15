import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { styled } from '@mui/system';


const StyledSecondContainer = styled(Box)`
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80%;
        gap: 8%;
        margin: 0 auto;
        padding: 10% 0;

        @media (max-width: 600px) {
            flex-direction: column;
          }
        `;

const StyledTextContainer = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        text-align: center;
        align-items: center;
        `;

const StyledImage = styled('img')`
        max-width: 100%;
        height: auto;
        `;

const About = ({ isEnglish, data }) => {

  const apiUrl = process.env.API_URL;

  if (!data) {
    return null;
  }

  const text = isEnglish ? data.englishText : data.text;
  const image = data.image.data.attributes.url
  const imageURL = apiUrl.slice(0, apiUrl.length - 4) + image
  const aboutus = isEnglish ? 'About us' : 'Про нас'
  const subtitle = isEnglish ? 'Developing the habit of continuous learning' : 'Розвиваємо звичку навчатися невпинно'

  return (
    <StyledSecondContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledImage id='about' src={imageURL} alt="About Us" width={600} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextContainer>
            <Typography variant="h4" gutterBottom>
              {aboutus}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {subtitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
          </StyledTextContainer>
        </Grid>
      </Grid>
    </StyledSecondContainer>
  );
};

export default About