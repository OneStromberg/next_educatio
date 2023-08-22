import '@/styles/reset.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeadingPage from '@/components/HeadingPage';
import About from '@/components/About';
import EducationslAreas from '@/components/EducationslAreas';
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

const Main = (
    {
        mainData,
        aboutData,
        areasData,
        membersData,
        centersData,
        reviewsData,
        achiewmentsData,
        blogData
    }) => {

    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <>
            <Head>
                <meta name="description" content="CE - Center of education" />
                <meta
                    name="keywords"
                    content="Education, Educatio, Lviv, Center of education, CE, Освіта, Educatio, Львів, Центр освіти, ЦЕ, мережа ЦЕ —центрів едукації, центр едукації"
                />
                <meta name="author" content="Центр едукації" />
            </Head>

            <ThemeProvider theme={theme}>
                <Header onLanguageToggle={handleLanguageToggle} isEnglish={isEnglish} />
                <HeadingPage isEnglish={isEnglish} data={mainData} />
                <Members isEnglish={isEnglish} data={membersData} />
                <Achiewments isEnglish={isEnglish} data={achiewmentsData} />
                <About isEnglish={isEnglish} data={aboutData} />
                <PartnersCarousel isEnglish={isEnglish} />

                <EducationslAreas isEnglish={isEnglish} data={areasData} />
                <Centers isEnglish={isEnglish} data={centersData} />
                <CalendarContainer isEnglish={isEnglish} />
                <Blog isEnglish={isEnglish} data={blogData} />

                <ReviewsCarousel isEnglish={isEnglish} data={reviewsData} />
                <CallbackForm isEnglish={isEnglish} />
                <Footer isEnglish={isEnglish} />
            </ThemeProvider>
        </>
    );
};

export { getServerSideProps };

export default Main;