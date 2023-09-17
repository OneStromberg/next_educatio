import Header from '@/components/Header'
import '@/styles/reset.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import Head from 'next/head'
import { getServerSideProps } from '../../ssr'
import theme from '@/Theme'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'
import logo from '@/assets/footter_logo.svg'

const BlogPostPage = ({ footerData, preferencesData }) => {
	const [isEnglish, setIsEnglish] = useState(false)
	const router = useRouter()

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

	const { slug } = router.query
	const locale = isEnglish ? 'en' : 'uk-UA'

	const [data, setData] = useState(null)
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (slug) {
					const response = await axios.get(
						`${apiUrl}/blog-posts/${slug}?locale=${locale}`,
						{
							headers: {
								Authorization: `Bearer ${apiKey} `,
							},
						}
					)
					if (response.data) {
						setData(response.data)
						console.log(data)
					} else {
						// router.push('/')
					}
				}
			} catch (error) {
				console.error('Error fetching data:', error)
				// router.push('/')
			}
		}
		fetchData()
	}, [slug, locale])

	return (
		<>
			<Head>
				<title>{`ЦЕ — Центри Едукації | ${
					isEnglish ? data?.EnglishTitle : data?.Title || 'Новини'
				}`}</title>
				<meta
					name='description'
					content={
						isEnglish
							? data?.EnglishDescription
							: data?.Description || 'Опис новини'
					}
				/>
				<meta
					name='keywords'
					content='Курси, Навчання, Освіта, Львів, Центри Едукації, Центр Навчання, Львівська міська рада, Інститут міста, Центри едукації, Центри зайнястоті, безкоштовна освіта, безкоштовно, розвиток'
				/>
				<meta name='author' content='Центр едукації' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<meta property='og:url' content={`http://ceducatio.com/news/${slug}`} />
				<meta property='og:type' content='article' />
				<meta
					property='og:title'
					content={isEnglish ? data?.EnglishTitle : data?.Title || 'Новини'}
				/>
				<meta
					property='og:description'
					content={
						isEnglish
							? data?.EnglishDescription
							: data?.Description || 'Опис новини'
					}
				/>
				<meta property='og:image' content={data?.imageUrl || 'image'} />

				<link rel='canonical' href={`http://ceducatio.com/news/${slug}`} />
				<link rel='icon' href={logo.src} type='image/x-icon' />
			</Head>

			<ThemeProvider theme={theme}>
				<Header
					onLanguageToggle={handleLanguageToggle}
					isEnglish={isEnglish}
					preferences={preferencesData}
					socials={footerData}
				/>
				<BlogPost isEnglish={isEnglish} data={data} />
				<Footer isEnglish={isEnglish} data={footerData} />
			</ThemeProvider>
		</>
	)
}
export { getServerSideProps }
export default BlogPostPage
