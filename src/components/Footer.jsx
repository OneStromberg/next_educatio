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
  width: 34px;
  height: 34px;
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
    <footer style={{ background: `url(${background.src})`, height: '100%', padding: '3% 8%' }}>
      <Grid container alignItems="center" padding={'60px 0px'} gap={15}>
        {isMobile ? (
          <Grid container direction="column" alignItems="center" gap={3}>
            <Image src={logo.src} width={80} height={35} />
            <Typography variant="footer_text" align="center" marginBottom={2}>
              <ReactMarkdown >{adress}</ReactMarkdown>
            </Typography>
            <Grid container justifyContent="center" alignItems="center" style={{ gap: '20px' }}>
              <a href="https://www.facebook.com">
                <StyledIcon as={Facebook}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.instagram.com">
                <StyledIcon as={Instagram}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.youtube.com">
                <StyledIcon as={Youtube}
                  fill={'#fff'}
                />
              </a>
              <a href="https://www.tiktok.com">
                <StyledIcon as={TikTok}
                  fill={'#fff'}
                />
              </a>
            </Grid>
            <Typography variant="footer_text" align="center" marginBottom={2} marginTop={3}>
              c.educatio.net@gmail.com
            </Typography>
            <Typography variant="footer_subtext" align="center" style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              {isEnglish ? 'All rights reserved' : 'Всі права захищено 2023 ©'}
              <Link href="https://laba.ua/offerta" style={{ color: 'rgba(255, 255, 255, 0.70)', }}>{isEnglish ? 'Offer agreement' : 'Договір оферти'}</Link>
            </Typography>
          </Grid>
        ) : (
          <Grid container justifyContent="space-between">
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <Image src={logo.src} width={80} height={35} />
              <Typography variant="footer_text" align="left" marginBottom={2}>
                <ReactMarkdown>{adress}</ReactMarkdown>
              </Typography>
            </Grid>
            <Grid item alignSelf={'center'} justifySelf={'center'}>
              <Typography variant="footer_text" align="center" marginBottom={2} marginTop={3}>
                c.educatio.net@gmail.com
              </Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: 45, alignItems: 'flex-end' }}>
              <Typography variant="footer_subtext" align="center" style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                {isEnglish ? 'All rights reserved' : 'Всі права захищено 2023 ©'}
                <Link href="https://laba.ua/offerta" style={{ color: 'rgba(255, 255, 255, 0.70)', }}>{isEnglish ? 'Offer agreement' : 'Договір оферти'}</Link>
              </Typography>
              <Grid container justifyContent="flex-end" alignItems="center" style={{ gap: '20px' }}>
                <a href="https://www.facebook.com"
                  onMouseEnter={() => setHovered('Facebook')}
                  onMouseLeave={() => setHovered(null)}>
                  <StyledIcon as={Facebook}
                    fill={isHovered === 'Facebook' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="https://www.instagram.com"
                  onMouseEnter={() => setHovered('Instagram')}
                  onMouseLeave={() => setHovered(null)}>
                  <StyledIcon as={Instagram}
                    fill={isHovered === 'Instagram' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="https://www.youtube.com"
                  onMouseEnter={() => setHovered('Youtube')}
                  onMouseLeave={() => setHovered(null)}>
                  <StyledIcon as={Youtube}
                    fill={isHovered === 'Youtube' ? '#FFC4B7' : '#fff'}
                  />
                </a>
                <a href="https://www.tiktok.com"
                  onMouseEnter={() => setHovered('Tiktok')}
                  onMouseLeave={() => setHovered(null)}>
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