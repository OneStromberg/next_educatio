import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

import backgroundImage from '@/assets/background.jpg';

const StyledContainer = styled(Container)`
    background-image: ${backgroundImage};
  background:linear-gradient(45deg, rgba(0, 176, 255, 0.5), rgba(255, 213, 0, 0.5)), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;
`;

const FirstContainer = () => {
    return (
        <StyledContainer>
            <Typography variant="h3" component="h1" gutterBottom>
                Network CE - Education Centers
            </Typography>
            <Typography variant="body1" gutterBottom>
                A network of informal education operating in libraries and public spaces in Lviv and the region. We offer educational courses for professional and social growth.
            </Typography>
        </StyledContainer>
    );
};

const SecondContainer = () => {
    return (
        <StyledContainer>
            <Typography variant="h3" component="h1" gutterBottom>
                Network CE - Education Centers
            </Typography>
            <Typography variant="body1" gutterBottom>
                A network of informal education operating in libraries and public spaces in Lviv and the region. We offer educational courses for professional and social growth.
            </Typography>
        </StyledContainer>
    );
};


const ThirdContainer = () => {
    return (
        <StyledContainer>
            <Typography variant="h3" component="h1" gutterBottom>
                Network CE - Education Centers
            </Typography>
            <Typography variant="body1" gutterBottom>
                A network of informal education operating in libraries and public spaces in Lviv and the region. We offer educational courses for professional and social growth.
            </Typography>
        </StyledContainer>
    );
};

export { FirstContainer, SecondContainer, ThirdContainer };
