import Link from 'next/link';
import { useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import background from '@/assets/back_footer.svg';
import Facebook from './UI/Facebook';
import Instagram from './UI/Instagram';
import TikTok from './UI/TikTok';
import Youtube from './UI/Youtube';
import logo from '@/assets/footter_logo.svg';


const StyledIcon = styled('svg')`
  cursor: pointer;
  transition: .3s;
`;



const Footer = ({ isEnglish }) => {

  const adress = isEnglish ?
    `Education Centers Network \n
    Ukraine, Lviv, \n
Market Sq. 1, room 110`
    :
    `Мережа Центрів Едукації\n
    Україна, Львів,\nПл. Ринок 1, 110 каб
    `;

  const isMobile = useMediaQuery('(max-width: 600px)');
  const [isHovered, setHovered] = useState(null)

  return (
    <footer style={{ background: `url(${background.src})`, height: '100%', padding: '3% 8% 0 8%', zIndex: 2 }}>
      <Grid container alignItems="center" padding={'60px 0px'} gap={15}>
        {isMobile ? (
          <Grid container direction="column" alignItems="start" gap={3}>
            <Image src={logo.src} alt='logo' width={80} height={35} />
            <Typography variant="footer_text" align="start" marginBottom={2}>
              <ReactMarkdown >{adress}</ReactMarkdown>
            </Typography>
            <Grid container justifyContent="start" alignItems="center" style={{ gap: 45 }}>
              <a href="https://www.facebook.com"
                style={{ height: 34, width: 34 }}>
                <StyledIcon as={Facebook}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.instagram.com"
                style={{ height: 34, width: 34 }}>
                <StyledIcon as={Instagram}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.youtube.com"
                style={{ height: 34, width: 34 }}>
                <StyledIcon as={Youtube}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.tiktok.com"
                style={{ height: 34, width: 34 }}>
                <StyledIcon as={TikTok}
                  fill={'#fff'}
                />
              </a>
            </Grid>
            <Typography variant="footer_text" align="start" marginBottom={2} marginTop={3} style={{ textDecoration: 'underline' }}>
              c.educatio.net@gmail.com
            </Typography>
            <Typography variant="footer_subtext" align="start" style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              {isEnglish ? 'All rights reserved' : 'Всі права захищено 2023 ©'}
              <Link href="https://laba.ua/offerta" style={{ color: 'rgba(255, 255, 255, 0.70)', }}>{isEnglish ? 'Offer agreement' : 'Договір оферти'}</Link>
            </Typography>
          </Grid>
        ) : (
          <Grid container justifyContent="space-between" alignItems={'center'}>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: 45 }}>
              <Image src={logo.src} alt='logo' width={80} height={35} />
              <Typography variant="footer_text" align="left" marginBottom={2}>
                <ReactMarkdown>{adress}</ReactMarkdown>
              </Typography>
            </Grid>
            <Grid item height={'100%'} alignSelf={'flex-end'} justifySelf={'center'} paddingBottom={2}>
              <Typography variant="footer_text" align="center" marginBottom={2} marginTop={3} style={{ textDecoration: 'underline' }}>
                c.educatio.net@gmail.com
              </Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: 45, alignItems: 'flex-end' }}>
              <Typography variant="footer_subtext" align="end" style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                {isEnglish ? 'All rights reserved' : 'Всі права захищено 2023 ©'}
                <Link href="https://laba.ua/offerta" style={{ color: 'rgba(255, 255, 255, 0.70)', }}>{isEnglish ? 'Offer agreement' : 'Договір оферти'}</Link>
              </Typography>
              <Grid container justifyContent="flex-end" alignItems="center" style={{ gap: 30 }}>
                <a href="https://www.facebook.com/C.Educatio"
                  onMouseEnter={() => setHovered('Facebook')}
                  onMouseLeave={() => setHovered(null)}
                  style={{ height: 34, width: 34 }}>
                  <StyledIcon as={Facebook}
                    fill={isHovered === 'Facebook' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="ttps://www.instagram.com/c.educatio.lviv/"
                  onMouseEnter={() => setHovered('Instagram')}
                  onMouseLeave={() => setHovered(null)}
                  style={{ height: 34, width: 34 }}>
                  <StyledIcon as={Instagram}
                    fill={isHovered === 'Instagram' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="https://www.youtube.com/@c.educatio"
                  onMouseEnter={() => setHovered('Youtube')}
                  onMouseLeave={() => setHovered(null)}
                  style={{ height: 34, width: 34 }}>
                  <StyledIcon as={Youtube}
                    fill={isHovered === 'Youtube' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="https://tiktok.com/@c.educatio"
                  onMouseEnter={() => setHovered('Tiktok')}
                  onMouseLeave={() => setHovered(null)}
                  style={{ height: 34, width: 34 }}>
                  <StyledIcon as={TikTok}
                    fill={isHovered === 'Tiktok' ? '#FFC4B7' : '#fff'}
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