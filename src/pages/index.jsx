import { ThemeProvider, createTheme } from "@mui/material/styles"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
    EighthContainer,
    FifthContainer,
    FirstContainer,
    FourthContainer,
    SecondContainer,
    SeventhContainer,
    SixthContainer,
    ThirdContainer
} from "@/containers/FirstPage"
import theme from "@/Theme"

export default function main() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <FirstContainer />
                <SecondContainer />
                <ThirdContainer />
                <FourthContainer />
                <FifthContainer />
                <SixthContainer />
                <SeventhContainer />
                <EighthContainer />
                <Footer />
            </ThemeProvider>
        </>
    )
}
