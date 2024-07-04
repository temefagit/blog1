import { Fragment } from "react"
import Footer from '../components/footer'
import Header from '../components/header'

export const MainLayout = ({ children }) => {

    const layoutStyle = {
        minHeight: "100vh"
    };
    return (
        <div style={layoutStyle}>
            <Header />
            <main style={layoutStyle}>{children}</main>
            <Footer />
        </div>
    )
}