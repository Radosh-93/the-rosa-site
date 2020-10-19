import React, {useState} from 'react';
import {Squash as Hamburger} from 'hamburger-react'
import {NavLink} from 'react-router-dom';
import logo from './../../../assets/images/logo-rosa.png';
import {NavList} from '../NavList/NavList'
import ButtonMask from "../../common/ButtonMask";
import {CSSTransition} from "react-transition-group";

export const Sidebar = () => {
    let [isToggle, setIsToggle] = useState(false);

    return (
        <div className="sidebar">
            <div className="menu-toggle">
                <Hamburger toggled={isToggle} toggle={setIsToggle}
                           color='#ffffff'
                           size={22}/>
            </div>
            <NavLink to='/'><img src={logo} alt="rosa"/></NavLink>
            <CSSTransition in={isToggle}
                           timeout={700}
                           classNames='menu'
                           unmountOnExit>
                <div className="sidebar-menu">
                    <NavList/>
                    <ButtonMask isPopUp={isToggle} setPopUp={setIsToggle}/>
                </div>
            </CSSTransition>
        </div>
    )
}