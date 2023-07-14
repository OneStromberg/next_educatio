import '@/styles/reset.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeadingPage from '@/components/HeadingPage';
import About from '@/components/About';
import Services from '@/components/Services';
import EducationslAreas from '@/components/EducationslAreas';
import DiscussionReg from '@/components/DiscussionReg';
import Members from '@/components/Members';
import CallbackForm from '@/components/CallbackForm';
import CalendarContainer from '@/components/Calendar';
import PartnersCarousel from '@/components/Partners';
import ReviewsCarousel from '@/components/Reviews';
import Blog from '@/components/Blog';
import Achiewments from '@/components/Achiewments';
import Head from 'next/head';
import { getServerSideProps } from '../ssr';

const Main = ({ data }) => {

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
                <HeadingPage isEnglish={isEnglish} data={data} />
                <About isEnglish={isEnglish} />
                <Services isEnglish={isEnglish} />
                <EducationslAreas isEnglish={isEnglish} />
                <DiscussionReg isEnglish={isEnglish} />
                <Members isEnglish={isEnglish} />
                <CalendarContainer isEnglish={isEnglish} />
                <div style={{ padding: '2% 0' }}>
                    <ReviewsCarousel isEnglish={isEnglish} />
                    <PartnersCarousel isEnglish={isEnglish} />
                </div>
                <Achiewments isEnglish={isEnglish} />
                <Blog isEnglish={isEnglish} />
                <CallbackForm isEnglish={isEnglish} />
                <Footer isEnglish={isEnglish} />
            </ThemeProvider>
        </>
    );
};

export { getServerSideProps };

export default Main;