import Link from 'next/link';
import { Grid, Typography, IconButton, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import background from '@/assets/back_footer.svg';
import Facebook from './UI/Facebook';
import Instagram from './UI/Instagram';
import TikTok from './UI/TikTok';
import Youtube from './UI/Youtube';
import logo from '@/assets/footter_logo.svg';

const Footer = ({ isEnglish }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <footer style={{ background: `url(${background.src})`, height: '100%' }}>
      <Grid container alignItems="center" padding={'60px 20px'}>
        {isMobile ? (
          <Grid container direction="column" alignItems="center">
            <Image src={logo.src} width={80} height={35} />
            <Typography variant="footer_text" align="center" marginBottom={2}>
              {isEnglish ? 'Market Square 1, room. 110. Institute of the City' : "Площа Ринок 1, каб. 110. Інститут міста"}
            </Typography>
            <Grid container justifyContent="center" alignItems="center" style={{ gap: '20px' }}>
              <a href="https://www.facebook.com">
                <Facebook
                  fill={'#fff'}
                  style={{
                    cursor: 'pointer',
                    width: '34px',
                    height: '34px',
                  }}
                />
              </a>
              <a href="https://www.instagram.com">
                <Instagram
                  fill={'#fff'}
                  style={{
                    cursor: 'pointer',
                    width: '34px',
                    height: '34px',
                  }}
                />
              </a>
              <a href="https://www.youtube.com">
                <Youtube
                  fill={'#fff'}
                  style={{
                    cursor: 'pointer',
                    width: '34px',
                    height: '34px',
                  }}
                />
              </a>
              <a href="https://www.tiktok.com">
                <TikTok
                  fill={'#fff'}
                  style={{
                    cursor: 'pointer',
                    width: '34px',
                    height: '34px',
                  }}
                />
              </a>
            </Grid>
            <Typography variant="footer_text" align="center" marginBottom={2} marginTop={3}>
              c.educatio.net@gmail.com
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/offer">Оферта</Link>
            </Typography>
          </Grid>
        ) : (
          <Grid container justifyContent="space-between">
            <Grid item>
              <div>
                <Image src={logo.src} width={80} height={35} />
                <Typography variant="footer_text" align="left" marginBottom={2}>
                  {isEnglish ? 'Market Square 1, room. 110. Institute of the City' : "Площа Ринок 1, каб. 110. Інститут міста"}
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <Typography variant="footer_text" align="center" marginBottom={2} marginTop={3}>
                c.educatio.net@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                <Link href="/offer">Оферта</Link>
              </Typography>
              <Grid container justifyContent="flex-end" alignItems="center" style={{ gap: '20px' }}>
                <a href="https://www.facebook.com">
                  <Facebook
                    fill={'#fff'}
                    style={{
                      cursor: 'pointer',
                      width: '34px',
                      height: '34px',
                    }}
                  />
                </a>
                <a href="https://www.instagram.com">
                  <Instagram
                    fill={'#fff'}
                    style={{
                      cursor: 'pointer',
                      width: '34px',
                      height: '34px',
                    }}
                  />
                </a>
                <a href="https://www.youtube.com">
                  <Youtube
                    fill={'#fff'}
                    style={{
                      cursor: 'pointer',
                      width: '34px',
                      height: '34px',
                    }}
                  />
                </a>
                <a href="https://www.tiktok.com">
                  <TikTok
                    fill={'#fff'}
                    style={{
                      cursor: 'pointer',
                      width: '34px',
                      height: '34px',
                    }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </footer>
  );
};

export default Footer;