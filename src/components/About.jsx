import {
  Box,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import Wavy from './UI/Wavy';

const StyledSecondContainer = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8%;
    padding: 5% 20%;
    margin: 0 auto;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 20% 10%;
    }
`;

const StyledHeaderContainer = styled(Grid)`
      grid-column: 1 / 3;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 20px;
`;

const About = ({ isEnglish, data }) => {

  const apiUrl = process.env.API_URL;
  const isMobile = useMediaQuery('(max-width:600px)');

  if (!data) {
    return null;
  }

  return (
    <StyledSecondContainer>
      <StyledHeaderContainer>
        <Typography variant="h4" gutterBottom color={'#F7BA21'}>
          {isEnglish ? 'What we are doing' : 'Що ми робимо'}
        </Typography>
        <div>
          <Wavy fill='#F7BA21' />
        </div>
      </StyledHeaderContainer>

      {data.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <Grid item xs={12} sm={6} style={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <Image
              id='about'
              src={`${apiUrl.slice(0, apiUrl.length - 4)}${item.attributes.image.data.attributes.url}`}
              alt="About Us"
              width={180}
              height={194} />
            <Grid item xs={12} sm={6} margin={'0 20px'}>
              <Typography variant="about_heading" gutterBottom>
                {isEnglish ? item.attributes.EnglishTitle : item.attributes.title}
              </Typography>
              <br />
              <Typography variant="about_subheading" gutterBottom>
                {isEnglish ? item.attributes.englishText : item.attributes.text}
              </Typography>
            </Grid>
          </Grid>

        </div>
      ))
      }
    </StyledSecondContainer >
  );
};

export default About;