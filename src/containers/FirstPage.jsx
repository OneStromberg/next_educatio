import { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    IconButton,
    Paper,
    Card,
    CardContent
} from '@mui/material';

import { styled } from '@mui/system';
import {
    TableCell,
    TableRow,

} from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import Calendar from 'react-calendar';
import Carousel from 'react-material-ui-carousel';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import backgroundImage from '@/assets/background.jpg';
import AboutUsPic from '@/assets/pic1.jpg'
import img1 from '@/assets/FreeCourses.jpg'
import img2 from '@/assets/EducationWorld.jpg'
import img3 from '@/assets/StudyToghther.jpg'

const StyledContainer = styled(Container)`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  max-width: none;
`;

const BackgroundImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg, 
    rgba(36, 31, 85, 0.8), 
    rgba(8, 29, 31, 0.7)
    ),
    url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  z-index: -1;
  max-width: none;
`;

const StyledSecondContainer = styled(Box)`
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80%;
        gap: 8%;
        margin: 0 auto;
        padding: 10% 0;

        @media (max-width: 600px) {
            flex-direction: column;
          }
        `;

const StyledTextContainer = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        text-align: center;
        align-items: center;
        `;

const StyledImage = styled('img')`
        max-width: 100%;
        height: auto;
        `;

const StyledGrid = styled(Grid)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        `;

const StyledCalendar = styled(Calendar)`
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 16px;
        color: #241f55;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        text-align: center;
        line-height: 1.55;

        .react-calendar__navigation {
        margin-bottom: 16px;
        }

        .react-calendar__navigation button {
        background: none;
        border: none;
        cursor: pointer;
        color: #241f55;
        font-size: 1.2em;
        font-weight: bold;
        padding: 4px;
        transition: color 0.3s ease;
        }

        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
        color: #6c63ff;
        }

        .react-calendar__navigation button[disabled] {
        color: #ccc;
        cursor: default;
        }

        .react-calendar__navigation button.react-calendar__navigation__label {
        font-size: 1.4em;
        margin: 0;
        }

        .react-calendar__tile {
            background: #f6fcff;
            padding: 8px;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
        background-color: #ef4056;
        cursor: pointer;
        }

        .react-calendar__tile--active {
        background-color: #ff8e9c;
        color: #fff;
        }

        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
        background-color: #514bc6;
        color: #fff;
        }

        .react-calendar__tile--now {
        background-color: #ff8e9c;
        color: #241f55;
        font-weight: 500;
        }

        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
        background-color: #ef4056;
        }

        .react-calendar__tile--hasActive:enabled:hover,
        .react-calendar__tile--hasActive:enabled:focus {
        background-color: #ef4056;
        }
        // .react-calendar__month-view__weekdays{
        //     gap: 0% 0%; 
        // }
        // .react-calendar__month-view__days{
        //     gap: 0% 2%;
        // }
            `

const FirstContainer = () => {
    return (
        <StyledContainer>
            <BackgroundImage />
            <Typography variant="h1" component="h1" gutterBottom>
                Network CE - Education Centers
            </Typography>
            <Typography variant="h2" gutterBottom>
                A network of informal education operating in libraries and public spaces
                in Lviv and the region. We offer educational courses for professional
                and social growth.
            </Typography>
        </StyledContainer>
    );
};

const SecondContainer = () => {

    return (
        <StyledSecondContainer>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <StyledImage src={AboutUsPic.src} alt="About Us" width={600} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledTextContainer>
                        <Typography variant="h4" gutterBottom>
                            About us
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Developing the habit of continuous learning
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This is a network of Education Centers that has been operating in eight city libraries in Lviv since 2019. We develop a culture of informal lifelong learning by providing high-quality long-term training courses.
                            Since 2022, we have been conducting art therapies with qualified psychotherapists in Lviv and the region with the support of UNICEF.
                            The CE network exists thanks to the close cooperation of the City Institute, Lviv City Council, the Department of Culture, and the financial support of DVV International Ukraine.
                        </Typography>
                    </StyledTextContainer>
                </Grid>
            </Grid>
        </StyledSecondContainer>
    );
};


const ThirdContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Здесь нужно добавить логику получения данных из базы данных
        // и установить полученные данные в состояние `data` с помощью `setData()`
        const fetchData = async () => {
            try {
                // Запрос к базе данных или другой источник данных
                // const response = await fetch('https://example.com/api/data');
                // const jsonData = await response.json();
                // setData(jsonData);
                console.log('something')
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box mt={2} mb={2} style={{ background: '#ededed', padding: '120px 0', margin: '0', }}>
            <StyledTextContainer>
                <Typography variant="h4" gutterBottom>
                    Our actions
                </Typography>
                <Typography variant="subtitle3" gutterBottom>
                    It is worth acquiring new knowledge even after graduation from formal educational institutions. THIS is a network for those who treat knowledge as a basic necessity
                </Typography>
            </StyledTextContainer>
            {
                data.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.column1}</TableCell>
                        <TableCell>{row.column2}</TableCell>
                        <TableCell>{row.column3}</TableCell>
                    </TableRow>
                ))
            }

        </Box>
    );
};


const FourthContainer = () => {
    const images = [
        {
            id: 1,
            src: img1,
            caption: 'Image 1',
        },
        {
            id: 2,
            src: img2,
            caption: 'Image 2',
        },
        {
            id: 3,
            src: img3,
            caption: 'Image 3',
        },
    ];

    return (
        <Container maxWidth="m" style={{ background: '#ededed' }}>
            <Grid container spacing={2}>

                {images.map((image, index) => (
                    <Grid item xs={12} key={image.id} style={{
                        background: '#fff',
                        maxWidth: 'fit-content',
                        margin: '0 auto'
                    }}>
                        <StyledGrid>
                            {index % 2 === 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image src={image.src.src} alt={image.caption} width={800} height={1000} style={{ float: 'left', maxWidth: '50%', height: 'auto', marginRight: '10px' }} />
                                    <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                        <Typography variant="title" gutterBottom>
                                            {image.caption}
                                        </Typography>
                                        <Typography variant="subtitle4">
                                            Description for Image {image.id}
                                        </Typography>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div style={{ overflow: 'hidden', display: "flex", flexDirection: "column", margin: "0 auto", justifyContent: "center" }}>
                                        <Typography variant="title" gutterBottom>
                                            {image.caption}
                                        </Typography>
                                        <Typography variant="subtitle4">
                                            Description for Image {image.id}
                                        </Typography>
                                    </div>
                                    <Image src={image.src.src} alt={image.caption} width={800} height={1000} style={{ float: 'right', maxWidth: '50%', height: 'auto', marginLeft: '10px' }} />
                                </div>
                            )}
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}


const FifthContainer = () => {

    const list = [
        {
            id: 1,
            num: 1,
            header: 'Professional development',
            caption: 'We conduct courses in graphic design for beginners, social media promotion, project management, and the fashion industry',
        },
        {
            id: 2,
            num: 2,
            header: 'Psychology',
            caption: "We conduct courses annually: Psychology of Relationships, Practical Psychology, Psychology of Stress and Stress Resistance, Children's Psychology",
        },
        {
            id: 3,
            num: 3,
            header: 'Particular development',
            caption: 'English courses in partnership with Green Forest, first aid, career, volunteering',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

    return (
        <Box mt={5} mb={5}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
                Educational areas
            </Typography>
            <Grid container spacing={2}>
                {list.map((el) => (
                    <Grid item xs={12} sm={6} md={4} key={el.id}>
                        <StyledGrid>

                            <Typography style={{
                                background: '#241f55',
                                padding: '1%',
                                borderRadius: '50%',
                                width: "2em",
                                height: '2em',
                                color: '#fff',
                                fontSize: '2em',
                                fontWeight: '600',
                                lineHeight: '190%'
                            }}>{el.num}</Typography>

                            <Typography variant="title1">{el.header}</Typography>

                            <Typography variant="subtitle5" gutterBottom style={{ maxWidth: '50%' }}>
                                {el.caption}
                            </Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


const SixthContainer = () => {

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


const SeventhContainer = () => {

    const list = [
        {
            id: 1,
            header: 'The First Lviv Media Library',
            caption: "2a Mulyarska St., Halytskyi district It has been an Education Center since 2019. More than 150 people have been trained here.",
        },
        {
            id: 2,
            num: 2,
            header: 'URBAN Library',
            caption: "4 Ustianovycha St., Halytskyi district. It has been an Education Center since 2019. More than 150 people have been trained here.",
        },
        {
            id: 3,
            num: 3,
            header: 'Wiki Library',
            caption: '58, Chervona Kalynya Ave. It has been an Education Center since 2019. More than 120 people have been trained here',
        },
        // Добавить дополнительные объекты с изображениями и подписями по вашему желанию
    ];

    return (
        <Box mt={5} mb={5} style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '180px',
        }}>
            <Typography variant="h4" gutterBottom style={{
                textAlign: "center",
                margin: '0 0 72px',
            }}>
                Members of the CE network
            </Typography>
            <Grid container spacing={2} style={{ maxWidth: '70%' }}>
                {list.map((el) => (
                    <Grid item xs={12} sm={6} md={4} key={el.id}>
                        <StyledGrid >
                            <Typography variant='card_header'>{el.header}</Typography>
                            <Typography variant="card_body" gutterBottom>
                                {el.caption}
                            </Typography>
                        </StyledGrid>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}


const EighthContainer = () => {
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        console.log('sheesh')
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Здесь можно добавить код для отправки данных формы
        try {
            await axios.post(
                `${apiUrl}/callback-requests`,
                {
                    data: formData
                },
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ background: '#ededed', padding: '130px 0' }}
        >
            <div style={{
                paddingTop: '7%',
                paddingBottom: '3.5%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <Typography variant="title2" gutterBottom style={{
                    textAlign: 'center',
                    margin: '0 auto',
                    paddingBottom: '41px',
                }}>
                    Do you have any questions?
                </Typography>
                <Typography variant='subtitle4'>Fill out the form and we will be happy to answer</Typography>
            </div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '50%',
                }}
            >
                <TextField
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="email"
                    label="Email"
                    placeholder="example@site.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="message"
                    label="Message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        cursor: 'pointer',
                        background: '#ef4056',
                        marginTop: '30px',
                        width: '30%',
                        minWidth: 150,
                    }}
                >
                    Complete
                </Button>
            </form>
        </Grid>
    );
};


const CalendarContainer = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Grid container spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{
                width: '100%',
                background: '#ededed',
                padding: '5% 0',
                margin: '0',
            }}>

            <Grid item>
                <StyledCalendar onChange={handleDateChange} value={selectedDate} />
            </Grid>

            <Grid item>
                <IconButton>
                    <CalendarToday />
                </IconButton>
            </Grid>

            <Grid item>
                <Typography variant="h5">{selectedDate.toLocaleDateString()}</Typography>
            </Grid>
        </Grid>
    );
};


const PartnersCarousel = () => {

    const partnerData = [
        { id: 1, logo: '/images/partner1.png' },
        { id: 2, logo: '/images/partner2.png' },
        { id: 3, logo: '/images/partner3.png' },
        // Добавьте остальных партнеров
    ];

    return (
        <Carousel>
            {partnerData.map((partner) => (
                <Paper key={partner.id} elevation={0} style={{ padding: 20, textAlign: 'center' }}>
                    <img src={partner.logo} alt="Partner Logo" style={{ maxWidth: '100%' }} />
                </Paper>
            ))}
        </Carousel>
    );
};


const ReviewsCarousel = () => {

    const reviewData = [
        { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Jane Smith', review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { id: 3, name: 'Alice Johnson', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
        // Добавьте остальные отзывы
    ];


    return (
        <Carousel>
            {reviewData.map((review) => (
                <Paper key={review.id} elevation={0} style={{ padding: 20, textAlign: 'center' }}>
                    <Typography variant="body1">{review.review}</Typography>
                    <Typography variant="subtitle2" style={{ marginTop: 10 }}>{review.name}</Typography>
                </Paper>
            ))}
        </Carousel>
    );
};


const BlogPage = () => {

    const blogData = [
        { id: 1, title: 'Blog Post 1', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Blog Post 2', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { id: 3, title: 'Blog Post 3', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
        // Добавьте остальные посты блога
    ];

    return (
        <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                padding: '80px 0',
                width: '70%',
                margin: '0 auto'
            }}>

            <Grid item xs={12} textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Blog
                </Typography>
            </Grid>

            {blogData.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none' }}>
                        <Card style={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="title1" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle4"><br />{post.excerpt}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};


export {
    FirstContainer,
    SecondContainer,
    ThirdContainer,
    FourthContainer,
    FifthContainer,
    SixthContainer,
    SeventhContainer,
    EighthContainer,
    CalendarContainer,
    PartnersCarousel,
    ReviewsCarousel,
    BlogPage,
};
