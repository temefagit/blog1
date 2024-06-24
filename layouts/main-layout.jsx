import { Fragment } from "react"
import Footer from '../components/footer'
import Header from '../components/header'

export const MainLayout = ({children}) => {

    return (
        <Fragment>
            <Header />
                <main>{children}</main>
            <Footer />
        </Fragment>
    )
}