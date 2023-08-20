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
  Divider,
  Grid,
  useMediaQuery
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Menu, Close } from '@mui/icons-material';
import { styled } from '@mui/system';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from './UI/Facebook';
import Instagram from './UI/Instagram';
import TikTok from './UI/TikTok';
import Youtube from './UI/Youtube';

const TransparentAppBar = styled(AppBar)`
  background-color: #fff;
  height: 70px;
  border-radius: 0 0 18px 18px;
  box-shadow: none;
  position: fixed;
  justify-content: center;
  z-index: 5;
  transition: 0.3s;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  color: #afabb8;
  text-decoration: none;
  margin-right: 10px;
  transition: .3s;
  &:hover{
    color: #1F1F71
    background: none;
  }
`;

const Logo = styled(Typography)`
  flex-grow: 1;
  color: #afabb8;
`;

const SocialWrapper = styled('div')`
  display: flex;
  width: 30%;
  gap: 30px; 
  align-items: center;
  justify-content: center; 
`;

const StyledIcon = styled('svg')`
  cursor: pointer;
  width: 22.7px;
  height: 22.7px;
  transition: .3s;
  &:hover{
    color: #FFC4B7;
  }
`;

const MobileHeader = ({ languageIcon, toggleLanguage, handleMenuToggle, isMenuOpen }) => (
  <>
    <Hidden mdUp>
      <Logo variant="h6" component="div">
        <Link href="/">
          <Image src={logo.src} alt='logo' width={80} height={35} style={{ cursor: 'pointer' }}></Image>
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
        {isMenuOpen ? <Close size={'30px'} /> : <Menu size={'30px'} />}
      </IconButton>
    </Hidden>
  </>
);

const DesktopHeader = ({
  languageIcon,
  toggleLanguage,
  handleMenuToggle,
  isMenuOpen,
  setHovered,
  isHovered }) => (
  <>
    <Hidden mdDown style={{ display: 'flex', gap: '5%', alignItems: 'center' }}>
      <Logo variant="h6" component="div">
        <Link href="/" style={{ margin: 0, width: '10%' }}>
          <Image src={logo.src} width={80} height={35} style={{ cursor: 'pointer', marginLeft: 40 }}></Image>
        </Link>
      </Logo>
      <div style={{ display: 'flex', width: '70%', gap: '5%', alignItems: 'center', justifyContent: 'flex-end' }}>
        <StyledButton onClick={toggleLanguage}>{languageIcon}</StyledButton>
        <SocialWrapper>
          <a href="https://www.facebook.com">
            <StyledIcon as={Facebook}
              fill={'#AFABB8'}
            />
          </a>
          <a href="https://www.instagram.com">
            <StyledIcon as={Instagram}
              fill={'#AFABB8'}
            />
          </a>
          <a href="https://www.youtube.com">
            <StyledIcon as={Youtube}
              fill={'#AFABB8'}
            />
          </a>
          <a href="https://www.tiktok.com">
            <StyledIcon as={TikTok}
              fill={'#AFABB8'}
            />
          </a>
          <IconButton
            color="inherit"
            onClick={handleMenuToggle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ color: isHovered ? '#1F1F71' : '#a9a9a9', height: '100%', marginLeft: 'auto' }}
          >
            {isMenuOpen ? <Close style={{ fontSize: '2.2rem' }} /> : <Menu style={{ fontSize: '2.2rem' }} />}
          </IconButton>
        </SocialWrapper>
      </div>
    </Hidden>
  </>
);

