import Link from 'next/link';
import { Grid, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import background from '@/assets/back_footer.svg';
import Facebook from './UI/Facebook';
import Instagram from './UI/Instagram';
import TikTok from './UI/TikTok';
import Youtube from './UI/Youtube';
import logo from '@/assets/footter_logo.svg';

const Footer = ({ isEnglish }) => {
  return (
    <footer style={{ background: `url(${background.src})`, height: '100%' }}>
      <Grid container alignItems="center" padding={'60px 20px'}>
        <Grid item style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div>
            <Image src={logo.src} width={80} height={35} />
            <Typography
              variant="footer_text"
              align="center"
              marginBottom={2}>
              {isEnglish ? 'Market Square 1, room. 110. Institute of the City' : "Площа Ринок 1, каб. 110. Інститут міста"}
            </Typography>
          </div>

          <Typography
            variant="footer_text"
            align="center"
            marginBottom={2}
            marginTop={3}
            style={{ textDecoration: 'underline' }}>
            c.educatio.net@gmail.com
          </Typography>

          <Grid container justifyContent="center" alignItems="center" style={{ gap: '50px' }}>
            <a href="https://www.facebook.com">
              <Facebook
                fill={'#fff'}
                width={34}
                height={34}
              />
            </a>
            <a href="https://www.instagram.com">
              <Instagram
                fill={'#fff'}
                width={34}
                height={34}
              />
            </a>
            <a href="https://www.youtube.com">
              <Youtube
                fill={'#fff'}
                width={34}
                height={34}
              />
            </a>
            <a href="https://www.tiktok.com">
              <TikTok
                fill={'#fff'}
                width={34}
                height={34}
              />
            </a>
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
