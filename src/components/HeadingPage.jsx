import { Container, Typography, } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/system';
import Image from 'next/image';


const StyledContainer = styled(Container)`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        style={{
          background: '#2B2B93',
        }} />
      <div>
        <Typography variant="h1" component="h1" gutterBottom>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Typography>
        <Typography variant="h2" gutterBottom>
          <ReactMarkdown>{subtext}</ReactMarkdown>
        </Typography>
      </div>
      <Image src={bgURL} alt='image' width={300} height={300} />
    </StyledContainer>
  );
};

export default HeadingPage