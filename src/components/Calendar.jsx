import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import Wavy from './UI/Wavy';

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
            justifyContent="flex-start"
            alignItems="center"
            style={{
                // background: '#ededed',
                // padding: '130px 0'
            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography id='calendar' variant='h4_pink'>{pageTitle}</Typography>
                <Wavy fill={'#FF9888'} />
            </div>            <Grid container spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    width: '100%',
                    height: '100vh',
                    background: '#ededed',
                    margin: '0',
                }}
            >
                <iframe src={calendar}
                    style={{ borderWidth: 0 }}
                    width="100%"
                    height="100%"
                    minheight='600px'>
                </iframe>
            </Grid>
        </Grid >
    );
};

export default CalendarContainer