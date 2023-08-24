import {
  Box,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { styled } from '@mui/system';
import Wavy from './UI/Wavy';

const StyledContainer = styled(Box)`
    padding: 5% 10%;
    margin: 0 auto;

    @media (max-width: 600px) {
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

  const modifiedData = isMobile ? data : [
    data[0],
    null,
    ...data.slice(1, -1),
    null,
    data[data.length - 1],
  ];

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <Typography variant="h4" gutterBottom color={'#F7BA21'}>
          {isEnglish ? 'What we are doing' : 'Що ми робимо'}
        </Typography>
        <div>
          <Wavy fill='#F7BA21' />
        </div>
      </StyledHeaderContainer>

      <Box style={{
        display: isMobile ? 'flex' : 'grid',
        flexDirection: isMobile ? 'column' : '',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gridTemplateRows: isMobile ? 'auto' : `repeat(${Math.ceil(modifiedData.length / 2)}, 1fr)`,
        gap: isMobile ? '15px' : '15px 50px',
      }}>
        {modifiedData.map((item, index) => {
          if (item === null) {
            return <div key={`invisible-${index}`} style={{ visibility: 'hidden' }} />;
          }

          const rowStart = Math.floor(index / 2) + 1;
          const rowEnd = rowStart + 1;
          const colStart = index % 2 + 1;
          const colEnd = colStart + 1;
          const gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                gridArea: isMobile ? '' : gridArea,
                justifyContent: isMobile ? 'center' : 'start'
              }}
            >
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
                    <ReactMarkdown>{isEnglish ? item.attributes.englishText : item.attributes.text}</ReactMarkdown>
                  </Typography>
                </Grid>
              </Grid>

            </div>
          )
        })
        }
      </Box>
    </StyledContainer >
  );
};

export default About;