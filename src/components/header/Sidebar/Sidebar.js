import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-rosa.png';
import { NavList } from '../NavList/NavList'

export const Sidebar = () => {
	let [isToggle, setIsToggle] = useState(false);

	const onToggle = toggled => {
		setIsToggle(toggled)
	}
	return (
		<div className="sidebar">
			<div className="menu-toggle">
				<Hamburger onToggle={onToggle}
					color='#ffffff'
					size={22} />
			</div>
			<NavLink to='/'><img src={logo} alt="rosa" /></NavLink>
			{isToggle
				? <NavList />
				: null}
			{isToggle
				? <a />
				: null}
		</div>
	)
}