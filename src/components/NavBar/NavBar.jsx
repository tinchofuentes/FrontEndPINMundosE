import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import logo from '../../assets/images/logocompany.jpg'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar" id='navbar'>
            <div className="nav-logo">
                <Link activeClass='active' to='inicio' spy={true} smooth={true} offset={-70} duration={500} >
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link activeClass='active' to='inicio' spy={true} smooth={true} offset={-70} duration={500} >Inicio</Link>
                <Link activeClass='active' to='nosotros' spy={true} smooth={true} offset={-30} duration={500} >Nosotros</Link>
                <Link activeClass='active' to='productos' spy={true} smooth={true} offset={-30} duration={500} >Productos</Link>
                <Link activeClass='active' to='servicios' spy={true} smooth={true} offset={-30} duration={500} >Servicios</Link>
                <Link activeClass='active' to='contacto' spy={true} smooth={true} offset={-30} duration={500} >Contacto</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div >
    )
}

export default NavBar