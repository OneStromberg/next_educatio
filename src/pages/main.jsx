import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
    FifthContainer,
    FirstContainer,
    FourthContainer,
    SecondContainer,
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
            <Footer />
        </>
    )
}
