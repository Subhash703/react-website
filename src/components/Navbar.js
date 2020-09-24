import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true);
    const closeMobileMenu = () =>{
        setClick(false);
    }

    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo"> 
                        <MdFingerprint className="navbar-icon" />
                        ScDev
                    </Link>

                    <div className="menu-icon"
                        onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <FaBars className="fa-bars"/> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline"> 
                                Sign Up
                                </Button>
                            </Link>) : (
                                <Link to='/sing-up' className="btn-link">
                                    <Button buttonStyle="btn--outline"
                                    buttonSize="btn--mobile"
                                > 
                                Sign Up
                                </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                    {/* <Link className="menu-bar">
                        <FaBars />
                    </Link> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
