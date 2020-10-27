import React from 'react';
import {NavLink} from 'react-router-dom';
import {Breakpoint, setDefaultBreakpoints} from 'react-socks';
import {Sidebar} from './Sidebar/Sidebar';
import {NavList} from './NavList/NavList';
import './Header.scss';
import logo from 'assets/images/logo-rosa.png';

setDefaultBreakpoints([
	{ xsmall: 0 }, // all mobile devices
	{ small: 576 }, // mobile devices (not sure which one's this big)
	{ medium: 769 }, // ipad, ipad pro, ipad mini, etc
	{ large: 992 }, // smaller laptops
	{ xlarge: 1200 } // laptops and desktops
]);

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <Breakpoint small down>
                    <nav className="nav">
                        <Sidebar/>
                    </nav>
                </Breakpoint>
                <Breakpoint medium up>
                    <nav className="nav">
                        <NavLink exact to="/" className='logo'>
                            <img src={logo} alt="rosa"/>
                        </NavLink>
                        <NavList/>
                    </nav>
                </Breakpoint>
            </div>
        </header>
    )
}