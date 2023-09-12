import '@/styles/reset.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/Theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeadingPage from '@/components/HeadingPage'
import About from '@/components/About'
import EducationslAreas from '@/components/EducationalAreas'
import Members from '@/components/Members'
import CallbackForm from '@/components/CallbackForm'
import CalendarContainer from '@/components/Calendar'
import PartnersCarousel from '@/components/Partners'
import ReviewsCarousel from '@/components/Reviews'
import Blog from '@/components/Blog'
import Achiewments from '@/components/Achiewments'
import Head from 'next/head'
import { getServerSideProps } from '../ssr'
import Centers from '@/components/Centers'
import logo from '@/assets/footter_logo.svg'

const Main = ({
	mainData,
	aboutData,
	areasData,
	membersData,
	centersData,
	reviewsData,
	achiewmentsData,
	blogData,
	preferencesData,
	footerData,
}) => {
	const [isEnglish, setIsEnglish] = useState(false)

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')
		if (savedLanguage) {
			setIsEnglish(savedLanguage === 'en')
		}
	}, [])

	const handleLanguageToggle = () => {
		const newLanguage = isEnglish ? 'ua' : 'en'
		localStorage.setItem('language', newLanguage)
		setIsEnglish(!isEnglish)
	}

	return (
		<>
			<Head>
				<title>ЦЕ — Центри Едукації у Львові</title>
				<meta charset='utf-8' />
				<meta
					name='google-site-verification'
					content='m0XG5guu5Fn0f5jy9wLDqsMcjhlPFkIPuOVHXnWiyPw'
				/>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
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

			<ThemeProvider theme={theme}>
				<Header
					onLanguageToggle={handleLanguageToggle}
					isEnglish={isEnglish}
					preferences={preferencesData}
					socials={footerData}
				/>
				<HeadingPage isEnglish={isEnglish} data={mainData} />

				{preferencesData?.attributes.isShort ? (
					<>
						<About isEnglish={isEnglish} data={aboutData} />
						<Achiewments isEnglish={isEnglish} data={achiewmentsData} />
						<PartnersCarousel isEnglish={isEnglish} />
						<EducationslAreas isEnglish={isEnglish} data={areasData} />
						<Centers isEnglish={isEnglish} data={centersData} />
					</>
				) : (
					<>
						<Members
							isEnglish={isEnglish}
							data={membersData}
							preferences={preferencesData}
						/>
						<Achiewments isEnglish={isEnglish} data={achiewmentsData} />
						<About isEnglish={isEnglish} data={aboutData} />
						<PartnersCarousel isEnglish={isEnglish} />
						<EducationslAreas isEnglish={isEnglish} data={areasData} />
						<Centers isEnglish={isEnglish} data={centersData} />
					</>
				)}

				<CalendarContainer
					isEnglish={isEnglish}
					preferences={preferencesData}
				/>
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
