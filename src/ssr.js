import axios from 'axios';

export async function getServerSideProps() {
    try {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_TOKEN;

        const mainResponse = await axios.get(`${apiUrl}/main-pages/1?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        const aboutResponse = await axios.get(`${apiUrl}/about-uses/?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const areasResponse = await axios.get(`${apiUrl}/educational-areas/?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const membersResponse = await axios.get(`${apiUrl}/members`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const reviewsResponse = await axios.get(`${apiUrl}/reviews`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const achiewmentsResponse = await axios.get(`${apiUrl}/achiewments/?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const blogResponse = await axios.get(`${apiUrl}/blog-posts/?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });

        const mainData = mainResponse.data.data.attributes;
        const aboutData = aboutResponse.data.data;
        const areasData = areasResponse.data.data;
        const membersData = membersResponse.data.data;
        const reviewsData = reviewsResponse.data.data;
        const achiewmentsData = achiewmentsResponse.data.data;
        const blogData = blogResponse.data.data;

        return {
            props: {
                mainData: mainData,
                aboutData: aboutData,
                areasData: areasData,
                membersData: membersData,
                reviewsData: reviewsData,
                achiewmentsData: achiewmentsData,
                blogData: blogData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                data: null,
            },
        };
    }
}
