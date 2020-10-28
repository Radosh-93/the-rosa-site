import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss'

export const NavList = ({setIsToggle = (() => {})}) => {
	const menuItems = ['home', 'menu', 'reservations', 'new', 'shop', 'contact'];

	return (
		<ul className='nav-list'>
			{menuItems.map(item => (
				<li className='nav-item' key={item}>
					<NavLink to={item === 'home' ? '/' : `/${item}`} exact className="nav-link" onClick={() => {setIsToggle(false)}}>
						{item}
					</NavLink>
				</li>
			))}
		</ul>
	)
}