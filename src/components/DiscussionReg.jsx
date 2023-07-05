import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Typography,
    Button,
} from '@mui/material';


const DiscussionReg = ({ isEnglish }) => {

    const [data, setData] = useState(null);
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/register-ons/1?populate=*`, {
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

    const text = isEnglish ? data.EnglishText : data.text;
    const buttonText = isEnglish ? data.EnglishButtonText : data.ButtonText;
    const link = data.link



    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" style={
            {
                flexDirection: 'column',
                marginTop: '3%',
                marginBottom: '3%',
                padding: '75px 0',
                gap: 75,
                background: '#ededed'
            }}>
            <Grid item xs={12} style={{ maxWidth: '70%', textAlign: 'center' }}>
                <Typography variant="title2" align="center" gutterBottom wrap="wrap">
                    {text}
                </Typography>
            </Grid>
            <Button variant="outlined" style={{
                cursor: 'pointer',
                width: '20%',
                minWidth: 200,
            }}
                href={link}
                target='_blank'
            >
                {buttonText}
            </Button>
        </Grid>
    );
}

export default DiscussionReg