import axios from 'axios'

export async function getServerSideProps(context) {
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN
	const locale = context.locale

	const fetchData = async url => {
		try {
			const response = await axios.get(`${url}?_locale=${locale}&populate=*`, {
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			})
			return response.data.data
		} catch (error) {
			console.error(`Error fetching ${url}:`, error)
			return null
		}
	}

	const preferencesData = await fetchData(`${apiUrl}/site-preference`)

	if (!preferencesData) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	const fetchList = [
		fetchData(`${apiUrl}/main-page`),
		fetchData(`${apiUrl}/about-uses`),
		fetchData(`${apiUrl}/educational-areas/?populate=*`),
		fetchData(`${apiUrl}/centers`),
		fetchData(`${apiUrl}/reviews/`),
		fetchData(`${apiUrl}/achiewments`),
		fetchData(`${apiUrl}/footer`),
	]

	if (preferencesData.attributes.hideCalendar !== true) {
		fetchList.push(fetchData(`${apiUrl}/blog-posts`))
	}

	if (preferencesData.attributes.isShort !== true) {
		fetchList.push(fetchData(`${apiUrl}/calendar`))
		fetchList.push(fetchData(`${apiUrl}/members`))
	}

	const [
		mainData,
		aboutData,
		areasData,
		centersData,
		reviewsData,
		achiewmentsData,
		footerData,
		blogData,
		calendarData,
		membersData,
	] = await Promise.all(fetchList)

	if (
		!mainData ||
		!aboutData ||
		!areasData ||
		!centersData ||
		!reviewsData ||
		!achiewmentsData ||
		!footerData
	) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {
			locale: locale,
			mainData: mainData ? mainData.attributes : null,
			aboutData: aboutData || null,
			areasData: areasData || null,
			centersData: centersData || null,
			reviewsData: reviewsData || null,
			achiewmentsData: achiewmentsData || null,
			blogData: blogData || null,
			preferencesData: preferencesData || null,
			footerData: footerData || null,
			calendarData: calendarData || null,
			membersData: membersData || null,
		},
	}
}