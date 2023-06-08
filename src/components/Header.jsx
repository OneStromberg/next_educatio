import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Language, Facebook, Instagram } from '@mui/icons-material';
import { styled } from '@mui/system';

const TransparentAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
`;

const StyledIconButton = styled(IconButton)`
  color: white;
  margin-left: 10px;
`;

const Logo = styled(Typography)`
  flex-grow: 1;
  color: white;
`;

const Header = () => {
  return (
    <TransparentAppBar position="static">
      <Toolbar>
        <Logo variant="h6" component="div">
          My Website
        </Logo>
        <Button color="inherit">
          <StyledLink href="/about">About Us</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink href="/services">Services</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink href="/news">News</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink href="/calendar">Calendar</StyledLink>
        </Button>
        <Button color="inherit">
          <StyledLink href="/contact">Contact</StyledLink>
        </Button>
        <StyledIconButton color="inherit">
          <Language />
        </StyledIconButton>
        <StyledIconButton color="inherit" href="https://www.facebook.com">
          <Facebook />
        </StyledIconButton>
        <StyledIconButton color="inherit" href="https://www.instagram.com">
          <Instagram />
        </StyledIconButton>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Header;