import {
    Grid,
    Typography,
    Button,
} from '@mui/material';


const DiscussionReg = () => {

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
                    Registration for the Discussion with Vitaliy Portnikov &quot;Public experience of war as a chance for (mis) understanding&quot;
                </Typography>
            </Grid>
            <Button variant="outlined" style={{
                cursor: 'pointer',
                width: '20%',
                minWidth: 200,
            }}>
                Registration on discussion
            </Button>
        </Grid>
    );
}

export default DiscussionReg