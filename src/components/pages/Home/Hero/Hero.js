import React from 'react';
import './Hero.scss'
import Headline from "components/common/Headline";
import ButtonSection from "components/common/ButtonSection";
import Asterisk from "components/common/Asterisk";
import ScrollAnimation from 'react-animate-on-scroll';

export const Hero = () => {
	const scrollTo100vh = () => {
		document.getElementById('test').scrollIntoView();
	}
	return (
		<div className="hero" id="hero">
			<div className="wrapper">
				<Headline.h2>Welcome</Headline.h2>
				<Headline.h1>The Rokka</Headline.h1>
				<div className="headline-description">
					<div className="separator">
						<ScrollAnimation className="line line-left"
										 animateIn='animate__fadeInLeft'
										 animateOut='animate__fadeOutLeft' delay={900}/>
						<Asterisk className="asterisk" color='#c59d5f'/>
						<ScrollAnimation className="line line-right"
										 animateIn='animate__fadeInRight'
										 animateOut='animate__fadeOutRight' delay={900}/>
					</div>
					<ScrollAnimation className="single-animation"
									 animateIn='animate__fadeInDown'
									 animateOut='animate__fadeOutDown' delay={1500}>
						<h5>Ready to be opened</h5>
						<ButtonSection className="cta-btn" onClick={scrollTo100vh}>Explore</ButtonSection>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	)
}