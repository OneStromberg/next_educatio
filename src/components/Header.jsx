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
import { Facebook, Instagram, Tiktok, Menu, Close } from '@mui/icons-material';
import { styled } from '@mui/system';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const TransparentAppBar = styled(AppBar)`
  background-color: #fff;
  height: 70px;
  border-radius: 0 0 18px 18px;
  box-shadow: none;
  position: fixed;
  z-index: 5;
  transition: 0.3s;
`;

const drawerStyles = {
  background: '#fff',
};

const StyledButton = styled(Button)`
  cursor: pointer;
  color: #afabb8;
  text-decoration: none;
  margin-right: 10px;
`;

const Logo = styled(Typography)`
  flex-grow: 1;
  color: #afabb8;
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

  const toggleLanguage = () => {
    onLanguageToggle();
    const newLanguage = isEnglish ? 'en' : 'ua';
    document.cookie = `language=${newLanguage}; path=/`;
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

  const languageIcon = isEnglish ? 'ENG' : 'UA';
  const about = isEnglish ? 'About us' : 'Про нас';
  const services = isEnglish ? 'Services' : 'Послуги';
  const news = isEnglish ? 'News' : 'Новини';
  const calendar = isEnglish ? 'Calendar' : 'Календар';
  const contact = isEnglish ? 'Contact' : 'Контакти';

  return (
    <>
      <TransparentAppBar
        position="static"
        style={{
          color: isDarkBackground ? '#000010f0' : '#f9f9f9f9',
        }}
      >
        <Toolbar>
          <Hidden mdDown>
            <Logo variant="h6" component="div">
              <Link href="/">
                <Image
                  src={logo.src}
                  width={130}
                  height={70}
                  style={{ cursor: 'pointer' }}
                ></Image>
              </Link>
            </Logo>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StyledButton onClick={toggleLanguage}>{languageIcon}</StyledButton>
              <Typography style={{ color: '#AFABB8' }} href="https://www.facebook.com">
                <Facebook />
              </Typography>
              <Typography style={{ color: '#AFABB8' }} href="https://www.instagram.com">
                <Instagram />
              </Typography>
            </div>
            <IconButton
              color="inherit"
              onClick={handleMenuToggle}
              style={{ color: '#a9a9a9', height: '100%', marginLeft: 'auto' }}
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Logo variant="h6" component="div">
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Typography
                  variant="header_text"
                  style={{
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  CE - Center of Education
                </Typography>
              </Link>
            </Logo>
            <Typography variant="header_text" onClick={toggleLanguage}>
              {languageIcon}
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleMenuToggle}
              style={{ color: '#a9a9a9', height: '100%', marginLeft: 'auto' }}
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </IconButton>
          </Hidden>
          <Drawer
            anchor="top"
            open={isMenuOpen}
            onClose={handleMenuToggle}
            PaperProps={{
              sx: drawerStyles,
            }}
          >
            <TransparentAppBar style={{ height: 'auto' }}>
              <Toolbar>
                <Hidden mdDown>
                  <Logo variant="h6" component="div">
                    <Link href="/">
                      <Image
                        src={logo.src}
                        width={130}
                        height={70}
                        style={{ cursor: 'pointer' }}
                      ></Image>
                    </Link>
                  </Logo>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledButton onClick={toggleLanguage}>{languageIcon}</StyledButton>
                    <Typography style={{ color: '#AFABB8' }} href="https://www.facebook.com">
                      <Facebook />
                    </Typography>
                    <Typography style={{ color: '#AFABB8' }} href="https://www.instagram.com">
                      <Instagram />
                    </Typography>
                  </div>
                  <IconButton
                    color="inherit"
                    onClick={handleMenuToggle}
                    style={{ color: '#a9a9a9', height: '100%', marginLeft: 'auto' }}
                  >
                    {isMenuOpen ? <Close /> : <Menu />}
                  </IconButton>
                </Hidden>
                <Hidden mdUp>
                  <Logo variant="h6" component="div">
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <Typography
                        variant="header_text"
                        style={{
                          color: 'inherit',
                          cursor: 'pointer',
                        }}
                      >
                        CE - Center of Education
                      </Typography>
                    </Link>
                  </Logo>
                  <Typography variant="header_text" onClick={toggleLanguage}>
                    {languageIcon}
                  </Typography>
                  <IconButton
                    color="inherit"
                    onClick={handleMenuToggle}
                    style={{ color: '#a9a9a9', height: '100%', marginLeft: 'auto' }}
                  >
                    {isMenuOpen ? <Close /> : <Menu />}
                  </IconButton>
                </Hidden>

              </Toolbar>
              <List style={{
                display: 'flex',
                borderRadius: '0 0 18px 18px',
                textAlign: 'center'
              }}>
                <ListItem button style={{ justifyContent: 'center' }}>
                  <StyledButton onClick={() => handleScrollToSection('about')}>
                    {about}
                  </StyledButton>
                </ListItem>
                <ListItem button style={{ justifyContent: 'center' }}>
                  <StyledButton onClick={() => handleScrollToSection('services')}>
                    {services}
                  </StyledButton>
                </ListItem>
                <ListItem button style={{ justifyContent: 'center' }}>
                  <StyledButton onClick={() => handleScrollToSection('news')}>
                    {news}
                  </StyledButton>
                </ListItem>
                <ListItem button style={{ justifyContent: 'center' }}>
                  <StyledButton onClick={() => handleScrollToSection('calendar')}>
                    {calendar}
                  </StyledButton>
                </ListItem>
                <ListItem button style={{ justifyContent: 'center' }}>
                  <StyledButton onClick={() => handleScrollToSection('contact')}>
                    {contact}
                  </StyledButton>
                </ListItem>
              </List>
            </TransparentAppBar>
          </Drawer>
        </Toolbar>
      </TransparentAppBar>
    </>
  );
};

export default Header;