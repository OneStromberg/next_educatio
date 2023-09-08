import '@/styles/reset.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeadingPage from '@/components/HeadingPage';
import About from '@/components/About';
import EducationslAreas from '@/components/EducationalAreas';
import Members from '@/components/Members';
import CallbackForm from '@/components/CallbackForm';
import CalendarContainer from '@/components/Calendar';
import PartnersCarousel from '@/components/Partners';
import ReviewsCarousel from '@/components/Reviews';
import Blog from '@/components/Blog';
import Achiewments from '@/components/Achiewments';
import Head from 'next/head';
import { getServerSideProps } from '../ssr';
import Centers from '@/components/Centers';
import logo from '@/assets/footter_logo.svg';

const Main = (
    {
        mainData,
        aboutData,
        areasData,
        membersData,
        centersData,
        reviewsData,
        achiewmentsData,
        blogData,
        preferencesData,
        footerData,
    }) => {

    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <>
            <Head>
                <title>Educatio: Leading Center of Education in Lviv</title>
                <meta name="description" content="Educatio is the leading center of education in Lviv. We offer a wide range of educational services. Join us to redefine your future." />
                <meta name="keywords" content="Education, Educatio, Lviv, Center of education, CE, Освіта, Educatio, Львів, Центр освіти, ЦЕ, мережа ЦЕ —центрів едукації, центр едукації" />
                <meta name="author" content="Центр едукації" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="http://ceducatio.com/" />
                <link rel="icon" href={logo.src} type="image/x-icon" />
            </Head>


            <ThemeProvider theme={theme}>
                <Header onLanguageToggle={handleLanguageToggle}
                    isEnglish={isEnglish}
                    preferences={preferencesData}
                    socials={footerData} />
                <HeadingPage isEnglish={isEnglish} data={mainData} />
                <Members isEnglish={isEnglish} data={membersData} preferences={preferencesData} />
                <Achiewments isEnglish={isEnglish} data={achiewmentsData} />
                <About isEnglish={isEnglish} data={aboutData} />
                <PartnersCarousel isEnglish={isEnglish} />

                <EducationslAreas isEnglish={isEnglish} data={areasData} />
                <Centers isEnglish={isEnglish} data={centersData} />
                <CalendarContainer isEnglish={isEnglish} preferences={preferencesData} />
                <Blog isEnglish={isEnglish} data={blogData} />

                <ReviewsCarousel isEnglish={isEnglish} data={reviewsData} />
                <CallbackForm isEnglish={isEnglish} />
                <Footer isEnglish={isEnglish} data={footerData} />
            </ThemeProvider >
        </>
    );
};

export { getServerSideProps };

export default Main;