import React from 'react';
import './Hero.scss'
import Headline from "../common/Headline";
import ButtonSection from "../common/ButtonSection";

export const Hero = () => {
	return (
		<div className="hero" id="hero">
			<div className="wrapper">
				<Headline.h2>Welcome</Headline.h2>
				<Headline.h1>The Rosa</Headline.h1>
				<div className="headline-description">
					<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk">*</div>
						<div className="line line-right"></div>
					</div>
					<div className="single-animation">
						<h5>Ready to be opened</h5>
						<ButtonSection className="cta-btn">Explore</ButtonSection>
					</div>
				</div>
			</div>
		</div>
	)
}