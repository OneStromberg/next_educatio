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
  Hidden,
} from '@mui/material';
import { Facebook, Instagram, Menu, Close } from '@mui/icons-material';
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


const MobileHeader = ({ languageIcon, toggleLanguage, handleMenuToggle, isMenuOpen }) => (
  <>
    <Hidden mdUp>
      <Logo variant="h6" component="div">
        <Link href="/">
          <Image src={logo.src} width={130} height={70} style={{ cursor: 'pointer' }}></Image>
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
  </>
);

const DesktopHeader = ({ languageIcon, toggleLanguage, handleMenuToggle, isMenuOpen }) => (
  <>
    <Hidden mdDown>
      <Logo variant="h6" component="div">
        <Link href="/">
          <Image src={logo.src} width={130} height={70} style={{ cursor: 'pointer' }}></Image>
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
        <IconButton
          color="inherit"
          onClick={handleMenuToggle}
          style={{ color: '#a9a9a9', height: '100%', marginLeft: 'auto' }}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </IconButton>
      </div>
    </Hidden>
  </>
);

const MobileDrawer = ({ isMenuOpen, handleMenuToggle, handleScrollToSection, about, services, news, calendar, contact }) => (
  <Drawer
    anchor="top"
    style={{
      display: 'flex',
      zIndex: 4, top: '60px',
      height: 'fit-content',
    }}
    open={isMenuOpen}
    onClose={handleMenuToggle}
    PaperProps={{
      sx: {
        background: '#fff',
        display: 'flex',
        flex: '1',
        borderRadius: '0 0 18px 18px',
        textAlign: 'center',
        position: 'static',
        zIndex: 4,
      },
    }}
    BackdropProps={{ invisible: true }}
  >
    <List style={{ flex: '1' }}>
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
  </Drawer>
);

const Header = ({ onLanguageToggle, isEnglish }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        position="fixed"
      >
        <Toolbar>
          <DesktopHeader
            languageIcon={languageIcon}
            toggleLanguage={toggleLanguage}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
          />
          <MobileHeader
            languageIcon={languageIcon}
            toggleLanguage={toggleLanguage}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
          />
        </Toolbar>
      </TransparentAppBar>
      <MobileDrawer
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleScrollToSection={handleScrollToSection}
        about={about}
        services={services}
        news={news}
        calendar={calendar}
        contact={contact}
      />
    </>
  );
};

export default Header;
