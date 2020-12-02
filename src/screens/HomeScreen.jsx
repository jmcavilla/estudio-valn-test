import React from 'react'
import { Image } from 'react-bootstrap'
import About from '../components/About'
import Carrousel from '../components/Carrousel'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Carrousel />
            <main className="main"> 
                <Featured />
                <About />
                <Services/>
                <Clients />
            </main>
            <Contact />
            <Footer />
        </>
    )
}

export default HomeScreen
