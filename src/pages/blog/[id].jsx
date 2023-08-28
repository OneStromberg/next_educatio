import Header from "@/components/Header"
import '@/styles/reset.css'
import { useState } from 'react'
import { useRouter } from "next/router"
import { ThemeProvider } from "@mui/material/styles"
import BlogPost from '@/components/BlogPost'
import theme from "@/Theme"
import Footer from "@/components/Footer"

export default function BlogPostPage() {
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
                <BlogPost isEnglish={isEnglish} id={id} />
                <Footer isEnglish={isEnglish} />
            </ThemeProvider>

        </>
    )
}
