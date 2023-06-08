import { ThemeProvider } from '@emotion/react'
import theme from '@/Theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
    </ThemeProvider>
  )
}
