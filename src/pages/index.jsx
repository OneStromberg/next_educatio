import '@/styles/reset.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { getServerSideProps } from '../ssr'
import responsiveTheme from '@/Theme'
import React, { Suspense } from 'react'

import AnimatedLoader from '@/components/UI/AnimatedLoader'
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
				<HeadingPage
					isEnglish={isEnglish}
					data={mainData}
					preferences={preferencesData}
				/>

				{preferencesData?.attributes?.isShort ? (
					<>
						<Suspense fallback={<AnimatedLoader />}>
							<About isEnglish={isEnglish} data={aboutData} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<Achiewments
								isEnglish={isEnglish}
								data={achiewmentsData}
								preferences={preferencesData}
							/>
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<PartnersCarousel isEnglish={isEnglish} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<EducationalAreas isEnglish={isEnglish} data={areasData} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<Centers isEnglish={isEnglish} data={centersData} />
						</Suspense>
					</>
				) : (
					<>
						<Suspense fallback={<AnimatedLoader />}>
							<Members
								isEnglish={isEnglish}
								data={membersData}
								preferences={preferencesData}
							/>
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<Achiewments
								isEnglish={isEnglish}
								data={achiewmentsData}
								preferences={preferencesData}
							/>
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<About isEnglish={isEnglish} data={aboutData} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<PartnersCarousel isEnglish={isEnglish} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<EducationalAreas isEnglish={isEnglish} data={areasData} />
						</Suspense>
						<Suspense fallback={<AnimatedLoader />}>
							<Centers isEnglish={isEnglish} data={centersData} />
						</Suspense>
					</>
				)}

				<Suspense fallback={<AnimatedLoader />}>
					<CalendarContainer
						isEnglish={isEnglish}
						preferences={preferencesData}
					/>
				</Suspense>
				<Suspense fallback={<AnimatedLoader />}>
					<Blog isEnglish={isEnglish} data={blogData} />
				</Suspense>
				<Suspense fallback={<AnimatedLoader />}>
					<ReviewsCarousel isEnglish={isEnglish} data={reviewsData} />
				</Suspense>
				<Suspense fallback={<AnimatedLoader />}>
					<CallbackForm isEnglish={isEnglish} />
				</Suspense>
				<Suspense fallback={<AnimatedLoader />}>
					<Footer isEnglish={isEnglish} data={footerData} />
				</Suspense>
			</ThemeProvider>
		</>
	)
}

export { getServerSideProps }

export default Main
