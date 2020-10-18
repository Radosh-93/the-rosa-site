import React from 'react'

export const Hero = () => {
	return (
		<div className="hero" id="hero">
			<div className="wrapper">
				<h2 className="sup-headline">
					<span className="first-leter">W</span>elcome
				</h2>
				<h1 className="headline">The Rosa</h1>
				<div className="hedline-description">
					<div className="separator">
						<div className="line line-left"></div>
						<div className="astrisk">*</div>
						<div className="line line-rigth"></div>
					</div>
					<div className="single-animation">
						<h5>Ready to be opened</h5>
						<button className="btn cta-btn"></button>
					</div>
				</div>
			</div>
		</div>
	)
}