const MenuDrawer = ({ isMenuOpen, handleMenuToggle, handleScrollToSection, about, services, news, calendar, contact, adress }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Drawer
      anchor="top"
      style={{
        display: 'flex',
        zIndex: 4, top: '70px',
        height: 'fit-content',
        boxShadow: 'none',
        justifyContent: 'center',
      }}
      open={isMenuOpen}
      onClose={handleMenuToggle}
      PaperProps={{
        sx: {
          background: '#fff',
          display: 'flex',
          borderRadius: '0 0 18px 18px',
          position: 'static',
          zIndex: 4,
          boxShadow: 'none',
        },
      }}
      BackdropProps={{ invisible: true }}
    >
      <List style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        flex: '1',
        padding: isMobile ? '0' : '0 8%',
        width: '100vw',
      }}>
        <ListItem button style={{ justifyContent: isMobile ? 'start' : 'center' }}>
          <StyledButton onClick={() => handleScrollToSection('about')}>
            {about}
          </StyledButton>
        </ListItem>
        <ListItem button style={{ justifyContent: isMobile ? 'start' : 'center' }}>
          <StyledButton onClick={() => handleScrollToSection('services')}>
            {services}
          </StyledButton>
        </ListItem>
        <ListItem button style={{ justifyContent: isMobile ? 'start' : 'center' }}>
          <StyledButton onClick={() => handleScrollToSection('news')}>
            {news}
          </StyledButton>
        </ListItem>
        <ListItem button style={{ justifyContent: isMobile ? 'start' : 'center' }}>
          <StyledButton onClick={() => handleScrollToSection('calendar')}>
            {calendar}
          </StyledButton>
        </ListItem>
        <ListItem button style={{ justifyContent: isMobile ? 'start' : 'center' }}>
          <StyledButton onClick={() => handleScrollToSection('contact')}>
            {contact}
          </StyledButton>
        </ListItem>
      </List>
      <Divider style={{ margin: '10px auto', width: isMobile ? '80%' : '90%' }} />
      <Grid container direction="column" alignItems="center" style={{ paddingBottom: '2%' }}>
        {isMobile && <div style={{ display: 'flex', gap: 45, padding: '50px 0' }}>
          <a style={{ color: '#AFABB8' }} href="https://www.facebook.com">
            <Facebook
              fill={'#AFABB8'}
              style={{
                cursor: 'pointer',
                width: '22.7px',
                height: '22.7px',
              }}
            />
          </a>
          <a style={{ color: '#AFABB8' }} href="https://www.instagram.com">
            <Instagram
              fill={'#AFABB8'}
              style={{
                cursor: 'pointer',
                width: '22.7px',
                height: '22.7px',
              }}
            />
          </a>
          <a style={{ color: '#AFABB8' }} href="https://www.youtube.com">
            <Youtube
              fill={'#AFABB8'}
              style={{
                cursor: 'pointer',
                width: '22.7px',
                height: '22.7px',
              }}
            />
          </a>
          <a style={{ color: '#AFABB8' }} href="https://www.tiktok.com">
            <TikTok
              fill={'#AFABB8'}
              style={{
                cursor: 'pointer',
                width: '22.7px',
                height: '22.7px',
              }}
            />
          </a>
        </div>}
        {isMobile ? <Grid container justifyContent="space-between" style={{
          padding: '2% 10% 4% 10%',
        }}>
          <Typography variant="header_subtext" style={{ textDecoration: 'underline' }}>
            info@ceducatio.com
          </Typography>
          <Typography variant="header_subtext">
            <ReactMarkdown children={adress} />
          </Typography>
        </Grid> :
          <Grid container justifyContent="space-between" style={{
            padding: '2% 10% 4% 10%',
          }}>
            <Typography variant="header_subtext">
              <ReactMarkdown children={adress} />
            </Typography>
            <Typography variant="header_subtext" style={{ textDecoration: 'underline' }}>
              info@ceducatio.com
            </Typography>
          </Grid>
        }
      </Grid>
    </Drawer >
  )
};

const Header = ({ onLanguageToggle, isEnglish }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

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

  const adress = isEnglish ?
    `Ukraine, Lviv, \n
  Market Sq. 1, room 110`
    :
    `Україна, Львів, \n
  Пл. Ринок 1, 110 каб`;

  return (
    <>
      <TransparentAppBar
        position="fixed"
        style={{ borderRadius: isMenuOpen ? '0' : '0px 0px 18px 18px', }}
      >
        <Toolbar>
          <DesktopHeader
            languageIcon={languageIcon}
            toggleLanguage={toggleLanguage}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
            setHovered={setHovered}
            isHovered={isHovered}
          />
          <MobileHeader
            languageIcon={languageIcon}
            toggleLanguage={toggleLanguage}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
          />
        </Toolbar>
      </TransparentAppBar>
      <MenuDrawer
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleScrollToSection={handleScrollToSection}
        about={about}
        services={services}
        news={news}
        calendar={calendar}
        contact={contact}
        adress={adress}
      />
    </>
  );
};

export default Header;
