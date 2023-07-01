import '@/styles/reset.css'
import { ThemeProvider, createTheme } from "@mui/material/styles"
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


export default function main() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <HeadingPage />
                <About />
                <Services />
                <EducationslAreas />
                <DiscussionReg />
                <Members />
                <CalendarContainer />
                <ReviewsCarousel />
                <PartnersCarousel />
                <Blog />
                <CallbackForm />
                <Footer />
            </ThemeProvider>
        </>
    )
}
