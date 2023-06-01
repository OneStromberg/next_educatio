import Link from 'next/link';
import { Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" align="center">
            Контакты: example@example.com | +123456789
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justifyContent="center" alignItems="center">
            <IconButton color="inherit" href="https://www.facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            <Link href="/offer">Оферта</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
