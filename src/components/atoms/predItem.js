import React from 'react';

export default function predItem({ label, icon, temp, text }) {
	return (
		<div className="row">
			<div className="today-pred--card-item-wrapper col">
				<span className="today-pred--card-item-label">{label}</span>
				<div className="row">
					<div className="today-pred--card-item-condition col center">
						<img src={icon} alt="weather icon" />
						<span>{text}</span>
					</div>
					<span className="today-pred--card-item-temp">{temp}°</span>
				</div>
			</div>								
		</div>
	);
}