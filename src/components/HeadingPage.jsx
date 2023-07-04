import { useState, useEffect } from 'react';
import { Container, Typography, } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '@/assets/background.jpg';
import axios from 'axios';

const StyledContainer = styled(Container)`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  max-width: none;
`;

const BackgroundImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg, 
    rgba(36, 31, 85, 0.8), 
    rgba(8, 29, 31, 0.7)
    ),
    url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  z-index: -1;
  max-width: none;
`;


const HeadingPage = ({isEnglish}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.API_URL;
      const apiKey = process.env.API_TOKEN;

      try {
        const response = await axios.get(`${apiUrl}/main-pages/1`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          }
        });

        setData(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)
  if (!data) {
    return null;
  }

  const text = isEnglish ? data.englishText : data.text;
  const subtext = isEnglish ? data.exnglishSubText : data.subtext;

  return (
    <StyledContainer>
      <BackgroundImage />
      <Typography variant="h1" component="h1" gutterBottom>
        {text}
      </Typography>
      <Typography variant="h2" gutterBottom>
        {subtext}
      </Typography>
    </StyledContainer>
  );
};

export default HeadingPage 