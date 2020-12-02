import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory()

    const handleLoginClick = () => {
        history.push("login")
    }

    return (
        <>
            <header id="header">
                <div className="container d-flex">

                <div className="logo mr-auto">
                    <h1 className="text-light"><a href="index.html"><span>VALN</span></a></h1>
                    {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                </div>

                <nav className="nav-menu d-none d-lg-block">
                    <Button style={{ height: "100%"}} onClick={handleLoginClick}>Entrar</Button>
                </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar
