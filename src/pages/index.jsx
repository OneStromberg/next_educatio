import '@/styles/reset.css'
import { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/Theme"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeadingPage from "@/components/HeadingPage"
import About from "@/components/About"
import Services from "@/components/Services"
import EducationslAreas from "@/components/EducationslAreas"
import DiscussionReg from "@/components/DiscussionReg"
import Members from "@/components/Members"
import CallbackForm from "@/components/CallbackForm"
import CalendarContainer from "@/components/Calendar"
import PartnersCarousel from "@/components/Partners"
import ReviewsCarousel from "@/components/Reviews"
import Blog from "@/components/Blog"
import Achiewments from '@/components/Achiewments'


export default function main() {
    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header onLanguageToggle={handleLanguageToggle} isEnglish={isEnglish} />
                <HeadingPage isEnglish={isEnglish} />
                <About isEnglish={isEnglish} />
                <Services isEnglish={isEnglish} />
                <EducationslAreas isEnglish={isEnglish} />
                <DiscussionReg isEnglish={isEnglish} />
                <Members isEnglish={isEnglish} />
                <CalendarContainer isEnglish={isEnglish} />
                <ReviewsCarousel isEnglish={isEnglish} />
                <PartnersCarousel isEnglish={isEnglish} />
                <Achiewments isEnglish={isEnglish} />
                <Blog isEnglish={isEnglish} />
                <CallbackForm isEnglish={isEnglish} />
                <Footer />
            </ThemeProvider>
        </>
    )
}
