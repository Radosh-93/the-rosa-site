import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import { Sidebar } from './Sidebar/Sidebar';
import { NavList } from './NavList/NavList';
import './Header.scss';
import logo from './../../assets/images/logo-rosa.png';



export const Header = () => {
	return (
		<header>
			<div className="wrapper">
				<Breakpoint small down>
					<nav className="nav">
						<Sidebar />
					</nav>
				</Breakpoint>
				<Breakpoint medium up>
					<nav className="nav">
						<NavLink exact to="/" className='logo'>
							<img src={logo} alt="rosa" />
						</NavLink>
						<NavList />
					</nav>
				</Breakpoint>

			</div>
		</header >
	)
}