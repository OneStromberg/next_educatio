import axios from 'axios';

export async function getServerSideProps() {
    try {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_TOKEN;

        const response = await axios.get(`${apiUrl}/main-pages/1?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        const data = response.data.data.attributes;

        return {
            props: {
                data,
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
