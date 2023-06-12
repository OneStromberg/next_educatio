"use client";
import { useState } from 'react';
import Link from 'next/link';
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
import { Language, Facebook, Instagram, Menu } from '@mui/icons-material';
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <TransparentAppBar position="static">
      <Toolbar>
        <Logo variant="h6" component="div">
          My Website
        </Logo>
        <Hidden mdUp> {/* Добавлено */}
          <IconButton color="inherit" onClick={handleMenuToggle}>
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden smDown> {/* Добавлено */}
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
        </Hidden>
        <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuToggle}>
          <List>
            <ListItem button>
              <ListItemText>
                <StyledLink href="/about">About Us</StyledLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledLink href="/services">Services</StyledLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledLink href="/news">News</StyledLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledLink href="/calendar">Calendar</StyledLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <StyledLink href="/contact">Contact</StyledLink>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Header;