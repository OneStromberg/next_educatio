import {
    Grid,
    Typography,
    Button,
} from '@mui/material';


const DiscussionReg = ({ isEnglish, data }) => {

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