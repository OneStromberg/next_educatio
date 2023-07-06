import Header from "@/components/Header"
import '@/styles/reset.css'
import { useState } from 'react'
import { useRouter } from "next/router"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/Theme"

export default function BlogPost() {
    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header onLanguageToggle={handleLanguageToggle} isEnglish={isEnglish} />
                {/* <BlogPost isEnglish={isEnglish} id={id} /> */}
            </ThemeProvider>

        </>
    )
}
