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

export default function main() {
    return (
        <>
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
        </>
    )
}
