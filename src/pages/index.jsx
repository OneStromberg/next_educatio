import '@/styles/reset.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import responsiveTheme from '@/Theme'
import Header from '@/components/Header'
const DynamicFooter = dynamic(() => import('@/components/Footer'))
const DynamicHeadingPage = dynamic(() => import('@/components/HeadingPage'))
const DynamicAbout = dynamic(() => import('@/components/About'))
const DynamicEducationalAreas = dynamic(() =>
	import('@/components/EducationalAreas')
)
const DynamicMembers = dynamic(() => import('@/components/Members'))
const DynamicCallbackForm = dynamic(() => import('@/components/CallbackForm'))
const DynamicCalendarContainer = dynamic(() => import('@/components/Calendar'))
const DynamicPartnersCarousel = dynamic(() => import('@/components/Partners'))
const DynamicReviewsCarousel = dynamic(() => import('@/components/Reviews'))
const DynamicBlog = dynamic(() => import('@/components/Blog'))
const DynamicAchiewments = dynamic(() => import('@/components/Achiewments'))
const DynamicCenters = dynamic(() => import('@/components/Centers'))
import Head from 'next/head'
import { getServerSideProps } from '../ssr'
import logo from '@/assets/footter_logo.svg'

const Main = ({
	locale,
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
	const router = useRouter()
	const [isEnglish, setIsEnglish] = useState(router.locale === 'en')

	useEffect(() => {
		const savedLocale = localStorage.getItem('locale')
		if (savedLocale) {
			setIsEnglish(savedLocale === 'en')
			router.push(router.pathname, router.asPath, { locale: savedLocale })
		}
	}, [router.locale])

	const handleLanguageToggle = () => {
		const newLocale = isEnglish ? 'uk-UA' : 'en'
		localStorage.setItem('locale', newLocale)
		router.push(router.pathname, router.asPath, { locale: newLocale })
	}
	return (
		<>
			<Head>
				<title>ЦЕ — Центри Едукації у Львові</title>
				<meta charSet='utf-8' />
				<meta
					name='google-site-verification'
					content='m0XG5guu5Fn0f5jy9wLDqsMcjhlPFkIPuOVHXnWiyPw'
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
				<DynamicHeadingPage
					isEnglish={isEnglish}
					data={mainData}
					preferences={preferencesData}
				/>

				{preferencesData?.attributes?.isShort ? (
					<>
						<DynamicAbout isEnglish={isEnglish} data={aboutData} />
						<DynamicAchiewments
							isEnglish={isEnglish}
							data={achiewmentsData}
							preferences={preferencesData}
						/>
						<DynamicPartnersCarousel isEnglish={isEnglish} />
						<DynamicEducationalAreas isEnglish={isEnglish} data={areasData} />
						<DynamicCenters isEnglish={isEnglish} data={centersData} />
					</>
				) : (
					<>
						<DynamicMembers
							isEnglish={isEnglish}
							data={membersData}
							preferences={preferencesData}
						/>
						<DynamicAchiewments
							isEnglish={isEnglish}
							data={achiewmentsData}
							preferences={preferencesData}
						/>
						<DynamicAbout isEnglish={isEnglish} data={aboutData} />
						<DynamicPartnersCarousel isEnglish={isEnglish} />
						<DynamicEducationalAreas isEnglish={isEnglish} data={areasData} />
						<DynamicCenters isEnglish={isEnglish} data={centersData} />
					</>
				)}

				<DynamicCalendarContainer
					isEnglish={isEnglish}
					preferences={preferencesData}
				/>
				<DynamicBlog isEnglish={isEnglish} data={blogData} />
				<DynamicReviewsCarousel isEnglish={isEnglish} data={reviewsData} />
				<DynamicCallbackForm isEnglish={isEnglish} />
				<DynamicFooter isEnglish={isEnglish} data={footerData} />
			</ThemeProvider>
		</>
	)
}

export { getServerSideProps }

export default Main
