import { Container, Typography, } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '@/assets/background.jpg';


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


const HeadingPage = () => {
  return (
    <StyledContainer>
      <BackgroundImage />
      <Typography variant="h1" component="h1" gutterBottom>
        Network CE - Education Centers
      </Typography>
      <Typography variant="h2" gutterBottom>
        A network of informal education operating in libraries and public spaces
        in Lviv and the region. We offer educational courses for professional
        and social growth.
      </Typography>
    </StyledContainer>
  );
};

export default HeadingPage 