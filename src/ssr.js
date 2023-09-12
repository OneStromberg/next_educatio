import axios from 'axios'

export async function getServerSideProps() {
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN

	const fetchData = async url => {
		try {
			const response = await axios.get(url, {
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
		fetchData(`${apiUrl}/main-pages/1?populate=*`),
		fetchData(`${apiUrl}/about-uses/?populate=*`),
		fetchData(`${apiUrl}/educational-areas/?populate=*`),
		fetchData(`${apiUrl}/members`),
		fetchData(`${apiUrl}/centers`),
		fetchData(`${apiUrl}/reviews`),
		fetchData(`${apiUrl}/achiewments/?populate=*`),
		fetchData(`${apiUrl}/blog-posts/?populate=*`),
		fetchData(`${apiUrl}/site-preferences/1?populate=*`),
		fetchData(`${apiUrl}/footers/1?populate=*`),
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
