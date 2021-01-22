import React from 'react';

export default function predItem({ label, icon, temp, text }) {
	return (
		<div className="row">
			<div className="today-pred--card--item col center">
				<span>{label}</span>
				<div className="row">
					<img src={icon} alt="weather icon" />
					<div className="today-pred--card--item--text col center">
						<span>{temp}°</span>
						<span>{text}</span>
					</div>
				</div>
			</div>								
		</div>
	);
}