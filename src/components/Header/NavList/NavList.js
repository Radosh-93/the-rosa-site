import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss'

export const NavList = () => {
	return (
		<ul className='nav-list'>
			<li className='nav-item'>
				<NavLink to='/' exact className="nav-link">
					Home
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/menu' className="nav-link">
					Menu
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/reservations' className="nav-link">Reservations</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/new' className="nav-link">New</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/shop' className="nav-link">Shop</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/contact' className="nav-link">Contact</NavLink>
			</li>
		</ul>
	)
}