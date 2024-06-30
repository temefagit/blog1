import { Fragment } from "react"
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '@/components/heroSection/index'

export const MainLayout = ({ children }) => {

    const layoutStyle = {
        minHeight: "100vh"
    };
    return (
        <div style={layoutStyle}>
            <Header />
            <HeroSection />
            <main style={layoutStyle}>{children}</main>
            <Footer />
        </div>
    )
}