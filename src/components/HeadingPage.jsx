import { Container, Typography, } from '@mui/material';
import { styled } from '@mui/system';


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
  background-size: cover;
  background-position: center;
  z-index: -1;
  max-width: none;
`;


const HeadingPage = ({ isEnglish, data }) => {

  const apiUrl = process.env.API_URL;
  if (!data) {
    return null;
  }

  const text = isEnglish ? data.englishText : data.text;
  const subtext = isEnglish ? data.exnglishSubText : data.subtext;
  const backgroundImage = data.BackgroundImage.data.attributes.url
  const bgURL = apiUrl.slice(0, apiUrl.length - 4) + backgroundImage

  return (
    <StyledContainer>
      <BackgroundImage
        title="Background"
        style={{
          backgroundImage: `linear-gradient(
    90deg, 
    rgba(36, 31, 85, 0.8), 
    rgba(8, 29, 31, 0.7)
    ),
    url(${bgURL})`
        }} />
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