import Header from "@/components/Header"
import '@/styles/reset.css'
import { useState } from 'react'
import { useRouter } from "next/router"
import { ThemeProvider } from "@mui/material/styles"
import { getServerSideProps } from '../../ssr';
import theme from "@/Theme"
import BlogPost from '@/components/BlogPost'
import Footer from "@/components/Footer"

const BlogPostPage = ({
    footerData,
}) => {
    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header onLanguageToggle={handleLanguageToggle} isEnglish={isEnglish} socials={footerData} />
                <BlogPost isEnglish={isEnglish} slug={slug} />
                <Footer isEnglish={isEnglish} data={footerData} />
            </ThemeProvider>

        </>
    )
}
export { getServerSideProps };
export default BlogPostPage