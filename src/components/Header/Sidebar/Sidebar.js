import React, {useEffect, useState} from 'react';
import {Squash as Hamburger} from 'hamburger-react'
import {NavLink} from 'react-router-dom';
import {NavList} from '../NavList/NavList'
import ButtonMask from "../../common/ButtonMask";
import {CSSTransition} from "react-transition-group";
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import Logo from "components/Header/Logo";

export const Sidebar = () => {
    let [isToggle, setIsToggle] = useState(false);
    useEffect(() => {
        if (isToggle) {
            disableBodyScroll(document.querySelector('.coming-soon-block'))
        }
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [isToggle]);
    return (
        <div className="sidebar">
            <div className="menu-toggle">
                <Hamburger toggled={isToggle} toggle={setIsToggle}
                           color='#ffffff'
                           size={22}/>
            </div>
            <NavLink to='/'><Logo/></NavLink>
                <CSSTransition in={isToggle}
                               timeout={700}
                               classNames='menu'
                               unmountOnExit>
                    <div className="sidebar-menu">
                        <NavList setIsToggle={setIsToggle}/>
                        <ButtonMask isPopUp={isToggle} setPopUp={setIsToggle}/>
                    </div>
                </CSSTransition>
        </div>
    )
}