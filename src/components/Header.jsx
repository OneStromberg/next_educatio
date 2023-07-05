"use client";
import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@mui/material';
import { Facebook, Instagram, Menu } from '@mui/icons-material';
import { styled } from '@mui/system';
import logo from '@/assets/CE_logo.png'
import Image from 'next/image';

const TransparentAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  position: fixed;
  z-index: 5;
  transition: .3s
`;

const StyledIconButton = styled(IconButton)`
  color: inherit;
  margin-left: 10px;
`;

const drawerStyles = {
  background: 'rgba(255, 255, 255, 0.1)',
};

const StyledButton = styled(Button)`
cursor: pointer;
color: inherit;
text-decoration: none;
margin-right: 10px;
`;

const Logo = styled(Typography)`
flex-grow: 1;
color: inherit;
`;

const Header = ({ onLanguageToggle, isEnglish }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isDarkBackground, setDarkBackground] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const darkBackgroundThreshold = 700;

    setScrolled(scrollTop > 0);
    setDarkBackground(scrollTop > darkBackgroundThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    onLanguageToggle();
    const newLanguage = isEnglish ? 'en' : 'ua';
    document.cookie = `language=${newLanguage}; path=/`; // Сохранение языка в куки
  };

  const getLanguageFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('language=')) {
        const language = cookie.substring('language='.length);
        return language;
      }
    }
    return null;
  };

  useEffect(() => {
    const languageFromCookie = getLanguageFromCookie();
    if (languageFromCookie) {
      const isEnglishFromCookie = languageFromCookie === 'en';
      onLanguageToggle(isEnglishFromCookie);
    }
  }, []);

  const languageIcon = isEnglish ? '🇬🇧' : '🇺🇦';

  return (
    <TransparentAppBar position="static"
      style={{
        color: isDarkBackground ? '#000010f0' : '#f9f9f9f9',
        background: isDarkBackground ? '#241f554a' : '',
      }}
    >
      <Toolbar>
        <Hidden mdDown>
          <Logo variant="h6" component="div">
            <Image src={logo.src} width={130} height={70}></Image>
          </Logo>
        </Hidden>
        <Hidden mdUp>
          <Logo variant="h6" component="div">
            <Typography variant='h2' style={{ color: 'inherit' }}>CE - Center of Education</Typography>
          </Logo>
          <StyledIconButton color="inherit" onClick={toggleLanguage}>
            {languageIcon}
          </StyledIconButton>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleMenuToggle}>
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('about')}>About Us</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('services')}>Services</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('news')}>News</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('calendar')}>Calendar</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('contact')}>Contact</StyledButton>
          </Button>
          <StyledIconButton color="inherit" onClick={toggleLanguage}>
            {languageIcon}
          </StyledIconButton>
          <StyledIconButton color="inherit" href="https://www.facebook.com">
            <Facebook />
          </StyledIconButton>
          <StyledIconButton color="inherit" href="https://www.instagram.com">
            <Instagram />
          </StyledIconButton>
        </Hidden>
        <Drawer anchor="right"
          open={isMenuOpen}
          onClose={handleMenuToggle}
          PaperProps={{
            sx: drawerStyles,
          }}>
          <List>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('about')}
                  style={{ color: '#fff' }}>
                  About Us
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('services')}
                  style={{ color: '#fff' }}>
                  Services
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('news')}
                  style={{ color: '#fff' }}>
                  News
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('calendar')}
                  style={{ color: '#fff' }}>
                  Calendar
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('contact')}
                  style={{ color: '#fff' }}>
                  Contact
                </StyledButton>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Header;