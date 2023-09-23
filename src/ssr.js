import axios from 'axios'

export async function getServerSideProps({ locale }) {
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN

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

	const preferencesData = await fetchData(`${apiUrl}/site-preference`)

	if (!preferencesData) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	const baseFetchList = [
		fetchData(`${apiUrl}/main-page`),
		fetchData(`${apiUrl}/about-uses`),
		fetchData(`${apiUrl}/educational-areas/?populate=*`),
		fetchData(`${apiUrl}/centers`),
		fetchData(`${apiUrl}/reviews/`),
		fetchData(`${apiUrl}/achiewments`),
		fetchData(`${apiUrl}/blog-posts`),
		fetchData(`${apiUrl}/footer`),
	]

	if (
		preferencesData.attributes.isShort === false ||
		preferencesData.attributes.hideCalendar === false
	) {
		baseFetchList.push(fetchData(`${apiUrl}/calendar`))
	}

	if (preferencesData.attributes.isShort === false) {
		baseFetchList.push(fetchData(`${apiUrl}/members`))
	}

	const fetchedData = await Promise.all(baseFetchList)

	if (fetchedData.some(data => !data)) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	return {
		props: {
			locale,
			mainData: fetchedData[0]?.attributes || null,
			aboutData: fetchedData[1] || null,
			areasData: fetchedData[2] || null,
			centersData: fetchedData[3] || null,
			reviewsData: fetchedData[4] || null,
			achiewmentsData: fetchedData[5] || null,
			blogData: fetchedData[6] || null,
			preferencesData: preferencesData || null,
			footerData: fetchedData[7] || null,
			calendarData: fetchedData[8] || null,
			membersData: fetchedData[9] || null,
		},
	}
}
