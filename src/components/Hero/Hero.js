import React from 'react';
import './Hero.scss'
import Headline from "../common/Headline";

export const Hero = () => {
	return (
		<div className="hero" id="hero">
			<div className="wrapper">
				<Headline title='The Rosa'>Welcome</Headline>
				<div className="headline-description">
					<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk">*</div>
						<div className="line line-right"></div>
					</div>
					<div className="single-animation">
						<h5>Ready to be opened</h5>
						<a href='#' className="btn cta-btn">Explore</a>
					</div>
				</div>
			</div>
		</div>
	)
}