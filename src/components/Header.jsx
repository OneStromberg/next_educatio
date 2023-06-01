import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Language, Facebook, Instagram } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit">
          <Link href="/about">About Us</Link>
        </Button>
        <Button color="inherit">
          <Link href="/services">Services</Link>
        </Button>
        <Button color="inherit">
          <Link href="/news">News</Link>
        </Button>
        <Button color="inherit">
          <Link href="/calendar">Calendar</Link>
        </Button>
        <Button color="inherit">
          <Link href="/contact">Contact</Link>
        </Button>
        <IconButton color="inherit">
          <Language />
        </IconButton>
        <IconButton color="inherit" href="https://www.facebook.com">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://www.instagram.com">
          <Instagram />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


export default Header;