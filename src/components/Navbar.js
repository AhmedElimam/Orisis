import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { BiGlobe } from 'react-icons/bi';
import Button from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
function Navbar() {
    const [button , setButton] = useState(true);
    const [click, setClick] = useState(false);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    return (
        <>
        <IconContext.Provider value={{ color:'#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link  to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <BiGlobe className='navbar-icon' />
                    ORISES
                </Link>
                <div className="menu-icon" onClick={handelClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link className="nav-links" onClick={closeMobileMenu}>
                    Services
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link className="nav-links" onClick={closeMobileMenu}>
                       Product
                    </Link>
                    </li>
    
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'>
                                    SIGN UP
                                </Button>
                            </Link>
                        ) : (
                            <Link to='/sign-up' className="btn-link">
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                SIGNUP
                            </Button>
                        </Link>
                        )}
                   </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
