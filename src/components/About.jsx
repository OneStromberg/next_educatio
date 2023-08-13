import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';

const StyledSecondContainer = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8%;
    padding: 5% 20%;
    margin: 0 auto;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const StyledHeaderContainer = styled(Grid)`
    grid-column: 1 / 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
`;

const About = ({ isEnglish, data }) => {

  const apiUrl = process.env.API_URL;

  if (!data) {
    return null;
  }

  return (
    <StyledSecondContainer>
      <StyledHeaderContainer>
        <Typography variant="h4" gutterBottom>
          {isEnglish ? 'About us' : 'Про нас'}
        </Typography>
      </StyledHeaderContainer>

      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <Grid item xs={12} sm={6}>
            <Image
              id='about'
              src={`${apiUrl.slice(0, apiUrl.length - 4)}${item.attributes.image.data.attributes.url}`}
              alt="About Us"
              width={600}
              height={900}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }} />
          </Grid>
          <Grid item xs={12} sm={6} margin={'0 20px'}>
            <Typography variant="subtitle2" gutterBottom>
              {isEnglish ? item.EnglishSubtitle : item.subtitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {isEnglish ? item.attributes.englishText : item.attributes.text}
            </Typography>
          </Grid>

        </div>
      ))}
    </StyledSecondContainer>
  );
};

export default About;