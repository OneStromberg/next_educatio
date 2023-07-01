import {
  Container,
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { styled } from '@mui/system';

import AboutUsPic from '@/assets/pic1.jpg'



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

const About = () => {

  return (
    <StyledSecondContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledImage id='about' src={AboutUsPic.src} alt="About Us" width={600} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextContainer>
            <Typography variant="h4" gutterBottom>
              About us
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Developing the habit of continuous learning
            </Typography>
            <Typography variant="body1" gutterBottom>
              This is a network of Education Centers that has been operating in eight city libraries in Lviv since 2019. We develop a culture of informal lifelong learning by providing high-quality long-term training courses.
              Since 2022, we have been conducting art therapies with qualified psychotherapists in Lviv and the region with the support of UNICEF.
              The CE network exists thanks to the close cooperation of the City Institute, Lviv City Council, the Department of Culture, and the financial support of DVV International Ukraine.
            </Typography>
          </StyledTextContainer>
        </Grid>
      </Grid>
    </StyledSecondContainer>
  );
};

export default About