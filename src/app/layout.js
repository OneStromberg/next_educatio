import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
	title: 'Educatio',
	description:
		'Мережа неформального навчання у Львові. Центри Едукації на базі місцевих бібліотек. Безкоштовні та малокоштовні довготривалі навчальні курси. Розвиток Львова як міста, що навчається',
}

export default function RootLayout({ children }) {
	return (
		<html lang='uk'>
			<Head>
				<title>ЦЕ — Центри Едукації у Львові</title>
				<meta charSet='utf-8' />
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
				<link rel='canonical' href='http://ceducatio.com/' />
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='alternate'
					type='application/rss+xml'
					title='ЦЕ - Центри Едукації'
					href='https://ceducatio.com/'
				/>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
