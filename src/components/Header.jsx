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
import Link from 'next/link';

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
  text-shadow: 1px 1px 2px #000009;
`;

const drawerStyles = {
  background: 'rgba(255, 255, 255, 0.1)',
};

const StyledButton = styled(Button)`
cursor: pointer;
color: inherit;
text-decoration: none;
margin-right: 10px;
text-shadow: 1px 1px 2px #000009;
`;

const Logo = styled(Typography)`
flex-grow: 1;
color: inherit;
`;

const Header = ({ onLanguageToggle, isEnglish }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
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

  // useEffect(() => {
  //   let timeoutId;

  //   const handleScroll = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       const headerElement = document.querySelector('header');
  //       if (headerElement) {
  //         const headerStyles = getComputedStyle(headerElement);

  //         const elementsBelowHeader = document.querySelectorAll('body *');
  //         let backgroundColorBelowHeader = '';

  //         for (let i = 0; i < elementsBelowHeader.length; i++) {
  //           const element = elementsBelowHeader[i];
  //           const elementStyles = getComputedStyle(element);
  //           const elementBackgroundColor = elementStyles.backgroundColor;
  //           const rgbRegex = /rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/;
  //           const rgbMatch = elementBackgroundColor.match(rgbRegex);
  //           const rgbaRegex = /rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d*\.\d+|\d+)\)/;
  //           const rgbaMatch = elementBackgroundColor.match(rgbaRegex);

  //           if ((backgroundColorBelowHeader !== elementBackgroundColor)
  //             && ((rgbMatch && rgbMatch[0] !== '0')
  //               || (rgbaMatch && rgbaMatch[4] !== '0'))) {
  //             backgroundColorBelowHeader = elementBackgroundColor;
  //             break;
  //           }
  //         }

  //         const isLightBackground = isColorLight(backgroundColorBelowHeader);
  //         const isLightText = isColorLight(headerStyles.color);
  //         const hasContrastIssue = isLightBackground === isLightText;
  //         console.log(isLightBackground, isLightText)
  //         setDarkBackground(hasContrastIssue);
  //       }
  //     }, 500); // Задержка в 0.5 секунды
  //   };

  //   const isColorLight = (color) => {
  //     const rgb = color.match(/\d+/g);
  //     if (rgb && (rgb[3] !== '0' || rgb[4] !== '0')) {
  //       const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  //       return brightness > 150;
  //     }
  //     return false;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(timeoutId);
  //   };
  // }, []);


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
  const about = isEnglish ? 'About us' : 'Про нас'
  const services = isEnglish ? 'Services' : 'Послуги'
  const news = isEnglish ? 'News' : 'Новини'
  const calendar = isEnglish ? 'Calendar' : 'Календар'
  const contact = isEnglish ? 'Contact' : 'Контакти'

  return (
    <TransparentAppBar position="static"
      style={{
        color: isDarkBackground ? '#000010f0' : '#f9f9f9f9',
      }}
    >
      <Toolbar>
        <Hidden mdDown>
          <Logo variant="h6" component="div">
            <Link href='/' >
              <Image src={logo.src} width={130} height={70} style={{ cursor: 'pointer' }}></Image>
            </Link>
          </Logo>

        </Hidden>
        <Hidden mdUp>
          <Logo variant="h6" component="div">
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h2'
                style={{
                  color: 'inherit',
                  textShadow: '1px 1px 2px #000009',
                  cursor: 'pointer'
                }}>CE - Center of Education</Typography>
            </Link>
          </Logo>
          <StyledIconButton
            color="inherit"
            onClick={toggleLanguage}
            style={{ padding: '0 2% 1%', margin: 0, }}
          >
            {languageIcon}
          </StyledIconButton>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit"
            onClick={handleMenuToggle}
            style={{ color: '#a9a9a9', height: '100%' }}>
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('about')}>{about}</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('services')}>{services}</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('news')}>{news}</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('calendar')}>{calendar}</StyledButton>
          </Button>
          <Button color="inherit">
            <StyledButton onClick={() => handleScrollToSection('contact')}>{contact}</StyledButton>
          </Button>
          <StyledIconButton color="inherit"
            onClick={toggleLanguage}>
            {languageIcon}
          </StyledIconButton>
          <StyledIconButton style={{ color: "#4267B2" }} href="https://www.facebook.com">
            <Facebook />
          </StyledIconButton>
          <StyledIconButton style={{ color: "#E1306C" }} href="https://www.instagram.com">
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
                  {about}
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('services')}
                  style={{ color: '#fff' }}>
                  {services}
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('news')}
                  style={{ color: '#fff' }}>
                  {news}
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('calendar')}
                  style={{ color: '#fff' }}>
                  {calendar}
                </StyledButton>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledButton
                  onClick={() => handleScrollToSection('contact')}
                  style={{ color: '#fff' }}>
                  {contact}
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