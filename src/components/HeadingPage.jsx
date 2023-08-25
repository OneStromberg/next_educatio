import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  column-gap: 10%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    padding: 10% 4%;  // Уменьшаем паддинги для мобильных устройств
  }
`;

const HeadingPage = ({ isEnglish, data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const apiUrl = process.env.API_URL;
  if (!data) {
    return null;
  }

  const text = isEnglish ? data.englishText : data.text;
  const subtext = isEnglish ? data.exnglishSubText : data.subtext;
  const backgroundImage = data.BackgroundImage.data.attributes.url;
  const bgURL = apiUrl.slice(0, apiUrl.length - 4) + backgroundImage;

  return (
    <StyledContainer style={{
      background: `url(${background.src})`,
      maxWidth: 'none',
      maxHeight: isMobile ? '850px' : 'none',
      height: isMobile ? '100%' : '100dvh',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat no-repeat',
      paddingTop: isMobile ? 70 : '',
      rowGap: isMobile ? '50px' : '',
    }}>
      {isMobile && <Image src={bgURL} alt='image' width={240} height={240} style={{ margin: '5% 0' }} />}
      <div style={{ width: isMobile ? '100%' : '40%' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          <ReactMarkdown component='h1'>{text}</ReactMarkdown>
        </Typography>
        <Typography variant="h2" gutterBottom style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '75%' }}>
          <ReactMarkdown component='h2'>{subtext}</ReactMarkdown>
        </Typography>
      </div>
      {!isMobile && <Image src={bgURL} alt='image' width={300} height={300} />}
    </StyledContainer>
  );
};

export default HeadingPage;