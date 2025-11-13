import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const Root = () => {
    return (
        <>
        <Header />   
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />  
        </>
    )
}

export default Root