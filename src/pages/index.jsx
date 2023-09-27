import '@/styles/reset.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { getServerSideProps } from '../ssr'
import responsiveTheme from '@/Theme'
import Header from '@/components/Header'
import HeadingPage from '@/components/HeadingPage'
const About = dynamic(() => import('@/components/About'))
const EducationalAreas = dynamic(() => import('@/components/EducationalAreas'))
const Members = dynamic(() => import('@/components/Members'))
const CallbackForm = dynamic(() => import('@/components/CallbackForm'))
const CalendarContainer = dynamic(() => import('@/components/Calendar'))
const PartnersCarousel = dynamic(() => import('@/components/Partners'))
const ReviewsCarousel = dynamic(() => import('@/components/Reviews'))
const Blog = dynamic(() => import('@/components/Blog'))
const Achiewments = dynamic(() => import('@/components/Achiewments'))
const Centers = dynamic(() => import('@/components/Centers'))
const Footer = dynamic(() => import('@/components/Footer'))
import logo from '@/assets/footter_logo.svg'

const Main = ({
	mainData,
	aboutData,
	areasData,
	centersData,
	reviewsData,
	achiewmentsData,
	blogData,
	preferencesData,
	footerData,
	calendarData,
	membersData,
}) => {
	const router = useRouter()
	const [isEnglish, setIsEnglish] = useState(router.locale === 'en')

	useEffect(() => {
		const savedLocale = localStorage.getItem('locale') || 'uk'
		setIsEnglish(savedLocale === 'en')
		if (router.locale !== savedLocale) {
			router.push(router.pathname, router.asPath, { locale: savedLocale })
		}
	}, [])

	const handleLanguageToggle = () => {
		const newLocale = isEnglish ? 'uk' : 'en'
		localStorage.setItem('locale', newLocale)
		setIsEnglish(!isEnglish)
		router.push(router.pathname, router.asPath, { locale: newLocale })
	}

	useEffect(() => {
		const savedScrollPosition = localStorage.getItem('scrollPosition')
		if (savedScrollPosition) {
			window.scrollTo(0, parseInt(savedScrollPosition, 10))
		}
		const handleScroll = () => {
			localStorage.setItem('scrollPosition', window.scrollY.toString())
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Head>
				<title>ЦЕ — Центри Едукації у Львові</title>
				<meta charSet='utf-8' />
				<meta
					name='google-site-verification'
					content='4_iK96bXwRUrxhy6nAm3gIHhi3yz_JDJ6JBEZke6yV0'
				/>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='description'
					content='Мережа неформального навчання у Львові. Центри Едукації на базі місцевих бібліотек. Безкоштовні та малокоштовні довготривалі навчальні курси. Розвиток Львова як міста, що навчається'
				/>
				<meta
					name='keywords'
					content='Курси Навчання Освіта Львів Центри Едукації Центр Навчання Львівська міська рада Інститут міста Центри едукації Центри зайнястоті безкоштовна освіта безкоштовно розвиток'
				/>
				<meta name='author' content='Центр едукації' />
				<meta property='og:url' content='https://ceducatio.com/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='ЦЕ — Центри Едукації' />
				<meta
					property='og:description'
					content='Мережа неформального навчання у Львові'
				/>
				<meta property='og:image' content={logo.src} />{' '}
				<link rel='canonical' href='http://ceducatio.com/' />
				<link rel='icon' href={logo.src} type='image/x-icon' />
				<link
					rel='alternate'
					type='application/rss+xml'
					title='ЦЕ - Центри Едукації'
					href='https://ceducatio.com/'
				/>
			</Head>

			<ThemeProvider theme={responsiveTheme}>
				<Header
					onLanguageToggle={handleLanguageToggle}
					isEnglish={isEnglish}
					preferences={preferencesData}
					socials={footerData}
				/>
				<HeadingPage
					isEnglish={isEnglish}
					data={mainData}
					preferences={preferencesData}
				/>

				{preferencesData?.attributes?.isShort ? (
					<>
						<About isEnglish={isEnglish} data={aboutData} />
						<Achiewments
							isEnglish={isEnglish}
							data={achiewmentsData}
							preferences={preferencesData}
						/>
						<PartnersCarousel isEnglish={isEnglish} />
						<EducationalAreas isEnglish={isEnglish} data={areasData} />
						<Centers isEnglish={isEnglish} data={centersData} />
					</>
				) : (
					<>
						<Members
							isEnglish={isEnglish}
							data={membersData}
							preferences={preferencesData}
						/>
						<Achiewments
							isEnglish={isEnglish}
							data={achiewmentsData}
							preferences={preferencesData}
						/>
						<About isEnglish={isEnglish} data={aboutData} />
						<PartnersCarousel isEnglish={isEnglish} />
						<EducationalAreas isEnglish={isEnglish} data={areasData} />
						<Centers isEnglish={isEnglish} data={centersData} />
					</>
				)}

				{preferencesData?.attributes?.hideCalendar === false && (
					<CalendarContainer
						isEnglish={isEnglish}
						preferences={preferencesData}
						data={calendarData.attributes}
					/>
				)}
				<Blog isEnglish={isEnglish} data={blogData} />
				<ReviewsCarousel isEnglish={isEnglish} data={reviewsData} />
				<CallbackForm isEnglish={isEnglish} />
				<Footer isEnglish={isEnglish} data={footerData} />
			</ThemeProvider>
		</>
	)
}

export { getServerSideProps }

export default Main
