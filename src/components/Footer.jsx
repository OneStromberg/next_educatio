import Link from 'next/link'
import { useState } from 'react'
import { Container, Grid, Typography, useMediaQuery } from '@mui/material'
import styled from '@emotion/styled'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import background from '@/assets/back_footer.svg'
import Facebook from './UI/Facebook'
import Instagram from './UI/Instagram'
import TikTok from './UI/TikTok'
import Youtube from './UI/Youtube'
import logo from '@/assets/footter_logo.svg'

const StyledIcon = styled('svg')`
	cursor: pointer;
	transition: 0.3s;
`

const Footer = ({ isEnglish, data }) => {
	const isMobile = useMediaQuery('(max-width: 600px)')
	const [isHovered, setHovered] = useState(null)
	const adress = data?.attributes?.adress

	return (
		<footer
			style={{
				background: `url(${background.src})`,
				height: '100%',
				padding: isMobile ? '15% 8% 5%' : '4.3% 8%',
				zIndex: 2,
				border: 'none',
			}}
		>
			<Container style={{ alignItems: 'center', gap: 15 }}>
				{isMobile ? (
					<Grid container direction='column' alignItems='start' gap={3}>
						<Image src={logo.src} alt='logo' width={80} height={35} />
						<Typography variant='footer_text' align='left' marginBottom={2}>
							{adress ? <ReactMarkdown>{adress}</ReactMarkdown> : <></>}
						</Typography>
						<Grid
							container
							justifyContent='start'
							alignItems='center'
							style={{ gap: '12%', flexWrap: 'nowrap' }}
						>
							<a
								href={data?.attributes?.facebook_link}
								style={{ height: 34, width: 34 }}
							>
								<StyledIcon as={Facebook} fill={'#fff'} />
							</a>
							<a
								href={data?.attributes?.instagram_link}
								style={{ height: 34, width: 34 }}
							>
								<StyledIcon as={Instagram} fill={'#fff'} />
							</a>
							<a
								href={data?.attributes?.youtube_link}
								style={{ height: 34, width: 34 }}
							>
								<StyledIcon as={Youtube} fill={'#fff'} />
							</a>
							<a
								href={data?.attributes?.tiktok_link}
								style={{ height: 34, width: 34 }}
							>
								<StyledIcon as={TikTok} fill={'#fff'} />
							</a>
						</Grid>
						<Typography
							variant='footer_text'
							align='left'
							marginBottom={2}
							marginTop={3}
							style={{ textDecoration: 'underline' }}
						>
							{data?.attributes?.email}
						</Typography>
						<Typography
							variant='footer_subtext'
							align='left'
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							{isEnglish ? 'All rights reserved' : 'Всі права захищено 2023 ©'}
							<Link
								href={data?.attributes?.oferta_link}
								style={{ color: 'rgba(255, 255, 255, 0.70)' }}
							>
								{isEnglish ? 'Offer agreement' : 'Договір оферти'}
							</Link>
						</Typography>
					</Grid>
				) : (
					<Grid container justifyContent='space-between' alignItems={'center'}>
						<Grid
							item
							style={{ display: 'flex', flexDirection: 'column', gap: 45 }}
						>
							<Image src={logo.src} alt='logo' width={80} height={35} />
							<Typography variant='footer_text' align='left' marginBottom={2}>
								{adress ? <ReactMarkdown>{adress}</ReactMarkdown> : <></>}
							</Typography>
						</Grid>
						<Grid
							item
							height={'100%'}
							alignSelf={'flex-end'}
							justifySelf={'center'}
							paddingBottom={2}
						>
							<Typography
								variant='footer_text'
								align='center'
								marginBottom={2}
								marginTop={3}
								style={{ textDecoration: 'underline' }}
							>
								{data?.attributes?.email}
							</Typography>
						</Grid>
						<Grid
							item
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 45,
								alignItems: 'flex-end',
							}}
						>
							<Typography
								variant='footer_subtext'
								style={{
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								{isEnglish
									? 'All rights reserved'
									: 'Всі права захищено 2023 ©'}
								<Link
									href={data?.attributes?.oferta_link}
									style={{ color: 'rgba(255, 255, 255, 0.70)' }}
								>
									{isEnglish ? 'Offer agreement' : 'Договір оферти'}
								</Link>
							</Typography>
							<Grid
								container
								justifyContent='flex-end'
								alignItems='center'
								style={{ gap: 30 }}
							>
								<a
									href={data?.attributes?.facebook_link}
									onMouseEnter={() => setHovered('Facebook')}
									onMouseLeave={() => setHovered(null)}
									style={{ height: 34, width: 34 }}
								>
									<StyledIcon
										as={Facebook}
										fill={isHovered === 'Facebook' ? '#FFC4B7' : '#fff'}
									/>
								</a>
								<a
									href={data?.attributes?.instagram_link}
									onMouseEnter={() => setHovered('Instagram')}
									onMouseLeave={() => setHovered(null)}
									style={{ height: 34, width: 34 }}
								>
									<StyledIcon
										as={Instagram}
										fill={isHovered === 'Instagram' ? '#FFC4B7' : '#fff'}
									/>
								</a>
								<a
									href={data?.attributes?.youtube_link}
									onMouseEnter={() => setHovered('Youtube')}
									onMouseLeave={() => setHovered(null)}
									style={{ height: 34, width: 34 }}
								>
									<StyledIcon
										as={Youtube}
										fill={isHovered === 'Youtube' ? '#FFC4B7' : '#fff'}
									/>
								</a>
								<a
									href={data?.attributes?.tiktok_link}
									onMouseEnter={() => setHovered('Tiktok')}
									onMouseLeave={() => setHovered(null)}
									style={{ height: 34, width: 34 }}
								>
									<StyledIcon
										as={TikTok}
										fill={isHovered === 'Tiktok' ? '#FFC4B7' : '#fff'}
									/>
								</a>
							</Grid>
						</Grid>
					</Grid>
				)}
			</Container>
		</footer>
	)
}

export default Footer
