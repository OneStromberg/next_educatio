import { Container, Typography, } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/system';
import background from '../assets/heading_bg.svg';
import Image from 'next/image';


const StyledContainer = styled(Container)`
  height: 100dvh;
  display: flex;
  align-items: center;
  color: #fff;
  max-width: 100dvw;
  padding: 10% 20%;
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
    <StyledContainer style={{
      background: `url(${background.src})`,
      maxWidth: 'none',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat no-repeat'
    }}>
      <div style={{ width: '80%', display: 'flex' }}>
        <div>
          <Typography variant="h1" component="h1" gutterBottom>
            <ReactMarkdown>{text}</ReactMarkdown>
          </Typography>
          <Typography variant="h2" gutterBottom>
            <ReactMarkdown>{subtext}</ReactMarkdown>
          </Typography>
        </div>
        <Image src={bgURL} alt='image' width={300} height={300} />
      </div>
    </StyledContainer>
  );
};

export default HeadingPage