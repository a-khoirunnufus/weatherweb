import React from 'react';
import iconUrl from '../../assets/icons/weather/day/sunny.png';

export default function StatusIcon() {
	return (
		<div className="current-weather--icon col center">
			<img src={iconUrl} alt="weather icon"/>
			<span>sunny</span>
		</div>
	);
}