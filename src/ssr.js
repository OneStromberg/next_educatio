import axios from 'axios'

export async function getServerSideProps(context) {
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN
	const locale = context.locale

	const fetchData = async url => {
		try {
			const response = await axios.get(`${url}?locale=${locale}&populate=*`, {
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

	const [
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
	] = await Promise.all([
		fetchData(`${apiUrl}/main-page`),
		fetchData(`${apiUrl}/about-uses`),
		fetchData(`${apiUrl}/educational-areas/?populate=*`),
		fetchData(`${apiUrl}/members`),
		fetchData(`${apiUrl}/centers`),
		fetchData(`${apiUrl}/reviews/`),
		fetchData(`${apiUrl}/achiewments`),
		fetchData(`${apiUrl}/blog-posts`),
		fetchData(`${apiUrl}/site-preference`),
		fetchData(`${apiUrl}/footer`),
	])

	if (
		!mainData ||
		!aboutData ||
		!areasData ||
		!membersData ||
		!centersData ||
		!reviewsData ||
		!achiewmentsData ||
		!blogData ||
		!preferencesData ||
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
			membersData: membersData || null,
			centersData: centersData || null,
			reviewsData: reviewsData || null,
			achiewmentsData: achiewmentsData || null,
			blogData: blogData || null,
			preferencesData: preferencesData || null,
			footerData: footerData || null,
		},
	}
}
