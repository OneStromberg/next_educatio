import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';

const CalendarContainer = ({ isEnglish }) => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/calendars/1?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    }
                });
                console.log(response)
                setData(response.data.data.attributes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    if (!data) {
        return null;
    }

    const calendar = data.CalendarURL
    const pageTitle = isEnglish ? 'Calendar' : 'Календар'

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ background: '#ededed', padding: '130px 0' }}>
            <Typography id='calendar' variant='h4'>{pageTitle}</Typography>
            <Grid container spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    width: '100%',
                    background: '#ededed',
                    padding: '5% 0',
                    margin: '0',
                }}
            >
                <iframe src={calendar}
                    style={{ borderWidth: 0 }}
                    width="80%"
                    height="100%"
                    minHeight='600px'
                    frameborder="0"
                    scrolling="no">
                </iframe>
            </Grid>
        </Grid>
    );
};

export default CalendarContainer