import { Grid, Typography } from '@mui/material';

const CalendarContainer = () => {


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ background: '#ededed', padding: '130px 0' }}>
            <Typography id='calendar' variant='h4'>Calendar</Typography>
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
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJerusalem&showTabs=0&showPrint=0&showDate=1&showNav=0&showTitle=0&showCalendars=0&showTz=0&src=NDU5MjhhN2Q5NzcwZTc4YWM3ZGZiMmQ4NTU1YWRmODhhYmMyN2QzNDkwYjc1ZWM2Yjc2ZjJiOGM1NzBhNTM1ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
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