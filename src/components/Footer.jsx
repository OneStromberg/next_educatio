import Link from 'next/link';
import { Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = ({ isEnglish }) => {
  return (
    <footer style={{ background: '#ededed' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            align="center"
            marginBottom={2}
            marginTop={3}>
            c.educatio.net@gmail.com
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            marginBottom={2}>
            {isEnglish ? 'Market Square 1, room. 110. Institute of the City' : "Площа Ринок 1, каб. 110. Інститут міста"}
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            <IconButton color="inherit" href="https://www.facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com">
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              <Link href="/offer"
                style={{
                  textDecoration: 'none',
                  color: '#666666'
                }}>Оферта</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer >
  );
};

export default Footer;
