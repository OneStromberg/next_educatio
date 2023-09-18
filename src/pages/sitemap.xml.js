import axios from 'axios'

const apiUrl = process.env.API_URL
const apiKey = process.env.API_TOKEN

async function fetchData(url) {
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

function generateSiteMap(blogData) {
	return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://ceducatio.com</loc>
       </url>
			  <url>
         <loc>https://ceducatio.com/en</loc>
       </url>
       ${blogData
					.map(slug => {
						slug = slug.attributes.slug
						return `
         <url>
             <loc>${`https://ceducatio.com/blog-posts/${slug}`}</loc>
         </url>
				  <url>
             <loc>${`https://ceducatio.com/en/blog-posts/${slug}`}</loc>
         </url>
       `
					})
					.join('')}
     </urlset>
   `
}

export default function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	const blogData = await fetchData(`${apiUrl}/blog-posts`)
	// console.log(blogData)
	// We generate the XML sitemap with the members data
	const sitemap = generateSiteMap(blogData)

	res.setHeader('Content-Type', 'text/xml')
	// we send the XML to the browser
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}
